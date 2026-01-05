import { useState, useEffect } from 'react';
import './App.css';
import TechnicalCard from './components/TechnicalCard';
import SearchBar from './components/SearchBar';
import DetailModal from './components/DetailModal';
import ThemeToggle from './components/ThemeToggle';

function App() {
  const [components, setComponents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredComponents, setFilteredComponents] = useState([]);
  const [selectedComponent, setSelectedComponent] = useState(null);

  // Load component data
  useEffect(() => {
    fetch('/components.json')
      .then(response => response.json())
      .then(data => {
        setComponents(data);
        setFilteredComponents(data);
      })
      .catch(error => console.error('Error loading components:', error));
  }, []);

  // Filter components based on search term
  useEffect(() => {
    const filtered = components.filter(component =>
      component.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      component.type.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredComponents(filtered);
  }, [searchTerm, components]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950 transition-colors duration-200">
      {/* Header */}
      <header className="bg-white dark:bg-slate-900 border-b-4 border-industrial-blue dark:border-slate-700 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-4xl font-bold text-industrial-blue dark:text-industrial-light font-mono text-center">
            INTEGRATED COMPONENT CATALOG
          </h1>
          <p className="text-center text-gray-600 dark:text-gray-400 font-mono text-sm mt-2 uppercase tracking-wide">
            Technical Reference Database
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-sm font-mono text-gray-600">
            <span className="font-bold text-industrial-blue">{filteredComponents.length}</span>
            {' '}component{filteredComponents.length !== 1 ? 's' : ''} found
          </p>
        </div>

        {/* Component Grid */}
        {filteredComponents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredComponents.map(component => (
              <TechnicalCard
                key={component.id}
                component={component}
                onClick={setSelectedComponent}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-slate-400 font-mono text-lg">
              No components found matching "{searchTerm}"
            </p>
            <button
              onClick={() => setSearchTerm('')}
              className="mt-4 px-6 py-2 bg-industrial-blue text-white font-mono rounded hover:bg-industrial-accent transition-colors"
            >
              Clear Search
            </button>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="mt-16 bg-white dark:bg-slate-900 border-t-2 border-industrial-blue dark:border-slate-700 py-6">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm font-mono text-gray-600">
            © 2026 Engineering Component Catalog | Technical Reference System
          </p>
        </div>
      </footer>

      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Detail Modal */}
      {selectedComponent && (
        <DetailModal
          component={selectedComponent}
          onClose={() => setSelectedComponent(null)}
        />
      )}
    </div>
  );
}

export default App;
