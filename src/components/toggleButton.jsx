import React from 'react';

function ToggleButton({ label, id, activeId, onClick }) {
  const isActive = id === activeId;

  return (
    <button
      className={`${
        isActive ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
      } px-4 py-2 rounded mr-2`}
      onClick={() => onClick(id)}
    >
      {label}
    </button>
  );
}

export default ToggleButton;
