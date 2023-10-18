const Reviews = (props) => {
    console.log(props.review)

    return(
        <div className='reviews'>
            <h2>Reviews</h2>
            <div>{props.review[0].text} {props.review[0].rating}</div>
        </div>
    )
}

export default Reviews