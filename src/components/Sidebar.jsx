import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { DOCS_CONFIG } from '../config/docs';
import './Sidebar.css';

export function Sidebar({ activeDocId, onDocSelect }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        className="sidebar-toggle"
        onClick={toggleSidebar}
        aria-label="Toggle sidebar"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar Overlay (Mobile) */}
      {isOpen && <div className="sidebar-overlay" onClick={toggleSidebar} />}

      {/* Sidebar */}
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h1 className="sidebar-title">Informe Gonmau</h1>
          <p className="sidebar-subtitle">Análisis Forense Sony 2014</p>
        </div>

        <nav className="sidebar-nav">
          <ul className="nav-list">
            {DOCS_CONFIG.map((doc) => (
              <li key={doc.id}>
                <button
                  className={`nav-link ${activeDocId === doc.id ? 'active' : ''}`}
                  onClick={() => {
                    onDocSelect(doc.id, doc.file);
                    setIsOpen(false); // Close sidebar on mobile after selection
                  }}
                  aria-current={activeDocId === doc.id ? 'page' : undefined}
                >
                  <span className="nav-order">{doc.order}</span>
                  <span className="nav-title">{doc.title}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="sidebar-footer">
          <p className="text-sm text-gray-500">Documentación académica</p>
        </div>
      </aside>
    </>
  );
}
