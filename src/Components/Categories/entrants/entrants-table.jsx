import Divider from "../../Misc/Divider";
import EntrantData from "./entrant-data/entrant-data";
import React, { useEffect, useState } from "react";
import Filter from "./Filter";
import { sortCategories } from "../Categories";

function Entrants(props) {
  const [filteredEntrants, setFilteredEntrants] = useState(props.entrants);
  // Array of categories to filter
  const [filteredCategories, setFilteredCategories] = useState([]);
  // Value of the search box
  const [filteredName, setFilteredName] = useState("");

  // Adds a list which could then be changed to rapidly add new categories if needed
  const generateFilters = () => {
    const categories = [1, 2, 3, 4, 5, 6, 7, 8];

    return categories.map((category, index) => {
      return (
        // When you make elements by iterating over a list, you should give them a unique "key" for performance reasons
        // In this case as I need two sibling elements without a parent element, I have to wrap them in a React.Fragment
        // and then pass the unique key to the fragment, which acts as a sort of ghost parent object that gets spread when rendered
        // If I just wanted the one parent element being rendered, I only have to pass the key to that element (as shown below)
        <React.Fragment key={index}>
          <Filter
            key={"category-" + category}
            toggleFilter={toggleFilter}
            category={category}
            filteredCategories={filteredCategories}
          />
          {index + 1 !== categories.length ? (
            <Divider key={"divider-" + index} />
          ) : null}
        </React.Fragment>
      );
    });
  };

  // Slightly more simplified logic for setting filters by using state values, just means the data is more readily available
  const toggleFilter = (category) => {
    if (filteredCategories.includes(category)) {
      setFilteredCategories(
        [...filteredCategories].filter((value) => {
          return value !== category;
        })
      );
    } else {
      setFilteredCategories([...filteredCategories, category]);
    }
  };


  // Check all filters and update filtered entrants list
  const filterEntrants = () => {
    let filteredList = [...props.entrants];

    console.log(JSON.stringify(filteredCategories))
    console.log(JSON.stringify(filteredName))
    if (filteredCategories.length == 0) {
      filteredList = filteredList.filter((e) => {
          return e.name.toLowerCase().startsWith(filteredName.toLowerCase())
      })
  }
  else{
    filteredList = filteredList.filter((e)=>{
      return e.name.toLowerCase().startsWith(filteredName.toLowerCase()) && filteredCategories.includes(e.category)
    })
  }
    // console.log("Filtered list is "+JSON.stringify(filteredList));

    setFilteredEntrants([...sortCategories(filteredList)]);
  };

  const clearFilters = () => {
    setFilteredCategories([]);
    setFilteredName("");
    document.getElementById("name-search").value = "";
  };

  // This function runs on page load, and updates every time a value in the dependency array changes
  useEffect(
    () => {
      filterEntrants();
    },
    // Dependency array
    [filteredName, filteredCategories]
  );

  return (
    <div className="entrants-container">
      <div className="filter-container">
        <div className="searchbar">
          {/* Small change but when using the for attrbute in react be sure to use htmlFor. Similarly use className instead of class as it's
          just the way that react does things. I can't remember why it's important but it stops react complaining in the console */}
          <label htmlFor="name-search" className="filter-label">
            Search by Name:
          </label>
          <div id="search-input">
            <input
              type="text"
              id="name-search"
              placeholder="Type a name..."
              onChange={(e) => setFilteredName(e.target.value)}
              autoComplete="off"
            />
            <button className="clear-button" onClick={clearFilters}>
              Clear Filters
            </button>
          </div>
        </div>
        <div>
          <div className="filter-label">Categories:</div>
          <div className="checkbox-group" id="entrant-filters">
            {generateFilters()}
          </div>
        </div>
      </div>
      <div className="table-container entrants-table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {filteredEntrants.map((entry, key) => {
              // Here you are only rendering one element, so we don't need to wrap it in a fragment
              return <EntrantData key={entry.name} entrant={entry} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Entrants;
