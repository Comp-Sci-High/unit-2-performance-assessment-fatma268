const env = require('dotenv').config({ quiet: true });
const prompt = require('prompt-sync')();
const apiKey = process.env.apiKey2

// run your code with node api.js
// add your apiKey to .env if your API needs one, otherwise ignore
// Follow the checklist on the Performance Assessment Google Doc


console.log("Welcome to the Quotes Chatbot!")


const num = prompt("How many quotes do you want?  (1-5) ")

console.log(`Fetching ${num} quotes`)

const url = `https://dummyjson.com/quotes/?limit=${num}`

async function getQuote(){
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
}

getQuote()