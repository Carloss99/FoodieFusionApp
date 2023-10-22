import { useParams, Link } from
    'react-router-dom'
import { useEffect } from 'react'
import Reviews from '../components/Reviews'
import NewReviewForm from '../components/NewReviewForm'

//this page is showing ALL reviews

const Show = (props) => {
    const params = useParams()
    const id = params.id

    //varaible that holds all reviews
    const reviews = props.reviews
    console.log(reviews)
    //variable that holds specific menu item
    const menuItem = props.items.find((item)=>{return(item._id === params.id)})
    console.log(menuItem)
    
    //reviews filtered by menu item name
    // const filteredReviews = reviews.filter(review =>  review.menuItemName === menuItem.name)
    const filteredReviews = menuItem ? reviews.filter(review => review.menuItemName === menuItem.name) : [];



    // useEffect(() => {props.getReviews()}, [])
    useEffect(() => {
        props.getReviews?.();
    });
    

    
    const loaded = () => {
        if (!menuItem) {
            return <h1>Item not found</h1>;
        }

        return (
            <div className='show-page-container'>

                <h3>{menuItem.name}</h3>
                <h5>Price: {menuItem.price}</h5>

                {filteredReviews.map((review) => {
                    return (
                        <Reviews review={review} deleteReview={props.deleteReview} editReview={props.editReview}/>
                    )
                })}



                <Link to='/'>
                    <h4>Back</h4>
                </Link>


                <NewReviewForm addReview={props.addReview} deleteAll={props.deleteAll} />


            </div>
        )
    }





    return (
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