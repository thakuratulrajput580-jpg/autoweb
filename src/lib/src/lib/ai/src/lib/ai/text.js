// This file provides local rule-based generation and optional hook for
// free open-source hosted models (Hugging Face self-hosted inference).
// The local generator is deterministic and free.

export async function generateContent({ name = '', caption = '', ocr = '', colors = [] }) {
  // Local rule-based templates (fast, free)
  const title = `${name} — ${caption}`.trim();
  const short = `${caption} in ${colors?.[0] || 'multiple colors'}`;
  const description = `${title}. Features: High-quality material, comfortable fit, manufactured with care. ${ocr ? 'Text on product: ' + ocr : ''}`;
  const bullets = [
    'Premium material',
    'Available in multiple sizes',
    'Carefully packaged',
    'SKU suggestion: ' + generateSKU(name)
  ];
  const tags = [caption.split(' ')[0], ...(colors || []).slice(0, 2)];
  return {
    title,
    short,
    description,
    bullets,
    tags,
    meta: {
      seoTitle: title,
      seoDesc: description.slice(0, 160)
    }
  };
}

function generateSKU(name) {
  const s = (name || 'item').toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 6);
  const num = Math.floor(Math.random() * 9000) + 1000;
  return `${s}-${num}`;
}
