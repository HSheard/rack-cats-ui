import { useState } from "react";
import Entrants from "./entrants/entrants-table";
import entrants from "./player_categories.json";
import "./Categories.css";

function Categories() {
  console.log("DATALOADED: " + JSON.stringify(entrants));
  
  return (
    <div className="categories">
      <Entrants entrants={sortCategories(entrants)} />
    </div>
  );
}

export function sortCategories(entrantsList){
  console.log("soirting the list")
  return entrantsList.sort((a,b)=>{
    if(a.category===b.category){
      return a.name.localeCompare(b.name);
    }
    return a.category - b.category
  })
}

export default Categories;

