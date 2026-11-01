import { stack } from "@/lib/site";

export function Marquee() {
  const items = [...stack, ...stack];

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {items.map((item, index) => (
          <span className="marquee__item" key={`${item}-${index}`}>
            {item}
            <i>✳</i>
          </span>
        ))}
      </div>
    </div>
  );
}
