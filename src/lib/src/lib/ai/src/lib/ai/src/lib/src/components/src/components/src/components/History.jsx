import React, { useEffect, useState } from 'react';
import localforage from 'localforage';

export default function History() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function load() {
      const keys = await localforage.keys();
      const imgs = [];
      for (const k of keys) {
        if (k.startsWith('img_')) {
          const v = await localforage.getItem(k);
          imgs.push({ key: k, name: v.name });
        }
      }
      setItems(imgs);
    }
    load();
  }, []);

  return (
    <div>
      <h2 className="font-semibold mb-2">History</h2>
      {items.length === 0 && <div className="opacity-70">No uploads yet.</div>}
      <ul className="space-y-2">
        {items.map((it) => (
          <li key={it.key} className="p-2 bg-white/5 rounded">{it.name}</li>
        ))}
      </ul>
    </div>
  );
}
