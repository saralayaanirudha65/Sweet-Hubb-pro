import React from 'react'
import "./k.css";
import Carousel from 'react-bootstrap/Carousel';
import { MdSpaceBar } from 'react-icons/md';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const krish = () => {
  return (
 <>
    <div className='sd'>
      <div className="tit" align="center">
      
     <h1>Welcome to Krishnamurthy saralaya shop</h1>
     </div>
<Carousel>

  
      <Carousel.Item interval={1000}>
        <img
          className="dblock "
          src="https://github.com/saralayaanirudha65/ne/blob/master/Mand.jpg?raw=true"
          height="500" width="1000"
        />
      
      </Carousel.Item>
      <Carousel.Item interval={300}>
        <img
          className="dblock "
          src="https://i0.wp.com/allaboutbelgaum.com/content/uploads/2013/10/mande1.jpg"
          height="500" width="1000"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="dblock "
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFcrljDBrTfHvpCsfNxMMIzi7Uh6ManMazBg&usqp=CAU"
          height="500" width="1000"
        />
     
      </Carousel.Item>
    </Carousel>
    </div>
  <br /><br />


   <div className="txxt">
      <h1>Here Are some Sweets and masala's</h1>
      </div>
    <div className="pics" align="center">

          <img className='a1'
          src="https://github.com/saralayaanirudha65/saralayaanirudha65/blob/main/mnd.jpg?raw=true"
          height="200" width="200"
          />
          

<img className='a2' 
          src="https://github.com/saralayaanirudha65/saralayaanirudha65/blob/main/samm.jpg?raw=true"
          height="200" width="200"
          />
           
           <img className='a3'
          src="https://github.com/saralayaanirudha65/saralayaanirudha65/blob/main/rasa.jpg?raw=true"
          height="200" width="200"
          />

<img className='a3'
          src="https://github.com/saralayaanirudha65/ne/blob/master/chutneypudi.jpg?raw=true"
          height="200" width="200"
          />









          </div><h1 className='lst'>List of sweets and masalas</h1>
    


<div className="lsst" align="center">
  
    <Card sx={{ maxWidth: 250 }}>
      <CardMedia className="pix"
        sx={{ height: 200 }}
        image="https://github.com/saralayaanirudha65/ne/blob/master/Mand.jpg?raw=true"
        title="Mandige" 
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          MANDIGE 1Packet ₹120
        </Typography>
        
      </CardContent>
      
      
      
    </Card>
    








    
    <div className="pix">
    <Card sx={{ maxWidth: 250 }}>
      <CardMedia
        sx={{ height: 200 }}
        image="https://github.com/saralayaanirudha65/ne/blob/master/chutneypudi.jpg?raw=true"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          CHUTNEY PUDI
          1Packet ₹250
        </Typography>
        <Typography variant="body2" color="text.secondary">
          
        </Typography>
      </CardContent>
      
    </Card></div>

    <div className="pix">
    <Card sx={{ maxWidth: 250 }}>
      <CardMedia
        sx={{ height: 200 }}
        image="https://github.com/saralayaanirudha65/saralayaanirudha65/blob/main/samm.jpg?raw=true"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          SAMBAR PUDI
          1Packet ₹250
        </Typography>
        <Typography variant="body2" color="text.secondary">
          
        </Typography>
      </CardContent>
      
    </Card></div>

    <div className="pix">
    <Card sx={{ maxWidth: 250 }}>
      <CardMedia
        sx={{ height: 200 }}
        image="https://github.com/saralayaanirudha65/saralayaanirudha65/blob/main/rasa.jpg?raw=true"
        
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          RASAM PUDI
          1Packet ₹250
        </Typography>
        <Typography variant="body2" color="text.secondary">
          
        </Typography>
      </CardContent>
      
    </Card></div>








    

</div>





    </>


    
  )
}

export default krish