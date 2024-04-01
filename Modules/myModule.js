// var x =10;
// var z =20;
// exports.x = x;
// module.z=z;
// module.exports = {userName : "Ingy"}; //over rides any earlyer codes


// module.exports ={x, z}; //{x:x , z:z}


//Array - function addItem(name , price){} - function getSum(){}

// var items = [];//private 

// function addItem(name , price){
// let newItem = {name, price};//built an obj
// items.push(newItem);
// }

// function getSum(){
//     var sum = 0;
//     //code
//     for(let i = 0; i < items.length; i++ ){
//         sum+=items[i].price;
//     }
//     return sum;
// }

// module.exports = {
// addItem, getSum
// }

class orders {

    #items = [];//private 

    addItem(name , price){
    let newItem = {name, price};//built an obj
    this.#items.push(newItem);
    }
    
    getSum(){
        var sum = 0;
        //code
        for(let i = 0; i < this.#items.length; i++ ){
            sum += this.#items[i].price;
        }
        return sum;
    }
    
}

module.exports = {orders}; // sends the class so we'll be able to create instances from it
