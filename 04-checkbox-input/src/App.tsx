import { useState } from "react";
import "./App.css";

type Filter = {
  id: string;
  name: string;
};

const filterList: Filter[] = [
  {
    id: "1",
    name: "color",
  },
  {
    id: "2",
    name: "size",
  },
  {
    id: "3",
    name: "gender",
  },
];

function App() {
  const [currentFilters, setCurrentFilters] = useState<Filter[]>([]);

  const addFilter = (added: Filter) => {
    setCurrentFilters((prev) => [...prev, added]);
  };

  const deleteFilter = (removed: Filter) => {
    setCurrentFilters(currentFilters.filter((current) => current.id !== removed.id));
  };

  const isFilterIncluded = (filter: Filter) => {
    return currentFilters.find((current) => current.id === filter.id);
  };

  const toggleFilter = (filter: Filter) => {
    if (isFilterIncluded(filter)) {
      deleteFilter(filter);
    } else {
      addFilter(filter);
    }
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        {filterList.map((filter) => (
          <button
            key={filter.id}
            onClick={() => toggleFilter(filter)}
            className={isFilterIncluded(filter) && "selected"}
          >
            {filter.name}
          </button>
        ))}
      </div>
      <div>
        <h4>Current Filter</h4>
        <div>
          {currentFilters.map((filter) => (
            <button key={filter.id} onClick={() => deleteFilter(filter)}>
              {filter.name} X
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
