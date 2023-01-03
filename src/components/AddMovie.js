
import React, { useState } from 'react'
const AddMovie = ({handelAdd}) => {


  let [titlee,setTitle]=useState()
let [descreptionn,setDescreption]=useState()
let [raitingg,setRaitng]=useState()
let[posterURLL,setPosterURL]=useState()

const newMovie=()=>{
handelAdd({
id:Date.now(),
title:titlee ,
description:descreptionn,
rating:raitingg,
posterURL:posterURLL
})}


  return (
<div className='inputs'>
title:<input type='text' onChange= {(event)=>setTitle(event.target.value)} />
descreption: <input type='text' onChange= {(event)=>setDescreption(event.target.value) } />
raiting: <input type='text' onChange={(event)=> setRaitng(event.target.value)} />
posterURL:<input type='text' onChange={(event)=> setPosterURL(event.target.value)}/>
<button onClick={newMovie}>Add</button>
</div>

)
}

export default AddMovie