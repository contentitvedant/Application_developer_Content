import { Link } from "react-router-dom"

const Items = () => {
  return (
    <div>
        <h1>Items</h1>
       
            
           <ul>
            <Link to='/items/item-1'><li></li></Link>
            <Link to='/items/item-2'><li></li></Link>
            <Link to='/items/item-3'> <li></li></Link>
            <Link to='/items/item-4'><li></li></Link>
           </ul>
   
        
        
    </div>
  )
}

export default Items