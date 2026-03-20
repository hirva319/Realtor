import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Bookmark, ExternalLink, Trash2, ChevronDown, ChevronUp,
  Home, TrendingUp, Plus, FileText,
} from 'lucide-react';
import { useFirestore } from '../hooks/useFirestore';

const SavedProperties = () => {
  const { loadProperties, deleteProperty, updateProperty } = useFirestore();
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedId, setExpandedId] = useState(null);
  const [editingNotes, setEditingNotes] = useState({});

  useEffect(() => {
    loadProperties()
      .then(props => {
        const sorted = props.sort((a, b) => {
          const aTime = a.savedAt?.seconds || 0;
          const bTime = b.savedAt?.seconds || 0;
          return bTime - aTime;
        });
        setProperties(sorted);
      })
      .finally(() => setLoading(false));
  }, [loadProperties]);

  const handleDelete = async (id) => {
    if (!confirm('Remove this saved property?')) return;
    await deleteProperty(id);
    setProperties(prev => prev.filter(p => p.id !== id));
  };

  const handleNotesSave = async (id) => {
    const notes = editingNotes[id];
    if (notes === undefined) return;
    await updateProperty(id, { notes });
    setProperties(prev => prev.map(p => p.id === id ? { ...p, notes } : p));
    setEditingNotes(prev => { const n = { ...prev }; delete n[id]; return n; });
  };

  const formatDate = (timestamp) => {
    if (!timestamp?.seconds) return 'Unknown date';
    return new Date(timestamp.seconds * 1000).toLocaleDateString('en-US', {
      month: 'short', day: 'numeric', year: 'numeric',
    });
  };

  const getDomain = (url) => {
    try { return new URL(url).hostname.replace('www.', ''); } catch { return url; }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="flex flex-col items-center space-y-4">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-600 border-t-transparent" />
          <p className="text-gray-500 font-medium">Loading saved properties...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-indigo-700 to-blue-800 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm">
              <Bookmark className="h-10 w-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-3">Saved Properties</h1>
          <p className="text-indigo-100 text-lg max-w-2xl mx-auto">
            Your saved Zillow listings and negotiation strategies in one place.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10">
        {properties.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-md p-12 text-center">
            <div className="bg-indigo-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Home className="h-8 w-8 text-indigo-600" />
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">No saved properties yet</h2>
            <p className="text-gray-500 mb-6">
              Run a negotiation analysis on a Zillow listing and click "Save Property" to store it here.
            </p>
            <Link to="/negotiation" className="btn-primary inline-flex items-center space-x-2">
              <TrendingUp className="h-5 w-5" />
              <span>Go to Negotiation AI</span>
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-2">
              <p className="text-gray-500 text-sm">{properties.length} saved {properties.length === 1 ? 'property' : 'properties'}</p>
              <Link
                to="/negotiation"
                className="flex items-center space-x-1 text-sm text-blue-600 hover:text-blue-800 font-medium"
              >
                <Plus className="h-4 w-4" />
                <span>Analyze new property</span>
              </Link>
            </div>

            {properties.map((property) => (
              <div key={property.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                {/* Property header */}
                <div className="p-5 flex items-start justify-between gap-4">
                  <div className="flex items-start space-x-3 min-w-0">
                    <div className="bg-indigo-100 p-2 rounded-lg flex-shrink-0 mt-0.5">
                      <Home className="h-5 w-5 text-indigo-600" />
                    </div>
                    <div className="min-w-0">
                      <a
                        href={property.zillowUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1 text-blue-600 hover:text-blue-800 font-medium text-sm truncate"
                      >
                        <ExternalLink className="h-4 w-4 flex-shrink-0" />
                        <span className="truncate">{property.zillowUrl}</span>
                      </a>
                      <p className="text-xs text-gray-400 mt-1">
                        {getDomain(property.zillowUrl)} · Saved {formatDate(property.savedAt)}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 flex-shrink-0">
                    <button
                      onClick={() => handleDelete(property.id)}
                      className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors duration-200"
                      title="Remove property"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => setExpandedId(expandedId === property.id ? null : property.id)}
                      className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                    >
                      {expandedId === property.id
                        ? <ChevronUp className="h-4 w-4" />
                        : <ChevronDown className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                {/* Expanded details */}
                {expandedId === property.id && (
                  <div className="border-t border-gray-100 p-5 space-y-5 bg-gray-50">
                    {/* Notes */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center space-x-1">
                        <FileText className="h-4 w-4" />
                        <span>Notes</span>
                      </label>
                      <textarea
                        value={editingNotes[property.id] ?? property.notes ?? ''}
                        onChange={e => setEditingNotes(prev => ({ ...prev, [property.id]: e.target.value }))}
                        placeholder="Add your notes about this property..."
                        rows={3}
                        className="input-field resize-none text-sm"
                      />
                      {editingNotes[property.id] !== undefined && (
                        <div className="flex space-x-2 mt-2">
                          <button
                            onClick={() => handleNotesSave(property.id)}
                            className="px-3 py-1.5 bg-blue-600 text-white text-xs font-semibold rounded-lg hover:bg-blue-700"
                          >
                            Save notes
                          </button>
                          <button
                            onClick={() => setEditingNotes(prev => { const n = { ...prev }; delete n[property.id]; return n; })}
                            className="px-3 py-1.5 bg-gray-100 text-gray-600 text-xs font-semibold rounded-lg hover:bg-gray-200"
                          >
                            Cancel
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Saved strategy */}
                    {property.strategy && (
                      <div>
                        <h4 className="text-sm font-semibold text-gray-700 mb-2 flex items-center space-x-1">
                          <TrendingUp className="h-4 w-4 text-blue-600" />
                          <span>Saved Negotiation Strategy</span>
                        </h4>
                        <div className="bg-white rounded-xl border border-gray-200 p-4 text-sm text-gray-700 whitespace-pre-wrap max-h-96 overflow-y-auto leading-relaxed">
                          {property.strategy}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SavedProperties;
