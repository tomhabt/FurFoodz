const { Food } = require('../models');

const FoodData = [
 {
     //1
   food_name: 'Ground Beef',
    serving: 100,
    calories: 332,
    
},
{
    //2
    food_name: 'Eggs',
    serving: 100,
    calories: 155,
    
},
{
    //3
    food_name: 'Boiled Potato',
    serving: 100,
    calories: 87,
    
},
{
    //4
    food_name: 'Lean Pork (Chop/Loin)',
    serving: 100,
    calories: 231,
    
},

{
    //5
    food_name: 'Carrot (steamed/boiled)',
    serving: 50,
    calories: 21,
   
},
{//6
    food_name: 'Broccoli (steamed/boiled)',
    serving: 50,
    calories: 17,
 
},
{   //7
    food_name: "Salmon",
    serving: 100,
    calories: 208,
  
}
{   //8
    food_name: "Brown Rice",
    serving: 100,
    calories: 112,
  
},
{   //9
    food_name: "White Rice",
    serving: 100,
    calories: 130,
    
},
{   //10
    food_name: "Chicken (breast)",
    serving: 100,
    calories: 165,
    
},
{   //11
    food_name: "Chicken (leg/thigh)",
    serving: 100,
    calories: 178,
  
},
{   //12
    food_name: "Cheddar Cheese",
    serving: 50,
    calories: 200,
 
},
{   //13
    food_name: "Mozzarella Cheese",
    serving: 50,
    calories: 166,

},
{   //14
    food_name: "Sweet Potato",
    serving: 100,
    calories: 86,
 
},
{   //15
    food_name: "Turkey Breast",
    serving: 100,
    calories: 189,
 
},
{   //16
    food_name: "Green Beans (boiled/steamed)",
    serving: 50,
    calories: 16,
  
}


]

const seedFood = () => Food.bulkCreate(foodData);

module.exports = seedFood;