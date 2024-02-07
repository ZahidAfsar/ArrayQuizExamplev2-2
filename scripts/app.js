//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array  

let questionOne = document.getElementById("questionOne");
let questionTwo = document.getElementById("questionTwo");
let questionThree = document.getElementById("questionThree");
let questionFour = document.getElementById("questionFour");
let questionFive = document.getElementById("questionFive");
let questionFiveB = document.getElementById("questionFiveB");
let ExtraCreditQ = document.getElementById("ExtraCreditQ");
let ExtraCreditQ2 = document.getElementById("ExtraCreditQ2");

let count

const ApiCall = async () => {
    const promise = await fetch(`../data/quizdata.json`);
    const data = await promise.json()
    console.log(data.People);
    answerOne(data.People);
    answerTwo(data.People);
    answerThree(data.People);
    answerFour(data.People);
    answerFive(data.People);
    answerFiveB(data.People);
    ExtraCreditA(data.People);
    ExtraCreditB(data.People);
}
ApiCall();

const answerOne = (data) => {
    count = 0;

    data.map((person) => {
        if (person.age > 19 && person.age < 30) {
            count++;
        }
    });

    questionOne.textContent = `there are ${count} amount of people in their 20s`;
};

const answerTwo = (data) => {
    count = 0;

    data.map((person) => {
        if(person.Active == true){
            count++;
        }
    });

    questionTwo.textContent = `there are ${count} amount of people active`;
};

const answerThree = (data) => {
    count = 0;

    data.map((person) => {
        if(parseInt(person.height) < 72){
            count++
        }
    });

    questionThree.textContent = `there are ${count} amount of people shorter than 6 foot`;
}

const answerFour = (data) => {

 const answerFourHeight = data.findIndex(person => parseInt(person.height) > 56 );

    console.log(data[0].name);

    questionFour.textContent = `the first person taller than 56 inches is ${data[0].name}`;

}

const answerFive = (data) => {
    count = 0;

    data.map((person) => {
        if(person.name.length > 15){
            count++
        }
    });

    questionFive.textContent = `There are ${count} amount of people with more than 15 characters in their name`
}




const answerFiveB = (data) => {
    count = 0;

    data.map((person) => {
        if(parseInt(person.height) < 50){
            count++
        }
    })
    questionFiveB.textContent = `There are ${count} amount of people shorter than 50 inches`;
}

const ExtraCreditA = (data) => {
    const aplhaName = data.map(person => person.name).sort();

    console.log(aplhaName);

    ExtraCreditQ.textContent = `${aplhaName}`
}

const ExtraCreditB = (data) => {
    const lastName = data.map(person => person.name.split(" ").reverse().join(" ")).sort();

    console.log(lastName);

    ExtraCreditQ2.textContent = `${lastName}`

}