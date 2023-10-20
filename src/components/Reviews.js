const Reviews = (props) => {
    console.log(props.reviews)

    const loaded = () => {
        return(
            <div className='reviews'>
                
                <div>{props.reviews.text} {props.reviews.rating}</div>
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