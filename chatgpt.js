const env = require('dotenv').config({ quiet: true });
const prompt = require('prompt-sync')();
const apiKey = process.env.apiKey1

// run your code with node chatgpt.js
// add your apiKey to .env from gChat
// Follow the checklist on the Performance Assessment Google Doc

let rURL = "https://api.openai.com/v1/responses"

const choice = prompt("Which ChatGPT model do you want to use? ");
    const choice2 = prompt("What do you want to ask? ");

async function talk2Chat(){


    const options = {
        method: "POST",
        headers: {
            Authorization: "Bearer " + apiKey,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({model:choice,input:choice2})
    }

    // console.log(options)

    const response = await fetch(rURL, options);
    const data = await response.json();
    console.log(data.output[0].content[0].text)

}

talk2Chat()



    