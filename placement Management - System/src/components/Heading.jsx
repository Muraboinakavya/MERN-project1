// props:properties
// using destructuring
let Heading = function({name,year}){
    return(
        <div>
            <h2>Heading1</h2>
            <h2>Welcome{name}</h2>
            <h3>passed year{year}</h3>
        </div>
    )
}
export default Heading;