import React from "react";
import Vehicle from "../vehicle";

export default function Collapse() {
  return (
    <details className="collapse collapse-arrow bg-base-200">
      <summary className="collapse-title text-xl font-medium">
        Click to open/close
      </summary>
      <div className="collapse-content">
        <Vehicle />
      </div>
    </details>
  );
}
