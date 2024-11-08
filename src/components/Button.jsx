import React from "react";

function Button({ label, onClick, className, onMouseDown, onMouseUp }) {
  return (
    <button
      className={className}
      onClick={onClick}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
    >
      {label}
    </button>
  );
}

export default Button;
