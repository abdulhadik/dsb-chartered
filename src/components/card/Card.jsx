import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Card1 from '../../images/card1.jpg'
import Card2 from '../../images/card2.jpg'
import Card3 from '../../images/card3.jpg'
import './Card.css'
function CustomCard () {
  return (
    <div className='customCard'>
    <div className='customCard-text'>
        <h2 className='heading-card'>Business insight</h2>
        <p>
        News & Press Release
        </p>
      </div>
    <div className='card-container'>
    <Card className="card-item">
      <CardActionArea>
        <CardMedia
          component="img"
          className='card-media'
          // height="213"
          image={Card1}
          
        />
        <CardContent>
           <p className='card-date'>May 16 2024</p> 
            <h3>VAT Compliance Guideline for Financial Institutions Engaged in SWIFT Transactionss</h3>
            <p>In the dynamic world of financial transactions, SWIFT (Society for Worldwide Interbank Financial Telecommunication) plays a pivotal role in facilitating...</p>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card className="card-item">
      <CardActionArea>
        <CardMedia
          component="img"
          className='card-media'
          // height="213"
          image={Card2}  
        />
        <CardContent>
           <p className='card-date'>May 16 2024</p> 
            <h3>VAT Compliance Guideline for Financial Institutions Engaged in SWIFT Transactionss</h3>
            <p>In the dynamic world of financial transactions, SWIFT (Society for Worldwide Interbank Financial Telecommunication) plays a pivotal role in facilitating...</p>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card className="card-item">
      <CardActionArea>
        <CardMedia
          component="img"
          className='card-media'
          // height="213"
          image={Card3}
          
        />
        <CardContent>
           <p className='card-date'>May 16 2024</p> 
            <h3>VAT Compliance Guideline for Financial Institutions Engaged in SWIFT Transactionss</h3>
            <p>In the dynamic world of financial transactions, SWIFT (Society for Worldwide Interbank Financial Telecommunication) plays a pivotal role in facilitating...</p>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    </div>
  );
}
export default CustomCard;
