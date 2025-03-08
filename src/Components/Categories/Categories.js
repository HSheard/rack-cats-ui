import Entrants from "./entrants/entrants-table";

function Categories(){
    const entrantsList = [
        {name:"Luke",category:5},
        {name:"Hakim",category:1},
        {name:"Jake",category:2}
    ]
    return (
        <div class="categories">
            <Entrants entrants={entrantsList}/>
        </div>
    )
}


export default Categories;