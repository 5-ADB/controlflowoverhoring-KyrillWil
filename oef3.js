// dit werkt wel, maar is niet goed gecodeerd. 
// waarom vergelijk je een boolean met true, dit is niet nodig

/**
 * Je krijg 2 variabelen
 * Als de grond droog is, en er wordt geen regen voorspeld dan moet er in de
 * console verschijnen: sproeiers aan
 * In het andere geval moet er in de console verschijnen: sproeiers uit
 */

const grondIsDroog = true;
const geenRegenVoorspeld = true;

if (grondIsDroog && geenRegenVoorspeld == true) {
    console.log(`sproeiers aan`);
}
else{
    console.log(`sproeiers uit`);
}