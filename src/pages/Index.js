import MenuItem from '../components/MenuItem'

const Index = (props) =>{
    const menuitems = props.menuitems
    
    
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
            {menuitems ? loaded() : <h1>Loading</h1>}
       </>
    )
}

export default Index