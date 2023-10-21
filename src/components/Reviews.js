// this is a page that shows ONE review

const Reviews = (props) => {
    console.log(props.reviews)

    const loaded = () => {
        return(
            <div className='reviews'>
                
                <div>
                    Restaurant: {props.reviews.restaurantName} <br/>
                    Meal: {props.reviews.text} <br/>
                    rating: {props.reviews.rating}
                </div>
            </div>
        )
    }

    return(
        <div>
        {props.reviews ? loaded() : <h1>loading</h1>}
        </div>
    )
}

export default Reviews