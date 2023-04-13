import React from "react"
import "./Card.css"
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { MdLocationOn } from 'react-icons/md'
import { BsShop } from 'react-icons/bs'
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import {BsFillTelephoneFill} from "react-icons/bs"



function Cards() {
    return (
        <>
            <h2 className="text-center text-white">Sweet Shops </h2>
            
            <CardGroup >
                
                <Card >
                <Card.Body className=" text-white">
                 
                <Card.Title  ><BsShop/> Shop Name</Card.Title>
                        <Card.Text>
                           <b> KRISHNAMURTHY SARALAYA</b>
                           <img
          className="d-block w-50"
          src="https://github.com/cool30/lo/blob/master/Mand.jpg?raw=true"
          
        />


                            
                        </Card.Text>
                        <Card.Text>
                            <b>ADDRESS</b> H.NNO 1210 KONWAL GALLI <br></br>BELAGUM <br></br>
                           
                        </Card.Text>

                        <Card.Text>
                        <BsFillTelephoneFill/><b>PHONE NO </b> 9448691137 
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <Button variant="outline-warning">
                           <a href="https://goo.gl/maps/2gBCJ8XvwFQnD9AG7" ><MdLocationOn/> Address</a>
                        </Button>
                    </Card.Footer>
                    
                </Card>
                <Card>
                

                    <Card.Body className=" text-white">
                        <Card.Title> <BsShop/> Shop Name</Card.Title>
                        <Card.Text>
                           <b> VIPRA SWEET HOME</b>
                           <img
          className="d-block w-50"
          src="https://github.com/cool30/lo/blob/master/vipra.jpg?raw=true"
          
        />
                            
                        </Card.Text>
                        <Card.Text>
                            <b>ADDRESS</b>  Krishna Mutt Parking Place, Yard, Udupi, Karnataka 576101<br></br>
                           
                        </Card.Text>

                        <Card.Text>
                     <BsFillTelephoneFill/>  <b>PHONE NO </b> 094485 47510
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <Button variant="outline-warning">
                           <a href="https://goo.gl/maps/jKtjxaQ4eNQDra7dA" ><MdLocationOn/> Address</a>
                        </Button>
                    </Card.Footer>
                </Card>
                

                    
                <Card >
                <Card.Body className=" text-white">
                 
                <Card.Title  ><BsShop/> Shop Name</Card.Title>
                        <Card.Text>
                           <b> Sri Venkateshwara Sweets</b>
                           <img
          className="d-block w-50"
          src="https://github.com/cool30/lo/blob/master/vk.jpg?raw=true"
          
        />
                            
                        </Card.Text>
                        <Card.Text>
                            <b>ADDRESS</b> 8PRX+HP6, SH 37, Thenkpete, Maruthi Veethika, Udupi, Karnataka 576101<br></br>
                           
                        </Card.Text>

                        <Card.Text>
                        <BsFillTelephoneFill/><b>PHONE NO </b> 9448691137 
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <Button variant="outline-warning">
                           <a href="https://goo.gl/maps/2gBCJ8XvwFQnD9AG7" ><MdLocationOn/> Address</a>
                        </Button>
                    </Card.Footer>


                    

                    

                    
                    
                </Card>
            </CardGroup>
        </>
    );
}
export default Cards  