export default function Card(prop) {




    return(
    <div className='card'>
        <img src={prop.url} alt={prop.name}></img>
        <h4 className='cardContent'>{prop.name}</h4>
        <h4 className='cardfooter'>{prop.price} 
        <button className='remove_me' id={prop.id} onClick={(e)=>prop.del(e.target.id)}>'remove_me'</button> 
        
        </h4>
    </div>
    )
}
