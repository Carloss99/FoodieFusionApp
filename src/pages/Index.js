import MenuItem from '../components/MenuItem'

const Index = (props) =>{
    const menuitems = props.items
    
    const loaded = () => {
        return(
            menuitems.map((item) => {
                return(
                    <MenuItem item={item}/>
                )
            })
        )
    }
    
    

    return(
        <>
            {props.items ? loaded() : <h1>Loading</h1>}
       </>
    )
}

export default Index