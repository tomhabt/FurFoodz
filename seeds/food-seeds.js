const { Food } = require('../models');

const FoodData = [
 {
     
   food_name: 'Ground Beef',
    serving: 100,
    calories: 332,
    
},
{
    food_name: 'Eggs',
    serving: 100,
    calories: 155,
    
},
{
    food_name: 'Boiled Potato',
    serving: 100,
    calories: 87,
    
},
{
    food_name: 'Lean Pork (Chop)',
    serving: 100,
    calories: 231,
    
},
{
    food_name: 'Carrot (steamed/boiled)',
    serving: 50,
    calories: 21,
   
},
{
    food_name: 'Broccoli (steamed/boiled)',
    serving: 50,
    calories: 17,
 
},
{   food_name: "Salmon",
    serving: 100,
    calories: 208,
  
}
{   food_name: "Brown Rice",
    serving: 100,
    calories: 112,
  
},
{   food_name: "White Rice",
    serving: 100,
    calories: 130,
    
},

{   food_name: "Chicken (breast)",
    serving: 100,
    calories: 165,
    
},
{   food_name: "Chicken (leg/thigh)",
    serving: 100,
    calories: 178,
  
},
{   food_name: "Cheddar Cheese",
    serving: 50,
    calories: 200,
 
},
{   food_name: "Cheddar Cheese",
    serving: 50,
    calories: 200,

},
{   food_name: "Sweet Potato",
    serving: 100,
    calories: 86,
 
},
{   food_name: "Turkey Breast",
    serving: 100,
    calories: 189,
 
},
{   food_name: "Green Beans (boiled/steamed)",
    serving: 50,
    calories: 16,
  
}


]

const seedFood = () => Food.bulkCreate(foodData);

module.exports = seedFood;