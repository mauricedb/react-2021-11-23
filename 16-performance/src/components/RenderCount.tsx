import { useRef } from 'react';

export function RenderCount() {
  const count = useRef(1);

  if (process.env.NODE_ENV === 'development') {
    return (
      <span className="render-counter badge bg-primary rounded-pill bg-light text-warning position-absolute top-0 end-0">
        {count.current++}
      </span>
    );
  } else {
    return null;
  }
}
