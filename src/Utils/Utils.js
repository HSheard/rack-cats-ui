export default function sortAlphaBetically(entrants){
    return entrants.sort((a,b)=>{
        return a.name.localeCompare(b.name);
    })
}