import { useParams } from "react-router-dom"

const ItemDetails = () => {
  const params=useParams();
  console.log(params)
  
    return (
    <div>
        <h1>itemsDetails</h1>
        <h1>{params.id}</h1>
    </div>
  )
}

export default ItemDetails