import Li from "../Li/Li";

function List(){
    let ulstyle = {display: "flex", listStyle: "none"};
    let listyle = {padding: 10};
    let astyle = {textDecoration: "none", fontSize: 16, color: "black"};

    let listname = ["Home","UseCases","Features","Pages","Pricing"]

    return(
        <ul style={ulstyle}>
            {
                listname.map((val)=>{
                    console.log(val);
                    return(
                        <Li tye={listyle} listy={astyle} name={val} />
                    )
                })
            }
        </ul>
    )
}

export default List;