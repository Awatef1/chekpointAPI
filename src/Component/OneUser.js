import React from 'react';

import { Card, ListGroup, Spinner } from 'react-bootstrap';

const OneUser = ({user, loadUser}) => {
return (
<div>
{

loadUser ? (
<Spinner />
):(
<Card style={{ backgroundColor:'blanchedalmond',marginTop:"50px", width: 'auto', height:'250' }}>
<Card.Img style={{ height:250, width:260 }} variant="top" src="https://iskia.fr/img/me.png" />
<Card.Body>
<Card.Title>Name : {user.name}</Card.Title>
<Card.Text>
Email : {user.email}
</Card.Text>

<ListGroup>
<ListGroup.Item style={{ backgroundColor:' rgb(80, 156, 255)'}}>Phone : {user.phone}</ListGroup.Item>
<ListGroup.Item style={{ backgroundColor:' rgb(80, 156, 255)'}}>website : {user.website}</ListGroup.Item>

</ListGroup>
</Card.Body>
</Card> )}
</div>
)
}

export default OneUser;