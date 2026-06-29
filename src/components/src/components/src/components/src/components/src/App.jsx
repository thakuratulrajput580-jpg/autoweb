import React, { useState } from 'react';
import Upload from './components/Upload';
import Generate from './components/Generate';
import History from './components/History';
import Templates from './components/Templates';
import Exporter from './components/Exporter';
import Settings from './components/Settings';

export default function App() {
  const [tab, setTab] = useState('home');

  return (
    <div className="min-h-screen container">
      <header className="flex items-center justify-between py-4">
        <h1 className="text-xl font-semibold">AutoLabel</h1>
        <nav>
          <button onClick={() => setTab('home')} className="px-3">Home</button>
          <button onClick={() => setTab('upload')} className="px-3">Upload</button>
          <button onClick={() => setTab('generate')} className="px-3">Generate</button>
          <button onClick={() => setTab('history')} className="px-3">History</button>
          <button onClick={() => setTab('templates')} className="px-3">Templates</button>
          <button onClick={() => setTab('export')} className="px-3">Export</button>
          <button onClick={() => setTab('settings')} className="px-3">Settings</button>
        </nav>
      </header>

      <main className="py-4">
        {tab === 'home' && (
          <section>
            <p className="mb-4">Mobile-first AI labeling automation. One-click generate & export.</p>
            <Upload />
          </section>
        )}
        {tab === 'upload' && <Upload />}
        {tab === 'generate' && <Generate />}
        {tab === 'history' && <History />}
        {tab === 'templates' && <Templates />}
        {tab === 'export' && <Exporter />}
        {tab === 'settings' && <Settings />}
      </main>
    </div>
  );
}
