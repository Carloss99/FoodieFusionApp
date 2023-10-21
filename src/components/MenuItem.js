import {Link} from 'react-router-dom'

const MenuItem = (props) => {
    
   

    return(  
        <div className='menu-item'>
            <Link to={`/${props.item._id}`}>
                <h2>{props.item.name}</h2>
            </Link>
            <h4>price: {props.item.price}</h4>
            {/* <h4>rating: {props.item.rating}</h4> */}
            

        </div>
    )
}

export default MenuItem