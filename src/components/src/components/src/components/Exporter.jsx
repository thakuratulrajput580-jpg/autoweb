import React from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import JSZip from 'jszip';

export default function Exporter() {
  async function exportPDF() {
    const el = document.body; // replace with label node
    const canvas = await html2canvas(el);
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({ orientation: 'portrait' });
    pdf.addImage(imgData, 'PNG', 10, 10, 180, 0);
    pdf.save('labels.pdf');
  }

  async function exportZip() {
    const zip = new JSZip();
    zip.file('README.txt', 'Exported from AutoLabel');
    const blob = await zip.generateAsync({ type: 'blob' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'labels.zip';
    a.click();
  }

  return (
    <div className="space-y-3">
      <button onClick={exportPDF} className="px-4 py-2 bg-white/10 rounded">Export PDF</button>
      <button onClick={exportZip} className="px-4 py-2 bg-white/10 rounded">Export ZIP</button>
    </div>
  );
}
