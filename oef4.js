/**
 * Maak zelf de nodige variabelen aan voor onderstaande probleem
 * 
 * Een huis is geprogrammeerd op woorden. 
 * Een gebruiker spreekt een woord uit en op basis van het woord 
 * gebeurt een actie (deze acties worden uitgeschreven in de console)
 * onderstaande commando's kunnen gegeven worden
 * commande     -   console output
 * - open deur  =>  deur gaat open
 * - muziek     =>  muziek start met spelen
 * - stilte     =>  Muziek gaat uit
 * - licht aan  =>  Licht gaat aan
 * - licht uit  =>  licht gaat uit
 * 
 */

let commando = "muziek"

const openDeur = "Deur gaat open"
const muziek = "Muziek start met spelen"
const stilte = "Muziek gaat uit"
const lichtAan = "Licht gaat aan"
const lichtUit = "Licht Gaat uit"

switch (commando) {
    case commando = "open deur":
        console.log(openDeur);
        break;
    case commando = "muziek":
        console.log(muziek);
        break;
    case commando = "stilte":
            console.log(stilte);
            break;
    case commando = "licht aan":
        console.log(lichtAan);
        break;
    case commando = "licht uit":
        console.log(lichtUit);
        break;
    default:
        break;
}

