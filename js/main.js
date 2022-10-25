const fizzBuzzBox = document.querySelector('.fizz-buzz-box');
// ciclo a contatore, 100 volte a partire da 1
for (let i = 1; i <= 100; i++) {
   // stampo i numeri da 1 a 100; ma i multipli di 3 = "fizz" & i multipli di 5 = "buzz" & i multipli di 15 = "fizzBuzz"
   // creo tanti box quanti sono sono gli shownValue
   const valueBox = document.createElement('div');
   valueBox.classList.add('box');
   let shownValue = i;

   if (i % 3 === 0 && i % 5 === 0) {
      shownValue = 'FizzBuzz';
      valueBox.classList.add('box-fizz-buzz');
   } else if (i % 3 === 0) {
      shownValue = 'Fizz';
      valueBox.classList.add('box-fizz');
   } else if (i % 5 === 0) {
      shownValue = 'Buzz';
      valueBox.classList.add('box-buzz');
   }

   fizzBuzzBox.append(valueBox);
   valueBox.innerHTML = shownValue;
}
