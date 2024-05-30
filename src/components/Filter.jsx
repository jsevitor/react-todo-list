import React from "react";

const Filter = ({ filter, setFilter, setSort }) => {
  return (
    <div className="filter">
      <div className="filter-options">
        <div>
          <h2>Status</h2>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="All">Todos</option>
            <option value="Completed">Completas</option>
            <option value="Incompleted">Incompletas</option>
          </select>
        </div>
        <div>
          <h2>Ordem Alfabética</h2>
          <button onClick={() => setSort("Asc")}>
            <p>A-Z  </p>
            <i class="fa fa-arrow-up"></i>
          </button>
          <button onClick={() => setSort("Desc")}>
            <p>Z-A  </p>
            <i class="fa fa-arrow-down"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
