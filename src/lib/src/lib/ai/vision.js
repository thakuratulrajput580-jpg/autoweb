import * as tf from '@tensorflow/tfjs';
import * as mobilenet from '@tensorflow-models/mobilenet';
import Tesseract from 'tesseract.js';
import ColorThief from 'color-thief-browser';

// Analyze image file -> { caption, classes, colors, ocrText }
export async function analyzeImage(file) {
  try {
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = url;
    await new Promise((res) => (img.onload = res));

    // color
    let colors = [];
    try {
      const ct = new ColorThief();
      const palette = ct.getPalette(img, 3);
      colors = palette.map((c) => `rgb(${c[0]},${c[1]},${c[2]})`);
    } catch (e) {}

    // mobilenet classification
    let classes = [];
    try {
      const model = await mobilenet.load();
      const predictions = await model.classify(img);
      classes = predictions.map((p) => ({ className: p.className, probability: p.probability }));
    } catch (e) {}

    // OCR (Tesseract)
    let ocrText = '';
    try {
      const res = await Tesseract.recognize(url, 'eng');
      ocrText = res.data.text;
    } catch (e) {}

    // simple caption fallback (first class)
    const caption = (classes && classes[0] && classes[0].className) || file.name;

    URL.revokeObjectURL(url);
    return { caption, classes, colors, ocrText };
  } catch (err) {
    return { caption: file.name, classes: [], colors: [], ocrText: '' };
  }
}
