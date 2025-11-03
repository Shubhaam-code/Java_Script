// blinkit

function blinkitOrderPlaced(){
    console.log("We have started packing your Order");
}

function zomatoOrderPlaced(){
    console.log("We have started preparing your food");
}

function payment(amount,callback){
    console.log(`${amount} payment has initilized`)
    console.log("Payment is received");
    callback();

    // GST: Government
    // Rider ko kitna payment dena
    // company ko kitna 
}

payment(500,zomatoOrderPlaced);
payment(300,blinkitOrderPlaced);