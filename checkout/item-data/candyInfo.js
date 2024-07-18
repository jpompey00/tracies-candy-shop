const modelCandyData = [
    {
        name: "some candy name",
        img: "some img",
        maxQuanity : 5, 
        unitOfMeasurement: "lbs",
        type: "some  candy type",
        price: 1
    }
]

//can also use an object for this and separate it with itemIds
const candyData = [ 
    {     
        name: "Chocolate Bar",         
        img: "[placeholder img]",         
        maxQuanity: 10,         
        unitOfMeasurement: "pcs",
        type: "Chocolate",
        price: 1.99      
    },
    {     
        name: "Gummy Bears",         
        img: "[placeholder img]",         
        maxQuanity: 20,         
        unitOfMeasurement: "oz",
        type: "Gummy",
        price: 2.49      
    },
    {     
        name: "Lollipop",         
        img: "[placeholder img]",         
        maxQuanity: 15,         
        unitOfMeasurement: "pcs",
        type: "Hard Candy",
        price: 0.99      
    },
    {     
        name: "Candy Corn",         
        img: "[placeholder img]",         
        maxQuanity: 30,         
        unitOfMeasurement: "oz",
        type: "Seasonal",
        price: 3.99      
    },
    {     
        name: "Jawbreakers",         
        img: "[placeholder img]",         
        maxQuanity: 5,         
        unitOfMeasurement: "pcs",
        type: "Hard Candy",
        price: 1.50      
    },
    {     
        name: "Licorice Twists",         
        img: "[placeholder img]",         
        maxQuanity: 25,         
        unitOfMeasurement: "oz",
        type: "Licorice",
        price: 2.99      
    },
    {     
        name: "Gum Balls",         
        img: "[placeholder img]",         
        maxQuanity: 50,         
        unitOfMeasurement: "pcs",
        type: "Gum",
        price: 4.49      
    },
    {     
        name: "Peppermint Patties",         
        img: "[placeholder img]",         
        maxQuanity: 40,         
        unitOfMeasurement: "pcs",
        type: "Mint",
        price: 3.49      
    }
];


const candyData2 = {
    1001: {
        name: "Chocolate Bar",         
        img: "[placeholder img]",         
        maxQuanity: 10,         
        unitOfMeasurement: "pcs",
        type: "Chocolate",
        price: 1.99      
    },
    1002: {     
        name: "Gummy Bears",         
        img: "[placeholder img]",         
        maxQuanity: 20,         
        unitOfMeasurement: "oz",
        type: "Gummy",
        price: 2.49      
    },
    1003: {     
        name: "Lollipop",         
        img: "[placeholder img]",         
        maxQuanity: 15,         
        unitOfMeasurement: "pcs",
        type: "Hard Candy",
        price: 0.99      
    },
    1004: {     
        name: "Candy Corn",         
        img: "[placeholder img]",         
        maxQuanity: 30,         
        unitOfMeasurement: "oz",
        type: "Seasonal",
        price: 3.99      
    },
    1005: {     
        name: "Jawbreakers",         
        img: "[placeholder img]",         
        maxQuanity: 5,         
        unitOfMeasurement: "pcs",
        type: "Hard Candy",
        price: 1.50      
    },
    1006: {     
        name: "Licorice Twists",         
        img: "[placeholder img]",         
        maxQuanity: 25,         
        unitOfMeasurement: "oz",
        type: "Licorice",
        price: 2.99      
    },
    1007: {     
        name: "Gum Balls",         
        img: "[placeholder img]",         
        maxQuanity: 50,         
        unitOfMeasurement: "pcs",
        type: "Gum",
        price: 4.49      
    },
    1008: {     
        name: "Peppermint Patties",         
        img: "[placeholder img]",         
        maxQuanity: 40,         
        unitOfMeasurement: "pcs",
        type: "Mint",
        price: 3.49      
    }
};


//TEST DATA
function getRandomItems(array, numItems) {
    const shuffled = array.sort(() => Math.random() - 0.5 );
    return shuffled.slice(0, numItems);
}

const TEST_CART = getRandomItems(candyData, 3);

console.log(TEST_CART);
