const newBtn = document.querySelector('#js-new-quote').addEventListener('click', getQuote);
const answerBtn = document.querySelector('#js-tweet').addEventListener('click', displayAnswer);
const body = document.querySelector('body')

const questionTxt = document.querySelector('#js-quote-text');
let answerTxt = document.querySelector('#js-answer-text');

let answer = '';

// this is the endpoint for the API that we want to get a reponse from
const endpoint = 'https://official-joke-api.appspot.com/random_joke';

async function getQuote() {
   // try -> tries something; if it returns an error, it puts us into the catch block
    try {
        const response = await fetch(endpoint);
        // if !response.ok is "if the response ISN'T okay (status code 200)"
        if (!response.ok) {
            throw Error(response.statusText);
        }
        const json = await response.json();
        console.log(json)
        // JSON is a dictionary, which is like a list; we call specific pieces of information out based on the 'key' associated with that value
        //displayQuote(json['question']);
        answer = json['answer'];
        answerTxt.textContent = '';}
        /*if (json['type']) {
            body.style.backgroundColor = 
                if hex code = in quotes
        }*/ 

        /* write paragraph for what I did*/ 
    
    catch(err) {
        console.log(err);
        alert('Failed to fetch new quote');
    }
}

// this function shows the question
function displayQuote(question) {
    questionTxt.textContent = question;
}

// this function shows the answer
function displayAnswer() {
    answerTxt.textContent = answer;
}

// we run getQuote once when the script first loads to populate a question
// when the page is loading
getQuote();

