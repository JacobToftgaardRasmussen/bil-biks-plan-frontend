import React, { ReactNode } from "react";

export default function Collapse(props: { children?: ReactNode }) {
  return (
    <details className="collapse collapse-arrow bg-base-200">
      <summary className="collapse-title text-xl font-medium">
        Click to open/close
      </summary>
      <div className="collapse-content">{props.children}</div>
    </details>
  );
}
