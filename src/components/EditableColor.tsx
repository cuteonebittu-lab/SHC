import React, { useState, useRef, useEffect } from 'react';
import { useContent } from '../contexts/ContentContext';

interface EditableColorProps {
  page: string;
  section: string;
  field: string;
  defaultColor: string;
  className?: string;
  children: React.ReactNode;
}

const EditableColor: React.FC<EditableColorProps> = ({
  page,
  section,
  field,
  defaultColor,
  className = '',
  children
}) => {
  const { isEditing, getContent, updateContent } = useContent();
  const [isEditingLocal, setIsEditingLocal] = useState(false);
  const [color, setColor] = useState('');
  const colorInputRef = useRef<HTMLInputElement>(null);

  const id = `${page}-${section}-${field}`;
  const content = getContent(page, section, field, defaultColor);

  useEffect(() => {
    setColor(content);
  }, [content]);

  const handleDoubleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isEditing) {
      setIsEditingLocal(true);
      setTimeout(() => {
        if (colorInputRef.current) {
          colorInputRef.current.click();
        }
      }, 0);
    }
  };

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = e.target.value;
    setColor(newColor);
    updateContent(id, newColor);
    setIsEditingLocal(false);
  };

  const handleCancel = () => {
    setIsEditingLocal(false);
  };

  return (
    <div className="relative inline-block">
      <div
        className={`${className} ${isEditing ? 'border-2 border-dashed border-gray-300 hover:border-blue-500 cursor-pointer' : ''}`}
        style={{ color: color }}
        onDoubleClick={handleDoubleClick}
        title={isEditing ? 'Double-click to change color' : ''}
      >
        {children}
      </div>
      
      {isEditing && isEditingLocal && (
        <div className="absolute top-full left-0 mt-2 bg-white p-4 rounded shadow-lg z-50">
          <p className="text-sm mb-2">Choose a color</p>
          <input
            ref={colorInputRef}
            type="color"
            value={color}
            onChange={handleColorChange}
            className="w-full h-10 cursor-pointer"
          />
          <button
            onClick={handleCancel}
            className="mt-2 text-xs bg-gray-500 text-white px-2 py-1 rounded hover:bg-gray-600 w-full"
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default EditableColor;
