import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { 
    Nav,
    Navbar,
    NavDropdown,
    Form,
    FormControl,
    Button
} from 'react-bootstrap';

class MyNavbar extends Component {
    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">
                        <img src="https://scontent-bos3-1.xx.fbcdn.net/v/t31.18172-8/10547858_841704182521093_7031835331823283697_o.png?_nc_cat=102&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=dcU6DtrG52gAX_uTDdR&_nc_ht=scontent-bos3-1.xx&oh=63d1b91f0507aa92d47ee3961b736e49&oe=60DF5C9B" style={{height: '50px'}}></img>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <NavDropdown title="Disguises" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Seasonal</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Caramels & Kettle</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Cheeses</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">Savory</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.5">Sweet</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.6">Spicy</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.7">Fancy!</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.8">Sugar-free</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.9">Dairy-free</NavDropdown.Item>
                            </NavDropdown>                            
                            <Nav.Link href="#link">Link</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                        <Nav.Link href="#link">Link</Nav.Link>

                    </Navbar.Collapse>   
 

                </Navbar>
            </div>
        );
    }
}

export default MyNavbar;