// Er verschijnen geen bekomen nummers
// enkel op het einde moet er verschijnen hoeveel x hij dit moest doen.
// de output is geen goed resultaat

/**
 * een startgetal wordt telkens verhoogt met 2.
 * dit tot je aan het eindgetal komt.
 * in de console verschijnen telkens de bekomen nummers.
 * Na de lus geef je onderstaande zin in de console
 *
 * Het startgetal __ werd x aantal keer verhoogt met 2
 * x wordt vervangen door het aantal keer.
 *
 * Indien x een oneven getal is, dan moet er in de console ook nog verschijnen.
 *
 * het is in een oneven aantal keer gebeurt.
 *
 * Indien x een even gatal is, dan moet er in de console ook nog verschijnen.
 *
 * het is in een even aantal keer gebeurt.
 *
 */

let startgetal = 2;
const eindgetal = 12;

for (startgetal; startgetal < eindgetal + 1; startgetal += 2) {
  if (startgetal % 2 == 0) {
    console.log(`het is in een even aantal keer gebeurt`);
    console.log(
      `Het startgetal ${startgetal} werd x aantal keer verhoogt met 2 x wordt vervangen door het aantal keer.`
    );
  } else {
    console.log(`het is in een oneven aantal keer gebeurt`);
    console.log(
      `Het startgetal ${startgetal} werd x aantal keer verhoogt met 2 x wordt vervangen door het aantal keer.`
    );
  }
}
