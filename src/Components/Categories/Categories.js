import { useState } from "react";
import Entrants from "./entrants/entrants-table";
import entrants from "./player_categories.json"

function Categories(){
    console.log("DATALOADED: "+JSON.stringify(entrants))
    const entrantsList = [
        {name:"Luke",category:5},
        {name:"Hakim",category:1},
        {name:"Jake",category:2},
        {name:"bob",category:2}
    ]
    return (
        <div class="categories">
            <Entrants entrants={entrants}/>
        </div>
    )
}


export default Categories;