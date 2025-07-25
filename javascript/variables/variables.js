let firstName = "Jana"; //Deklarace a inicializace proměnné
let lastName; //deklarace proměnné (deklaruju proměnnou, místo uložení)
lastName = "Novák"; // Inicializace proměnné (co do proměnné chci vložit)
console.log(firstName);
console.log(lastName);
firstName = "Alžběta";
console.log(firstName);

//proměnná začíná malým písmenem, nesmí začínat číslem

//var je proměnná která by se už neměla používat, je zachovaná kvůli starším programům, definuje se pro modul a může způsobit komplikace

var variableVar = "test";
{
  var x = "test";
}

// * Proměnná let
{
  let y = "test Let";
}
// console.log(y); // ? Vypíše chybu při spuštění (nemůžu použít proměnnou mimo blok kódu)

//let city;
let city; // ? nemůžu redeklarovat

// Proměnná const -> nejde měnit
const country = "Česko";
// country = "Rakousko"; // ! Způsobí chybu při spuštění

// const tree; // ! const musí být nastavena (inicializována) při deklaraci

/* toto se používá na psaní delšího bloku
 */

// podmínka -> na jejím základě se můžeme rozhodovat
