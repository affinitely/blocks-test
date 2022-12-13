import React from "react";

export default function Button({ children }) {
  return (
    <button className="px-3 py-2 rounded-lg bg-black text-white">
      {children || "This is button from affinitely-package-test"}
    </button>
  );
}
