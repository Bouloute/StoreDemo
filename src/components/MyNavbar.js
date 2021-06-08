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
    dropDownAndUp(id){
        document.getElementById(id).click()
    }

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
                            <NavDropdown 
                                title="Disguises" 
                                id="1"
                                class="dropdown"
                                onMouseEnter={(e) => this.dropDownAndUp("1")} 
                                onMouseLeave={(e) => this.dropDownAndUp("1")}
                            >
                                <NavDropdown.Item href="#action/3.1" class="dropbtn">Seasonal</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Caramels & Kettle</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Cheeses</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">Savory</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.5">Sweet</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.6">Spicy</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.7">Fancy!</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.8">Sugar-free</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.9">Dairy-free</NavDropdown.Item>
                            </NavDropdown>                            
                            <NavDropdown 
                                title="Tins & Disguise Kits" 
                                id="2"
                                onMouseEnter={(e) => this.dropDownAndUp("2")} 
                                onMouseLeave={(e) => this.dropDownAndUp("2")}
                            >
                                <NavDropdown.Item href="#action/3.1">Baskets</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Seasonal</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Disguie Kits</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">1-gallon Tins</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.5">2-gallon Tins</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.6">3-gallon Tins</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.7">6-gallon Tins</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#link" class="dropbtn">CBD</Nav.Link>
                            <Nav.Link href="#link">Seed</Nav.Link>
                            <Nav.Link href="#link">Additional Products</Nav.Link>
                            <NavDropdown 
                                title="Special Missions" 
                                id="3"
                                onMouseEnter={(e) => this.dropDownAndUp("3")} 
                                onMouseLeave={(e) => this.dropDownAndUp("3")}
                            >
                                <NavDropdown.Item href="#action/3.1">Weddings</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Parties</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Fundraisers</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">Coporate</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.5">Wholesale</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#link">Events</Nav.Link>
                            <Nav.Link href="#link">Pop Shops</Nav.Link>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-success">Search</Button>
                        </Form>

                    </Navbar.Collapse>   
 

                </Navbar>
            </div>
        );
    }
}

export default MyNavbar;