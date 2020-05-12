import React, {Component} from 'react';
import {Container, Tab, Nav, Row, Col} from 'react-bootstrap';

 export default class About extends Component {
 	render(){
 		return(

 		<Container>
 			<Tab.Container id="ledt-tabs-example" defaultActiveKey="first">
 				<Row>
 					<Col sm={3}>
 						<Nav variant="pills" ClassName="Flex-column mt-2">
 							<Nav.Item>
 								<Nav.Link eventKey="first">Design</Nav.Link>
 							</Nav.Item>
 							<Nav.Item>
 								<Nav.Link eventKey="second">Team</Nav.Link>
 							</Nav.Item>
 							<Nav.Item>
 								<Nav.Link eventKey="third">Programming</Nav.Link>
 							</Nav.Item>
 							<Nav.Item>
 								<Nav.Link eventKey="fourth">Frameworks</Nav.Link>
 							</Nav.Item>
 							<Nav.Item>
 								<Nav.Link eventKey="fifth">Libraries</Nav.Link>
 							</Nav.Item>

 						</Nav>
 					</Col>
 					<Col sm={9}>
 						<Tab.Content className="mt-3">
 							<Tab.Pane eventKey="first">
 								<img src="https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/89d45527-c11f-425e-96f3-c917f27e5ca9/figma-covers-in-action.gif"/>
 								<p>Lorem Ipsum dolor sit amet, consectetur adipisicing elit
 								Lorem Ipsum dolor sit amet, consectetur adipisicing elit
 								Lorem Ipsum dolor sit amet, consectetur adipisicing elit
 								Lorem Ipsum </p>
 							</Tab.Pane>
 							<Tab.Pane eventKey="second">
 								<img src="https://miro.medium.com/max/940/0*g-g4r7noolglMRUJ"/>
 								<p>Lorem Ipsum dolor sit amet, consectetur adipisicing elit
 								Lorem Ipsum dolor sit amet, consectetur adipisicing elit
 								Lorem Ipsum dolor sit amet, consectetur adipisicing elit
 								Lorem Ipsum </p>
 							</Tab.Pane>
 							<Tab.Pane eventKey="third">
 								<img src="https://coursehorse.imgix.net/images/course/7193/main/shutterstock_720388555.jpg?auto=format%2Cenhance%2Ccompress&crop=entropy&fit=crop&h=220&ixlib=php-1.2.1&q=90&w=330"/>
 								<p>Lorem Ipsum dolor sit amet, consectetur adipisicing elit
 								Lorem Ipsum dolor sit amet, consectetur adipisicing elit
 								Lorem Ipsum dolor sit amet, consectetur adipisicing elit
 								Lorem Ipsum </p>
 							</Tab.Pane>
 							<Tab.Pane eventKey="fourth">
 								<img src="https://miro.medium.com/max/400/1*A03J1K0q2RfSs5LNr6aHTw.png"/>
 								<p>Lorem Ipsum dolor sit amet, consectetur adipisicing elit
 								Lorem Ipsum dolor sit amet, consectetur adipisicing elit
 								Lorem Ipsum dolor sit amet, consectetur adipisicing elit
 								Lorem Ipsum </p>
 							</Tab.Pane>
 							<Tab.Pane eventKey="fifth">
 								<img src="https://lh3.googleusercontent.com/proxy/HKKDYQBguXD52hcuSJg76WSHzfY15H59zNNDAUTVHvgV2nlZIKsTyzh5ZrRBySgGvZOZDetFOgNJ6wNBCNsBxD9YpzREMaEaVm92hUnOZu7IYRvlxw5HK_VbdZul5009-58QZGymBU-f-5UmdkpvMlIsSHIz4AJBl65GbMT2"/>
 								<p>Lorem Ipsum dolor sit amet, consectetur adipisicing elit
 								Lorem Ipsum dolor sit amet, consectetur adipisicing elit
 								Lorem Ipsum dolor sit amet, consectetur adipisicing elit
 								Lorem Ipsum </p>
 							</Tab.Pane>

 						</Tab.Content>
 					</Col>
 				</Row>
 			</Tab.Container>
 		</Container>
 	  )
 	}
 }