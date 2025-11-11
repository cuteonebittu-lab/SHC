import React, { useState, useRef, useEffect } from 'react';
import { useContent } from '../contexts/ContentContext';

interface EditableImageProps {
  page: string;
  section: string;
  field: string;
  defaultSrc: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}

const EditableImage: React.FC<EditableImageProps> = ({
  page,
  section,
  field,
  defaultSrc,
  alt,
  className = '',
  width,
  height
}) => {
  const { isEditing, getContent, updateContent } = useContent();
  const [isEditingLocal, setIsEditingLocal] = useState(false);
  const [src, setSrc] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const id = `${page}-${section}-${field}`;
  const content = getContent(page, section, field, defaultSrc);

  useEffect(() => {
    setSrc(content);
  }, [content]);

  const handleDoubleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isEditing) {
      setIsEditingLocal(true);
      setTimeout(() => {
        if (fileInputRef.current) {
          fileInputRef.current.click();
        }
      }, 0);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        setSrc(result);
        updateContent(id, result);
      };
      reader.readAsDataURL(file);
    }
    setIsEditingLocal(false);
  };

  const handleCancel = () => {
    setIsEditingLocal(false);
  };

  return (
    <div className="relative inline-block">
      <img
        src={src}
        alt={alt}
        className={`${className} ${isEditing ? 'border-2 border-dashed border-gray-300 hover:border-blue-500 cursor-pointer' : ''}`}
        onDoubleClick={handleDoubleClick}
        title={isEditing ? 'Double-click to change image' : ''}
        width={width}
        height={height}
      />
      
      {isEditing && isEditingLocal && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded">
          <div className="bg-white p-4 rounded shadow-lg text-center">
            <p className="text-sm mb-2">Upload new image</p>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />
            <button
              onClick={handleCancel}
              className="text-xs bg-gray-500 text-white px-2 py-1 rounded hover:bg-gray-600"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditableImage;
