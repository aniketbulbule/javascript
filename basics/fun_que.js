//! Question 1
//? Task: Write a function called shout that accepts a message and a callback.
//? Goal: The callback should decide how to display the message (e.g., print "HELLO" if the message is "hello").
//? Hint: A callback is just a function you pass to another function.

// let shout=(message,callback)=>{
//     let ans=callback(message)
//     console.log(ans);
// }
// let callback=(message)=>{
//     return message.toUpperCase()
// }
// shout("Hello", callback)


//! Question 2
//? The Friendly Robot
//? Task: Create a function robot that accepts a name and a callback.
//? Goal: The callback should return a personalized greeting like "Hello, NAME! I am your friendly robot."
//? Hint: Let the callback handle the greeting logic.

// let robot=(name,callback)=>{
//     return callback(name)
// }
// let callback=(name)=>{
//     return `Hello,${name}! I am your friendly robot.`
// }
// let ans=robot('picacho',callback)
// console.log(ans);


//! Question 3
//? Math Wizard
//? Task: Write a function mathWizard that takes two numbers and a callback.
//? Goal: The callback should perform a basic math operation (e.g., addition or subtraction).
//? Hint: Pass a function that performs the math inside the callback.


//! Question 4
//? Decision Maker
//? Task: Build a function decide that accepts a yesCallback and a noCallback.
//? Goal: Depending on a condition (e.g., a boolean isHappy), it should call the correct callback.
//? Hint: Use an if-else statement to decide which callback to run.



//! Question 5
//? Double the Fun
//? Task: Write a function doubleFun that accepts a number and a callback.
//? Goal: The callback should double the number and return the result.
//? Hint: Call the callback with the number as an argument.

//! Question 6
//? The Compliment Machine
//? Task: Create a function complimentMachine that takes a name and a callback.
//? Goal: The callback should give a random compliment to the person.
//? Hint: You can define different compliments inside the callback.

// let complimentMachine = (name,callBack)=>{
//     return callBack(name)
// }
// let callBack = (name)=>{
//     return `${name} is a good at programming`
// }
// console.log(complimentMachine("kaluva",callBack))

//! Question 7
//? Checker Board
//? Task: Build a function checkNumber that accepts a number and a callback.
//? Goal: If the number is even, the callback should say "Even Number". Otherwise, "Odd Number".
//? Hint: Use the % operator to check for evenness.

// let checkNumber = (num,callBack)=>{
//     return callBack(num)
// }
// let checking = (num)=>{
//     if(num%2==0){
//         return "Even Number"
//     }else{
//         return "Odd Number"
//     }
// }
// console.log(checkNumber(101,checking))

//! Question 8
//? The Number Judge
//? Task: Write a function judgeNumber that takes a number and a callback.
//? Goal: If the number is positive, call the callback with "Positive". If negative, "Negative".
//? Hint: Use a simple if check inside your function.

// let judgeNumber = (num,callBack)=>{
//     return callBack(num)
// }
// let judge = (num)=>{
//     if(num>0){
//         return "Positive"
//     }else{
//         return "Negative"
//     }
// }
// console.log(judgeNumber(111,judge))

//! Question 9
//? Tiny Calculator
//? Task: Make a function tinyCalculator that accepts: 
//? Two numbers and
//? A callback for an operation (like add, subtract, etc.)
//? Goal: The callback should decide which math operation to apply.
//? Hint: Let the callback do the math!

// let tinyCalculator = (a,b,callBack)=>{
//     return callBack(a,b)
// }
// let math = (a,b)=>{
//     return a+b
// }
// console.log(tinyCalculator(10,20,callBack))

//! Question 10
//? The Name Styler
//? Task: Create a function nameStyler that takes a name and a callback.
//? Goal: The callback should style the name in some way (e.g., uppercase, lowercase, add stars around it).
//? Hint: Try toUpperCase() for uppercase styling.

// let nameStyler = (name,callBack)=>{
//     return callBack(name)
// }
// let styler = (name)=>{
//     return `*****${name.toUpperCase()}*****`
// }

// console.log(nameStyler("akshay",styler));

//! Question 11
//? Number Transformer
//? Task: Write a function transform that takes: 
//? A number
//? A callback
//? Goal: The callback should transform the number (e.g., square it, triple it).
//? Hint: Call the callback with the number.

// let transform = (num,callBack)=>{
//     return callBack(num)
// }
// let transformer = (num)=>{
//     return num*num*num
// }
// console.log(transform(3,transformer));

//! Question 12
//? Ask the Oracle
//? Task: Create a function askOracle that takes: 
//? A question
//? A callback
//? Goal: The callback should return a random answer like "Yes," "No," or "Maybe".
//? Hint: Define answers inside the callback and pick one randomly.

// let askOracle = (question,callBack)=>{
//     return callBack(question)
// }

// let callBack = (question)=>{
//     return "Yes"
// }
// console.log(askOracle("Are you handling java ?",callBack))

//! Question 13
//? Number Battle
//? Task: Write a function numberBattle that accepts two numbers and a callback.
//? Goal: The callback should return the larger number.
//? Hint: Use the Math.max() method.

// let numberBattle = (a,b,callBack)=>{
//     return callBack(a,b)
// }

// let callBack = (a,b)=>{
//     return Math.max(a,b)
// }

// console.log(numberBattle(10,20,callBack))

//! Question 14
//? Your Mood Checker
//? Task: Build a function moodChecker that takes: 
//? A mood (like "happy", "sad")
//? A callback
//? Goal: Depending on the mood, the callback should display a matching emoji or message.
//? Hint: Use if to check the mood.

// let moodChecker = (mood,callBack)=>{
//     return callBack(mood)
// }
// let checker = (mood)=>{
//     if(mood==="happy"){
//         return "😊"
//     }
//     if(mood==="sad"){
//         return "😭"
//     }
//     if(mood==="angry"){
//         return "😤"
//     }
// }
// console.log(moodChecker("angry",checker))

//! Question 15
//? Magic Mirror
//? Task: Write a function magicMirror that takes: 
//? A word
//? A callback
//? Goal: The callback should return the word spelled backward.
//? Hint: You can manually reverse the word by looping through it backward.

// let magicMirror = (word,callBack)=>{
//     return callBack(word)
// }
// let reverse = (word)=>{
//     rev ="";
//     for(i=word.length-1;i>=0;i--){
//         rev+=word[i]
//     }
//     return rev
// }
// console.log(magicMirror("kamlesh",reverse))

//! Question 16
//? Age Validator
//? Task: Create a function isAdult that accepts: 
//? An age
//? A callback
//? Goal: If age is 18 or more, the callback should say "You are an adult". Otherwise, "You are a minor".
//? Hint: Use if-else to decide the message.

// let isAdult = (age,callBack)=>{
//     return callBack(age)
// }

// let check = (age)=>{
//     if(age>18){
//         return "You are an adult"
//     }
//     else{
//         return "You are a minor"
//     }
// }
// console.log(isAdult(28,check))

//! Question 17
//? Magic Number
//? Task: Build a function magicNumber that takes a number and a callback.
//? Goal: If the number is 7, the callback should return "Lucky Number!". Otherwise, "Just a number".
//? Hint: Compare the number to 7.

// let magicNumber =(num,callBack)=>{
//     return callBack(num)
// }
// let callBack = (num)=>{
//     if(num==7){
//         return "Lucky Number!"
//     }
//     else{
//         return "Just a number"
//     }
// }
// console.log(magicNumber(8,callBack))

//! Qoestion 18
//? Shout or Whisper
//? Task: Write a function speak that takes a message and a callback.
//? Goal: If the message is in uppercase, the callback should return "Shouting!". Otherwise, "Whispering!".
//? Hint: Compare the message with its uppercase version.

// let speak = (msg,callBack)=>{
//     return callBack(msg)
// }
// let check = (msg)=>{
//     if(msg===msg.toUpperCase()){
//         return "Shouting!"
//     }
//     else{
//         return "Whispering!"
//     }
// }
// console.log(speak("GHANTA",check))

//! Question 19
//? Number Magic Show
//? Task: Create a function numberMagic that takes a number and a callback.
//? Goal: If the number is divisible by 5, the callback should return "High Five!". Otherwise, "No Magic".
//? Hint: Use the % operator to check divisibility.

// let numberMagic = (num,callBack)=>{
//     return callBack(num)
// }
// let callBack = (num)=>{
//     if(num%5==0){
//         return "High Five!"
//     }
//     else{
//         return "No magic"
//     }
// }
// console.log(numberMagic(555,callBack))

//! Question 20
//? Friendly Introduction
//? Task: Write a function introduce that accepts a name and a callback.
//? Goal: The callback should return a fun introduction like "Hey, I'm Bob! Nice to meet you!".
//? Hint: Pass the name to the callback to personalize the message. 

// let introduce = (name,callBack)=>{
//     return callBack(name)
// }
// let callBack = (name)=>{
//     return `Good morning sir, myself ${name}! Nice to meet you!`
// }
// console.log(introduce("Akshay",callBack));
