import { useState } from "react";
import Entrants from "./entrants/entrants-table";
import entrants from "./player_categories.json";
import "./Categories.css";

function Categories() {
  console.log("DATALOADED: " + JSON.stringify(entrants));

  return (
    <div class="categories">
      <Entrants entrants={entrants} />
    </div>
  );
}

export default Categories;
