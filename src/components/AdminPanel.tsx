import React, { useState } from 'react';
import { useContent } from '../contexts/ContentContext';

const AdminPanel: React.FC = () => {
  const { isEditing, setIsEditing, content } = useContent();
  const [isOpen, setIsOpen] = useState(false);

  const toggleEditMode = () => {
    console.log('Toggling edit mode from', isEditing, 'to', !isEditing);
    setIsEditing(!isEditing);
  };

  const exportContent = () => {
    const dataStr = JSON.stringify(content, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'website-content.json';
    link.click();
    URL.revokeObjectURL(url);
  };

  const importContent = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const importedContent = JSON.parse(e.target?.result as string);
          localStorage.setItem('website-content', JSON.stringify(importedContent));
          window.location.reload();
        } catch (error) {
          alert('Invalid file format');
        }
      };
      reader.readAsText(file);
    }
  };

  const resetContent = () => {
    if (confirm('Are you sure you want to reset all content? This cannot be undone.')) {
      localStorage.removeItem('website-content');
      window.location.reload();
    }
  };

  return (
    <>
      {/* Floating Admin Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition z-50"
        title="Admin Panel"
      >
        ⚙️
      </button>

      {/* Admin Panel */}
      {isOpen && (
        <div className="fixed top-16 right-4 bg-white p-6 rounded-lg shadow-xl border border-gray-200 z-50 min-w-80">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Admin Panel</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700 text-xl"
            >
              ×
            </button>
          </div>

          <div className="space-y-4">
            {/* Edit Mode Toggle */}
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">Edit Mode</span>
              <button
                onClick={toggleEditMode}
                className={`relative inline-flex h-6 w-11 items-center rounded-full ${
                  isEditing ? 'bg-green-600' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                    isEditing ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {isEditing && (
              <div className="bg-yellow-50 border border-yellow-200 rounded p-3">
                <p className="text-sm text-yellow-800">
                  💡 Double-click on any text to edit it
                </p>
              </div>
            )}

            {/* Content Management */}
            <div className="border-t pt-4">
              <h4 className="text-sm font-medium text-gray-700 mb-2">Content Management</h4>
              
              <div className="space-y-2">
                <button
                  onClick={exportContent}
                  className="w-full bg-green-600 text-white py-2 px-4 rounded text-sm hover:bg-green-700 transition"
                >
                  📥 Export Content
                </button>

                <label className="w-full bg-blue-600 text-white py-2 px-4 rounded text-sm hover:bg-blue-700 transition cursor-pointer block text-center">
                  📤 Import Content
                  <input
                    type="file"
                    accept=".json"
                    onChange={importContent}
                    className="hidden"
                  />
                </label>

                <button
                  onClick={resetContent}
                  className="w-full bg-red-600 text-white py-2 px-4 rounded text-sm hover:bg-red-700 transition"
                >
                  🗑️ Reset Content
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="border-t pt-4">
              <h4 className="text-sm font-medium text-gray-700 mb-2">Content Stats</h4>
              <p className="text-xs text-gray-600">
                Total editable fields: {Object.keys(content).length}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AdminPanel;
