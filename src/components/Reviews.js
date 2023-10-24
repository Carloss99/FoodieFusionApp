// this is a page that shows ONE review
import { useNavigate } from "react-router-dom"

const Reviews = (props) => {
    const navigate = useNavigate()
    // console.log(props.review)

    const handleDelete = () => {
        props.deleteReview(props.review._id)


    }

    const handleEdit= () => {
        navigate(`/edit/${props.review._id}`)
    }

    const loaded = () => {
        return(
            <div className='reviews'>
                
                <div>
                    Restaurant: {props.review.restaurantName} <br/>
                    Meal: {props.review.text} <br/>
                    rating: {props.review.rating}
                </div>

                <button onClick={handleDelete}>remove</button>
                <button onClick={handleEdit}>Edit</button>
            </div>
        )
    }

    return(
        <div>
        {props.review ? loaded() : <h1>loading</h1>}
        </div>
    )
}

export default Reviews