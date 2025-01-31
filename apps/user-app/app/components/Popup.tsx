// Popup.tsx
import React, { ReactNode } from 'react';

interface PopupProps {
  children: ReactNode;
}

const Popup: React.FC<PopupProps> = ({ children }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Optional backdrop */}
      <div className="absolute inset-0 bg-slate-400 opacity-50"></div>
      {/* Content container */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default Popup;
