import {useParams, Link} from 
'react-router-dom'



const Show = (props) => {
    const params = useParams()
    

    const loaded = () => {
        const item = props.items.find((item) =>{
            return item._id === params.id
        })


        
        
        return(
            <div>
                <h3>{item.name}</h3>
                <h5>{item.price}</h5>
        

                <Link to='/'>
                    <h4>Back</h4>
                </Link>
            </div>

            

        )
    }


    return(
        <>
            {props.items ? loaded() : <h1>Loading</h1>}
        </>
    )
}

export default Show