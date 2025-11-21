// EditableColor: deprecated passthrough
// This component previously provided an in-place color editor tied to the
// ContentContext. The editing UI has been removed project-wide. Keep a
// lightweight passthrough to avoid refactors in pages that import it.

import React from 'react';

interface EditableColorProps {
  className?: string;
  children: React.ReactNode;
}

const EditableColor: React.FC<EditableColorProps> = ({ className = '', children }) => {
  return <div className={className}>{children}</div>;
};

export default EditableColor;
