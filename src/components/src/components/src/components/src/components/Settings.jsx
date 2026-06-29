import React from 'react';

export default function Settings() {
  return (
    <div>
      <h2 className="font-semibold mb-2">Settings</h2>
      <div className="space-y-2">
        <div className="p-3 bg-white/5 rounded">Supabase and GitHub backup settings (add secrets in repo)</div>
        <div className="p-3 bg-white/5 rounded">Language: English (add multi-language later)</div>
      </div>
    </div>
  );
}
