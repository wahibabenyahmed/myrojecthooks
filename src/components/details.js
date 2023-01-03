import React from 'react'
import { useParams,useNavigate } from 'react-router-dom'

const Details = ({films}) => {
const navigate=useNavigate();
const ID= useParams()
let res = films.find(el=>el.id===Number(ID.id))


  return (
    <div>
<h1>{res.title} </h1>
<iframe src={res.trailer} title='video1' > </iframe>
<button onClick={()=>navigate('/')}  > retour</button>
    </div>
  )
}

export default Details