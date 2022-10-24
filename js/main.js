// Scrivi un programma che stampi in console i numeri da 1 a 100,
// ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
//Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Come faccio a sapere se un numero è divisibile per un altro? Abbiamo visto qualcosa di particolare che possiamo usare?

// stampo i numeri da 1 a 100; ma i multipli di 3 === "fizz" & i multiplo di 5 === "buzz" & i multipli di 15 === "fizzBuzz"
for (let i = 1; i <= 30; i++) {
   let shownValue = i;
   if (i % 3 === 0 && i % 5 === 0) {
      shownValue = 'FizzBuzz';
   } else if (i % 3 === 0) {
      shownValue = 'Fizz';
   } else if (i % 5 === 0) {
      shownValue = 'Buzz';
   }

   console.log(shownValue);
}
