const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let answerArray = [];
rl.question("What's your name? Nicknames are also acceptable :) ", (answer) => {
  rl.question("What's an activity you like doing? ",(answer) =>{
    rl.question("What do you listen to while doing that? ",(answer) =>{
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ",(answer) =>{
        rl.question("What's your favourite thing to eat for that meal? ",(answer) =>{
          rl.question("Which sport is your absolute favourite? ",(answer) =>{
            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ",(answer) => {
              rl.close();

              console.log(`My name is ${answerArray[0]}, I like to ${answerArray[1]}. I like to listen to ${answerArray[2]} while I ${answerArray[1]}. My favorite Meal of the day is ${answerArray[3]}. And I love to eat ${answerArray[4]} for that meal. I love to ${answerArray[5]}. I'm really good at ${answerArray[6]}`);


              // console.log('question7,', answer)
              answerArray.push(answer);
            });
            // console.log('question6,', answer)
            answerArray.push(answer);
          });
          // console.log('question5,', answer)
          answerArray.push(answer);
        });
        // console.log('question4,', answer)
        answerArray.push(answer);
      });
      // console.log('question3,', answer)
      answerArray.push(answer);
    });
    // console.log('question2,', answer)
    answerArray.push(answer);
  });
  
  // console.log('question1,', answer)
  answerArray.push(answer);
});




// What's your name? Nicknames are also acceptable :)
// What's an activity you like doing?
// What do you listen to while doing that?
// Which meal is your favourite (eg: dinner, brunch, etc.)
// What's your favourite thing to eat for that meal?
// Which sport is your absolute favourite?
// What is your superpower? In a few words, tell us what you are amazing at!