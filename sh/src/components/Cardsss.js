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
                        <BsFillTelephoneFill/><b>PHONE NO </b> 07947123429
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <Button variant="outline-warning">
                           <a href="https://goo.gl/maps/2gBCJ8XvwFQnD9AG7" ><MdLocationOn/> Address</a>
                        </Button>
                    </Card.Footer>


                    

                    

                    
                    
                </Card>
            </CardGroup>

            
            <CardGroup >
                
                <Card >
                <Card.Body className=" text-white">
                 
                <Card.Title  ><BsShop/> Shop Name</Card.Title>
                        <Card.Text>
                           <b> OM UTSAV SWEETS</b>
                           <img
          className="d-block w-50"
          src="https://lh3.googleusercontent.com/p/AF1QipMTQh-YdQdl1WnNT2g3mvZh3jeKLN-jZfwDPLwZ=s680-w680-h510"
          
        />


                            
                        </Card.Text>
                        <Card.Text>
                            <b>ADDRESS</b> 8QW6+JCF, Udupi-Manipal Hwy, Kunjibettu <br></br>Udupi, Karnataka 576102 <br></br>
                           
                        </Card.Text>
                        <Card.Text>
                        <BsFillTelephoneFill/><b>PHONE NO </b> 7947331918
                        </Card.Text>
                        
                    </Card.Body>
                    <Card.Footer>
                    <Button variant="outline-warning">
                           <a href="https://goo.gl/maps/zMKoREMxaCULxhfZA" ><MdLocationOn/> Address</a>
                        </Button>
                    </Card.Footer>
                    
                </Card>
                <Card>
                

                    <Card.Body className=" text-white">
                        <Card.Title> <BsShop/> Shop Name</Card.Title>
                        <Card.Text>
                           <b> BIG MISHRA PEDHA</b>
                           <img
          className="d-block w-50"
          src="https://github.com/saralayaanirudha65/ne/blob/master/MISHRA.jpg?raw=true"
          
        />
                            
                        </Card.Text>
                        <Card.Text>
                            <b>ADDRESS</b>  London Plaza, Km Marg, udupi - 576101 (Near London Opticals&London Times)<br></br>
                           
                        </Card.Text>

                        <Card.Text>
                     <BsFillTelephoneFill/>  <b>PHONE NO </b> 7947225669
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <Button variant="outline-warning">
                           <a href="https://goo.gl/maps/iLyN95iZyzyhmcpp6" ><MdLocationOn/> Address</a>
                        </Button>
                    </Card.Footer>
                </Card>
                

                    
                <Card >
                <Card.Body className=" text-white">
                 
                <Card.Title  ><BsShop/> Shop Name</Card.Title>
                        <Card.Text>
                           <b> UDUPI SWEETS </b>
                           <img
          className="d-block w-50"
          src="https://lh3.googleusercontent.com/p/AF1QipOjpVVO01wbsIz4YhUHMZA3ISG-2kVR99lHhEEF=s680-w680-h510"
          
        />
                            
                        </Card.Text>
                        <Card.Text>
                            <b>ADDRESS</b> No.9-4-44e, Sri Krishna Sowrabha, Km Marg, Udupi - 576101 (Opposite Mother Of Sorrowas Church)<br></br>
                           
                        </Card.Text>

                        <Card.Text>
                        <BsFillTelephoneFill/><b>PHONE NO </b> 7947422893
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <Button variant="outline-warning">
                           <a href="https://goo.gl/maps/vk5tqjJnh6fi51MW8" ><MdLocationOn/> Address</a>
                        </Button>
                    </Card.Footer>
                    </Card>
            </CardGroup>


            <CardGroup >
        
                <Card >
                <Card.Body className=" text-white">
                 
                <Card.Title  ><BsShop/> Shop Name</Card.Title>
                        <Card.Text>
                           <b>SRI SAI PARIVAR</b>
                           <img
          className="d-block w-50"
          src="https://github.com/saralayaanirudha65/ne/blob/master/SS.jpg?raw=true"
          
        />


                            
                        </Card.Text>
                        <Card.Text>
                            <b>ADDRESS</b> 8PVW+2RJ, Thenkpete, Maruthi Veethika, <br></br> Udupi, Karnataka 576101 <br></br>
                           
                        </Card.Text>

                     
                    </Card.Body>
                    <Card.Footer>
                    <Button variant="outline-warning">
                           <a href="https://goo.gl/maps/vk5tqjJnh6fi51MW8" ><MdLocationOn/> Address</a>
                        </Button>
                    </Card.Footer>
                    
                </Card>
                <Card>
                

                    <Card.Body className=" text-white">
                        <Card.Title> <BsShop/> Shop Name</Card.Title>
                        <Card.Text>
                           <b> MADHURAM MISTHAN BHANDHAR</b>
                           <img
          className="d-block w-50"
          src="https://lh3.googleusercontent.com/p/AF1QipPKTSl_9vpdzl8YHZaHFNaIjeaj_mgoFS9-YyIG=s680-w680-h510"
          
        />
                            
                        </Card.Text>
                        <Card.Text>
                            <b>ADDRESS</b> Ground floor , Hotel White Lotus, Maruthi Veethika Rd, Udupi, Karnataka 576101<br></br>
                           
                        </Card.Text>

                        <Card.Text>
                     <BsFillTelephoneFill/>  <b>PHONE NO </b> 090353 46154
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <Button variant="outline-warning">
                           <a href="https://goo.gl/maps/YDZNaX6oDth4VnZQ8" ><MdLocationOn/> Address</a>
                        </Button>
                    </Card.Footer>
                </Card>
                

                    
                <Card >
                <Card.Body className=" text-white">
                 
                <Card.Title  ><BsShop/> Shop Name</Card.Title>
                        <Card.Text>
                           <b> PARIVAR SWEETS AND BAKERY</b>
                           <img
          className="d-block w-50"
          src="http://parivarudupi.com/images/300.jpg"
          
        />
                            
                        </Card.Text>
                        <Card.Text>
                            <b>ADDRESS</b> Sanskrit College Road ,Udupi,
      Karnataka ( South ) - 576101<br></br>
                           
                        </Card.Text>

                        <Card.Text>
                        <BsFillTelephoneFill/><b>PHONE NO </b>  0820-2525101
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <Button variant="outline-warning">
                           <a href="https://goo.gl/maps/uMBPCrTaLBpyVqka6" ><MdLocationOn/> Address</a>
                        </Button>
                    </Card.Footer>


                    

                    

                    
                    
                </Card>
            </CardGroup>



        </>
    );
}
export default Cards  