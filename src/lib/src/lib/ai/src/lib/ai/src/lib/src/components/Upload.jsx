import React, { useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { analyzeImage } from '../lib/ai/vision';
import localforage from 'localforage';

export default function Upload() {
  const inputRef = useRef();
  const [items, setItems] = useState([]);

  async function handleFiles(files) {
    const arr = Array.from(files);
    const newItems = await Promise.all(
      arr.map(async (file) => {
        const id = uuidv4();
        const url = URL.createObjectURL(file);
        // Basic local store (offline ready)
        await localforage.setItem(`img_${id}`, { name: file.name, file });
        // client-side analysis: color, ocr, mobilenet label
        const ai = await analyzeImage(file);
        const item = {
          id,
          name: file.name,
          url,
          ai
        };
        return item;
      })
    );
    setItems((s) => [...newItems, ...s]);
  }

  return (
    <div className="space-y-4">
      <div className="p-3 border rounded bg-white/5">
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          multiple
          onChange={(e) => handleFiles(e.target.files)}
          className="w-full"
        />
        <div className="text-sm mt-2">Upload from gallery or camera. Drag & drop works in modern mobile browsers.</div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {items.map((it) => (
          <div key={it.id} className="bg-white/5 p-2 rounded">
            <img src={it.url} alt={it.name} className="w-full h-32 object-cover rounded" />
            <div className="text-xs mt-1">{it.ai?.caption || it.name}</div>
            <div className="text-xxs opacity-70">{it.ai?.colors?.join(', ')}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
