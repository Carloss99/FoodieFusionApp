const MenuItem = (props) => {
    
    console.log(props.item)

    return(  
        <div className='menu'>
            <h2>{props.item.name}</h2>
            <h4>{props.item.price}</h4>
            

        </div>
    )
}

export default MenuItem