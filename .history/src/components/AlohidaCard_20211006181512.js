import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { CartState } from '../context/Context'

export const AlohidaCard = ({p}) => {

    const {
        state: {cart},
        dispatch,
    } = CartState()
    return (
        <div className='products'>
            <Card>
                <Card.Img variant='top' src={p.image} alt={p.name} />
                <Card.Body>
                    <Card.Title>{p.name}</Card.Title>
                    <Card.Subtitle style={{paddingBottom: 10}}>
                        <span>SUM {p.price.split(".")}</span>
                    </Card.Subtitle>
                   
                </Card.Body>
            </Card>
        </div>
    )
}


/* header styles */

.header {
    display: block;
    text-align: center;
    font-size: 30px;
    margin: 10px 0;
  }
  
  .cartitem {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 20px;
    margin-bottom: 20px;
  }
  
  .cartItemImg {
    border-radius: 50%;
    width: 50px;
    height: 50px;
    object-fit: cover;
  }
  
  .cartItemDetail {
    display: flex;
    flex: 1;
    padding: 0 20px;
    flex-direction: column;
  }
  
  /* Home Page */
  
  .home {
    display: flex;
  }
  
  .filters {
    background-color: #343a40;
    color: white;
    padding: 20px;
    display: flex;
    flex-direction: column;
    width: 20%;
    margin: 10px;
    height: 86vh;
  }
  
  .filters > span {
    padding-bottom: 20px;
  }
  
  .title {
    font-size: 30px;
  }
  
  .productContainer {
    display: flex;
    width: 78%;
    padding: 20px;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  
  .products {
    width: 30%;
    margin: 10px;
  }
  
  .summary {
    width: 30%;
  }
  
  /* Media Queries */
  @media (max-width: 771px) {
    .filters {
      width: 40%;
      padding: 10px;
      margin: 5px;
    }
  
    .filters > span {
      font-size: 10px;
    }
  
    .title {
      font-size: 18px !important;
    }
  
    .productContainer {
      width: 58%;
      padding: 0;
    }
  
    .search {
      display: none !important;
    }
  
    .products {
      width: 100%;
    }
  }