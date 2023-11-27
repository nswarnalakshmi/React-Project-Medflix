import React from 'react'
import Rating from '@mui/material/Rating';
import './MyCart.css'
function RemoveCart() {
  return (
    <>
    
    <div className='card-container1'>
        
        <div className="image-container">
            <img src='https://www.netmeds.com/images/product-v1/600x600/1097144/pedigree_puppy_adult_dog_food_100_vegetarian_1_kg_583268_0_0.jpg' alt=''/>
        </div>
        <div className="card-content">
            <div className="card-title">
                <h3>Pedigree Dog Food - 100% Vegetarian 1 kg</h3>
            </div>
            
            <div className="card-body">
                <p>₹324.00 MRP ₹360.00 Save 10 %</p>
            </div>
            
        </div>
        
        <div className="btn">
            <div>
           <Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly />
            </div>
        
            <div>
            <button>
                
               Remove from Cart
            </button>
            
            </div>
            
        </div>
        
    </div>
    
   
    </>
)
}
export default RemoveCart