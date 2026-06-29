import React, { useState } from 'react';
import { generateContent } from '../lib/ai/text';

export default function Generate() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  async function oneClickGenerate(sample) {
    setLoading(true);
    const payload = await generateContent(sample);
    setResult(payload);
    setLoading(false);
  }

  return (
    <div>
      <div className="mb-3">
        <button onClick={() => oneClickGenerate({ name: 'Sample Product', caption: 'red shoe' })} className="px-4 py-2 bg-white/10 rounded">
          One-click Generate
        </button>
      </div>

      {loading && <div>Generating…</div>}
      {result && (
        <div className="bg-white/5 p-3 rounded">
          <h3 className="font-semibold">{result.title}</h3>
          <p className="mt-2">{result.description}</p>
          <div className="mt-2 text-sm">Tags: {result.tags?.join(', ')}</div>
        </div>
      )}
    </div>
  );
}
