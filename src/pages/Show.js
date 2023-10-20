import {useParams, Link} from 
'react-router-dom'
import {useEffect} from 'react'
import Reviews from '../components/Reviews'
import NewReviewForm from '../components/NewReviewForm'



const Show = (props) => {
    const params = useParams()
    const reviews = props.reviews
    console.log(reviews)
    
    

    const loaded = () => {

        const item = props.items.find((item) =>{return (
                item._id === params.id
                )
        })
        
        return(
            <div className='show-page-container'>
                <h3>{item.name}</h3>
                <h5>Price: {item.price}</h5>
                
                {reviews.map((review) => {
            return(
                <Reviews reviews={review} />
            )
        })}
                


                <Link to='/'>
                    <h4>Back</h4>
                </Link>


                <NewReviewForm addReview={props.addReview} deleteAll={props.deleteAll}/>

                
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


//temporary
// app.delete('/api/reviews', async (req,res) => {
//     try{
//       res.json(await Review.deleteMany({}))
//     }catch(err) {
//       res.send(400).json(err)
//     }
//   })