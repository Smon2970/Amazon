var mysql = require('mysql') //mysql npm

var inquire = require("inquirer") //inquirer npm
var productPurchased = []


var connection = mysql.createConnection({
    host: "localhost",
  
    port: 3306,
  
    user: "root",
  
    password: "root",
    database: "bamazon"
  });

  //connect to the mysql database and grab data for user

connection.connect();

// display table and product info

  connection.query("SELECT * FROM products", function(err, results, fields){
    if (err) throw err;
  for(i=0;i<results.length;i++){
    console.log("Item ID:" + results[i].item_id + "||" + " Product: " + results[i].product_name + "||" + "  Price: "  + "$" + results[i].product_price + "||" +"  Quantity Available: " + results[i].stock_quantity)
  } 
    CusPurchase(results);

});

var CusPurchase = function(){
          inquire.prompt([
                 {  
                  name: "buy",
                  type: "rawlist",
                  message: "What is the id of the item you would like to buy?",
                  choices: ["4567", "1245", "27574", "3655", "1456", "1123", "9876", "7865", "1278", "1256"]
                },
                {
                  name: "units",
                  type: "input",
                  message: "How many units would you like to buy?", 
                }
// grab the item ID and users  input and check stock quantity
          ]).then(function(answer){
              
               connection.query("SELECT item_id, stock_quantity FROM products WHERE item_id = " +answer.buy, function (err, results, fields){
               
                if(err) throw err;

                connection.query(" SELECT stock_quantity FROM products where item_id = " + answer.buy, function (err, results, fields){
                  if (err) throw err;

                
                  results[0].stock_quantity - answer.units

                  if(answer.units > results[0].stock_quantity){
                  console.log("This is an insuffient amount, your order has not been placed!")

                  reset();

                  } else if(answer.units <= results[0].stock_quantity)

                  { 
                
                    // var totalSales = answer.units * results[0].product_price
                    
                    console.log("You have chosen to purchase " +answer.units + " units of item id: " + answer.buy)
                    console.log("Your order has been processed! Thanks for shopping Bamazon")

                    //update mysql 
                    var newQuantity = results[0].stock_quantity - answer.units;
                    connection.query("UPDATE products SET stock_quantity = " + newQuantity +" WHERE ItemID = " + results[0].item_id, function(err, res){
                     console.log(answer.buy + " still has " + newQuantity + " available" )
                  })
                }
            
              })
              
            })
      })
     
};

//prompt user to place another order if quantity is not available 
function reset(){
	inquire.prompt([{
		type: 'confirm',
		name: 'choice',
		message: 'Would you like to place another order?'
	}]).then(function(answer){
		if(answer.choice){
			CusPurchase();
		}
		else{
			console.log('Thank you for shopping at Bamazon!');
			connection.end();
		}
	})
};

