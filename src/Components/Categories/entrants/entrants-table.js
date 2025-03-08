import EntrantData from './entrant-data/entrant-data';
import './entrants-table.css'
import { useState } from "react";

function Entrants(props) {
    const [filteredEntrants, setFilteredEntrants] = useState(props.entrants)
    const filterEntrants = () => {
        const filteredList = applyFilters(props.entrants)
        console.log("filtered: " + JSON.stringify(applyFilters(props.entrants)))
        setFilteredEntrants([...filteredList])
        console.log("end" + JSON.stringify(filteredEntrants))
    }

    const clearFilters = () => {
        setFilteredEntrants([...props.entrants])
    }
    return (
        <div>
            <div class="filter-container">
                <div class="searchbar">
                    <label for="name-search">Search by Name:</label>
                    <div id="search-input">
                        <input type="text" id="name-search" placeholder="Type a name..." onChange={filterEntrants} />
                        <button class="clear-button" onClick={clearFilters}>Clear Filters</button>
                    </div>
                </div>

                <div class="checkbox-group" id="entrant-filters">
                    <label><input type="checkbox" value="Category 1" class="category-filter" onChange={filterEntrants} /> Category 1</label>
                    <label><input type="checkbox" value="Category 2" class="category-filter" onChange={filterEntrants} /> Category 2</label>
                    <label><input type="checkbox" value="Category 3" class="category-filter" onChange={filterEntrants} /> Category 3</label>
                    <label><input type="checkbox" value="Category 4" class="category-filter" onChange={filterEntrants} /> Category 4</label>
                    <label><input type="checkbox" value="Category 5" class="category-filter" onChange={filterEntrants} /> Category 5</label>
                    <label><input type="checkbox" value="Category 6" class="category-filter" onChange={filterEntrants} /> Category 6</label>
                    <label><input type="checkbox" value="Category 7" class="category-filter" onChange={filterEntrants} /> Category 7</label>
                    <label><input type="checkbox" value="Category 8" class="category-filter" onChange={filterEntrants} /> Category 8</label>
                </div>
            </div>
            <div class="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Category</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredEntrants.map((entry, key) => { return <EntrantData entrant={entry} /> })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

function textChange(e, entrants) {
    console.log("text has changed")
}

function handleChange(e) {
    console.log("handle change bruh")
    console.log(e)
    console.log(document.getElementsByClassName("category-filter"))
}

function applyFilters(entrantsList) {
    const entrantFilters = document.getElementById("entrant-filters")
    const checkBoxes = entrantFilters.querySelectorAll("input[type=checkbox]")
    const searchFilter = document.getElementById("name-search").value
    var filters = [];
    checkBoxes.forEach(item => {
        if (item.checked) {
            console.log(item.value)
            filters.push(item.value)
        }
    })

    if (filters.length == 0) {
        return entrantsList.filter((e) => {
            return e.name.toLowerCase().includes(searchFilter.toLowerCase())
        })
    }
    return entrantsList.filter((e) => {
        console.log(e.category)
        console.log()
        console.log("searchfilter=" + searchFilter)
        return filters.includes("Category " + e.category) && e.name.toLowerCase().includes(searchFilter.toLowerCase())
    })
}

function clearFilterElements(){
    
}
export default Entrants;
