// Code your solutions in this file
// returns an array of thank you messages for each name provided to the function:

function writeCards(namesArray,eventName){
let newMessage = [];
for 
(let i=0; i<namesArray.length; i++)
{
newMessage .push(`Thank you, ${namesArray[i]}, for the wonderful ${eventName} gift!`);
}
return newMessage;
}

// invokes console.log once for each number, counting down from the number provided to zero:

function countDown(number) {
    while (number >= 0) {
      console.log(number);
      number--;
    }
}