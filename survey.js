// Got idea/boiler code from: https://stackoverflow.com/questions/36540996/how-to-take-two-consecutive-input-with-the-readline-module-of-node-js

const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

let userProfile = ``;

const question1 = () => {
  return new Promise((resolve, reject) => {
    rl.question("What's your name? Nicknames are also acceptable :) ", (answer) => {
      userProfile += `Hello! ${answer} here. `;
      resolve()
    })
  })
}

const question2 = () => {
  return new Promise((resolve, reject) => {
    rl.question("What do you listen to while doing that? ", (answer) => {
      userProfile += `I enjoy listening to ${answer} `;
      resolve()
    })
  })
}

const question3 = () => {
  return new Promise((resolve, reject) => {
    rl.question("What's an activity you like doing? ", (answer) => {
      userProfile += `while ${answer}. `;
      resolve()
    })
  })
}

const question4 = () => {
  return new Promise((resolve, reject) => {
    rl.question("What's your favourite food? ", (answer) => {
      userProfile += `A fan of having ${answer}(s) for `;
      resolve()
    })
  })
}

const question5 = () => {
  return new Promise((resolve, reject) => {
    rl.question("When do you like to eat said food? ", (answer) => {
      userProfile += `${answer}.`;
      resolve()
    })
  })
}


const main = async () => {
  await question1()
  await question2()
  await question3()
  await question4()
  await question5()
  // await question6()
  // await question7()
  console.log(userProfile);
  rl.close()
}

main()




