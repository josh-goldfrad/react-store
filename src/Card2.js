function Card(props) {
    return (
        <div className='cardheader'>{props.children}        </div>

    )
}

function Cardheader(props) {
    return (
        <div className="cardheader"> {props.children}  </div>
    )
}

function Cardcontet(props) {
    return (
        <div className="cardcontent">
            {props.children}
        </div>
    )
}



function Cardfooter(props) {
    return (
        <div className="cardfooter">
            {props.children}
        

        </div>
    )
}


export { Card, Cardheader, Cardcontet, Cardfooter }
