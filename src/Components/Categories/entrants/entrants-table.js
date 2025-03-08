import EntrantData from './entrant-data/entrant-data';
import './entrants-table.css'
import { useState } from "react";

function Entrants(props) {
    const [entrantsList, setEntrants] = useState(props.entrants)
    const [filteredEntrants, setFilteredEntrants] = useState(props.entrants)
    const applyFilters = ()=> {
        console.log("apply filters begin:-------------")
        console.log("start:"+filteredEntrants)
        const filteredList = filteredEntrants.filter((e)=>{
            return e.category==1;
        })
        console.log(filteredList)
        setFilteredEntrants(e=>[...e, filteredList])
        console.log("end:"+JSON.stringify(filteredEntrants))
        console.log("apply filters end:-------------")
    }
    return (
        <div>
            <div class="filter-container">
                <div class="searchbar">
                                    <label for="name-search">Search by Name:</label>
                <input type="text" id="name-search" placeholder="Type a name..." onkeyup="applyFilters()" />
                </div>

                <div class="checkbox-group">
                    <label><input type="checkbox" value="Category 1" class="category-filter" onChange={applyFilters}/> Category 1</label>
                    <label><input type="checkbox" value="Category 2" class="category-filter" onChange={(e)=>{applyFilters2(e,props.entrants)}}/> Category 2</label>
                    <label><input type="checkbox" value="Category 3" class="category-filter" onChange={handleChange}/> Category 3</label>
                    <label><input type="checkbox" value="Category 4" class="category-filter" /> Category 4</label>
                    <label><input type="checkbox" value="Category 5" class="category-filter" /> Category 5</label>
                    <label><input type="checkbox" value="Category 6" class="category-filter" /> Category 6</label>
                    <label><input type="checkbox" value="Category 7" class="category-filter" /> Category 7</label>
                    <label><input type="checkbox" value="Category 8" class="category-filter" /> Category 8</label>
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
                        <EntrantData entrant={filteredEntrants[0]}/>
                        {filteredEntrants.map((entry, key)=>{return <EntrantData entrant={entry}/>})}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

function applyFilters2(e, entrants){
    console.log("filters applied")
    entrants[1].name="ratdog"
    console.log(entrants)
    // setEntrants([
    //     {name:"rat",category:5},
    //     {name:"rat",category:1},
    //     {name:"rat",category:2},
    //     {name:"rat",category:2}
    // ])
}

function handleChange(e){
    console.log("handle change bruh")
    console.log(e)
    console.log(document.getElementsByClassName("category-filter"))
}
export default Entrants;