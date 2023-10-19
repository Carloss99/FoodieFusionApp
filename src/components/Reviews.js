const Reviews = (props) => {
    console.log(props.review)

    const loaded = () => {
        return(
            <div className='reviews'>
                <h2>Reviews</h2>
                <div>{props.review[0].text} {props.review[0].rating}</div>
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