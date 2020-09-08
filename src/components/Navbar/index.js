import React from "react";
import "./style.scss";

function Navbar(props) {
  return (
    <nav>
      <h1>Juanitirest</h1>
      <input
        type="text"
        className="searchInput"
        placeholder="Buscar en tiempo real"
        onChange={(e) => props.handleSearch(e.target.value)}
      />
    </nav>
  );
}

export default Navbar;
