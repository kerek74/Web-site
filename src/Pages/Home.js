 import React, {Component} from 'react';
 import CarouselBox from '../Components/CarouselBox';
 import{Container, CardDeck, Card, Button} from "react-bootstrap";

 export default class Home extends Component {
 	render(){
 		return(
 			<hi>
 		<CarouselBox/>
 		
 			<Container>
 				
 				<h2 className="text-center m-4">Our team</h2>
 				<CardDeck>
 					<Card>
 						<Card.Img 
 						variant="top"
 						src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
 						/>
 						<Card.Body>
 							<Card.Title>Developers</Card.Title>
 								<Card.Text>
 									Lorem Ipsum dolor sit amet consectetur adipisicing elit
 									Voluptas fugiat laboriosam dicta.
 								</Card.Text>
 							<Button variant="primary"> About team</Button>
 						</Card.Body>
 					</Card>
 					<Card>
 						<Card.Img 
 						variant="top"
 						src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
 						/>
 						<Card.Body>
 							<Card.Title>Developers</Card.Title>
 								<Card.Text>
 									Lorem Ipsum dolor sit amet consectetur adipisicing elit
 									Voluptas fugiat laboriosam dicta.
 								</Card.Text>
 							<Button variant="primary"> About team</Button>
 						</Card.Body>
 					</Card>
 					<Card>
 						<Card.Img 
 						variant="top"
 						src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
 						/>
 						<Card.Body>
 							<Card.Title>Developers</Card.Title>
 								<Card.Text>
 									Lorem Ipsum dolor sit amet consectetur adipisicing elit
 									Voluptas fugiat laboriosam dicta.
 								</Card.Text>
 							<Button variant="primary"> About team</Button>
 						</Card.Body>
 					</Card>
 				</CardDeck>
 			</Container>


 		</hi>
 	  );
 	}
 }