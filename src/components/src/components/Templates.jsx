import React from 'react';

const sampleTemplates = [
  { id: 'premium', name: 'Premium label' },
  { id: 'minimal', name: 'Minimal label' },
  { id: 'ecom', name: 'Ecommerce label' }
];

export default function Templates() {
  return (
    <div>
      <h2 className="font-semibold mb-2">Templates</h2>
      <div className="grid grid-cols-2 gap-3">
        {sampleTemplates.map((t) => (
          <div key={t.id} className="p-3 bg-white/5 rounded">
            <div className="font-medium">{t.name}</div>
            <div className="text-sm mt-1">One-click apply</div>
          </div>
        ))}
      </div>
    </div>
  );
}
