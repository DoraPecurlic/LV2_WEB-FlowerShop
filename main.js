"use strict";

// const - constant (immutable)
// let - variable (mutable)
// require() - import
// console.log() - print

const readline = require('readline');
const process = require('process');

let walletAmount = 150;

// (Almost all) JavaScript types:
// - number (const a = 1;)
// - string (const a = 'abc';)
// - boolean (const a = true;)
// - object (const a = { name: 'abc', age: 1 };)
// - array (const a = [1, 2, 3];)

let items = [
    {
        name: 'Rose',
        price: 25,
    },
    {
        name: 'Orchid',
        price: 20,
    },
    {
        name: 'Cactus',
        price: 5,
    },
    {
        name: 'Tulips',
        price: 22,
    },
    {
        name: 'Lily',
        price: 17,
    },
    {
        name: 'Sunflower',
        price: 13,
    },
    {
        name: 'Lavander',
        price: 16,
    },
    {
        name: 'Iris',
        price: 21,
    },
];
 
let cart = [];



function buy() {
    let totalCost = 0;

    
    cart.forEach(item => {
        totalCost += item.price;
    });

    
    if (walletAmount >= totalCost) {
        walletAmount -= totalCost;  
        console.log(`You have successfully purchased items for $${totalCost}.`);
        cart = []; 
        console.log("Your cart is now empty.");
    } else {
        console.log("You do not have enough money to complete this purchase.");
        console.log(`Your total is $${totalCost} but you only have $${walletAmount}.`);
    }
}

function addToCart(itemName){
    const index = items.findIndex((item) => item.name === itemName);
    if (index !== -1) {
        const item = items[index];
        cart.push(item);
        console.log(`Flower '${itemName}' added to cart!`);

    } else {
        console.log(`Flower '${itemName}' not found.`);
    }

}

function removeFromCart(itemName) {
    const index = cart.findIndex((item) => item.name === itemName);
    if (index !== -1) {
        const removedItem = cart.splice(index, 1); 
        console.log(`${removedItem[0].name} removed from cart!`);
    } else {
        console.log(`Item ${itemName} not found in cart.`);
    }
    
}

function viewFlowers(flower){

    items.forEach(flower => {
        console.log(flower.name + ":  " +flower.price + "$")
    });
}
function viewCart(cardItem){
    cart.forEach(cardItem =>{
        console.log(cardItem);
    }) 
}
function viewBalance(){
    console.log("Your balance is: "+ walletAmount);
}
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
function help(){
    console.log('"help" to show available functions of aplication ')
    console.log('"flowers" to show availabale flowers and prices');
    console.log('"add [item]" to add specific flower to cart');
    console.log('"remove [item]" to remove specific flower from cart');
    console.log('"cart" to show current items in your cart');
    console.log('"wallet" to show your balance');
    console.log('"buy " to purches all items in cart');
    
}
console.log("Flower Shop");
rl.prompt();

rl.on('line', (line) => {
    const split = line.split(' '); 
    const command = split[0];
    const args = split.slice(1); 
    console.log(`Command: ${command}`);
    console.log(`Args: ${args}`);

    switch (command) {
        case 'flowers': 
            viewFlowers(items);
            break;
        case 'add':
            addToCart(args[0]);
            break;
        case 'remove':
            removeFromCart(args[0]);
            break;
        case 'viewCart':
            viewCart(cart);
            break;
        case 'wallet':
            viewBalance();
            break;
        case 'buy':
            buy();
            break;
        case 'help': 
            help();
            break;
        default:
            console.log(`Unknown command: ${command}`);
    }

    rl.prompt();
}).on('close', () => {
    console.log('Exit');
    process.exit(0);
});