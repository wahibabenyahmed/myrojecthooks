import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import {useNavigate} from 'react-router-dom';


const MovieCard = ({element}) => {
  const navigate = useNavigate();
  return (
    <div  className='fond' >
    

<Card   style={{ width: '18rem' }}>
      <Card.Img variant="top" src={element.posterURL} height='300px' />
      <Card.Body>
        <Card.Title>{element.title}</Card.Title>
        <Card.Text>
          {element.description}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{element.rating}</ListGroup.Item>
        
      </ListGroup>
      <button onClick={()=>navigate(`/details/${element.id}`)}>Link</button>
    </Card>

        
    </div>
  )
}

export default MovieCard