import './entrants-table.css'

function Entrants(props) {
    return (
        <div>
            <div class="filter-container">
                <div class="searchbar">
                                    <label for="name-search">Search by Name:</label>
                <input type="text" id="name-search" placeholder="Type a name..." onkeyup="applyFilters()" />
                </div>

                <div class="checkbox-group">
                    <label><input type="checkbox" value="Category 1" class="category-filter" /> Category 1</label>
                    <label><input type="checkbox" value="Category 2" class="category-filter" /> Category 2</label>
                    <label><input type="checkbox" value="Category 3" class="category-filter" /> Category 3</label>
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
                            {props.entrants.map((entrant,key)=>{
                                return(
                                    <tr key={key}>
                                        <td>{entrant.name}</td>
                                        <td>{entrant.category}</td>
                                    </tr>
                                )
                            })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Entrants;