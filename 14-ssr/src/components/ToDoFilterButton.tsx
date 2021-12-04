import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  currentFilter: Filter;
  filter: Filter;
  setFilterTo: (filter: Filter) => void;
}

export function ToDoFilterButton({
  children,
  currentFilter,
  filter,
  setFilterTo,
}: Props) {
  return (
    <button
      id={filter}
      className="btn btn-link shadow-none"
      style={{ fontWeight: filter === currentFilter ? 'bold' : undefined }}
      onClick={() => setFilterTo(filter)}
    >
      {children}
    </button>
  );
}
