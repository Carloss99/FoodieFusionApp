import {Link} from 'react-router-dom'

const MenuItem = (props) => {
    
   

    return(  
        <div className='menu-item'>
            <Link to={`/${props.item._id}`}>
                <h2>{props.item.name}</h2>
            </Link>
            <h4>{props.item.price}</h4>
            

        </div>
    )
}

export default MenuItem