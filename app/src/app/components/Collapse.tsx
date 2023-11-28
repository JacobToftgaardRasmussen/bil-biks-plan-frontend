import { title } from "process";
import React, { ReactNode } from "react";

export default function Collapse(props: {
  children?: ReactNode;
  title: string;
}) {
  return (
    <details className="collapse collapse-arrow bg-base-200">
      <summary className="collapse-title text-xl font-medium">
        {props.title}
      </summary>
      <div className="collapse-content">{props.children}</div>
    </details>
  );
}
