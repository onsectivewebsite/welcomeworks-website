import type { ReactNode } from "react";

export type QA = { q: string; a: ReactNode };

export default function FaqList({ items }: { items: QA[] }) {
  return (
    <div>
      {items.map((item, i) => (
        <details className="faq-item" key={i}>
          <summary>
            {item.q}
            <span className="plus" aria-hidden="true">+</span>
          </summary>
          <div className="faq-body">{typeof item.a === "string" ? <p>{item.a}</p> : item.a}</div>
        </details>
      ))}
    </div>
  );
}
