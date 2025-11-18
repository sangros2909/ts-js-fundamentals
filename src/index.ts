import { CharacterData, MockDCAPI } from "./MockDSAPI";

const mockDCAPI = new MockDCAPI();

const character = mockDCAPI.getCharacter(1);

// Variable destructuring

const { name, powers } = character!;

console.log(name, powers);

const [firstPower, secondPower, ...otherPowers] = powers;

console.log(firstPower, secondPower);

// Rest operator

const remainingPowers = otherPowers;

console.log(remainingPowers);

// Spread operator

const modifiedPowers = [...powers, "Super Smell"];

console.log(modifiedPowers);

// Spread opereator with objects (modification and addition)

const updatedCharacter = {
  ...character,
  isVillain: true,
  favouriteFood: "Haloumi Cheese"
};

console.log(updatedCharacter);

// Inline arrow functions

const getLastePower = (powers: string[]) => powers[powers.length - 1];

// Template literals

const characterSummary = `${name} is Character with the following powers: ${powers.join(", ")}. This character is a ${character!.isVillain ? "Villain" : "Hero"}. This hero's last listed power is ${getLastePower(powers)}.`;


console.log(characterSummary);

// Ternary operator

const villainStatus = character!.isVillain ? "a Villain" : "a Hero";

console.log(`${name} is ${villainStatus}.`);


console.log(getLastePower(powers));

const powerLengths = powers.map((power) => power.length);

console.log(powerLengths);

// Short circuit evaluation

console.log(true && 'This will be logged.');

console.log(false || 'This will also be logged.');

console.log(character!.isVillain || 'This character is a Hero.'); 

// Nullish coalescing and optional chaining

const characterAlias = character!.aliases[0] ?? 'No Alias';

function getCharacterRating(character: CharacterData): number 
{
    const characterPowers = character.powers;
    const numberOfPowers = characterPowers.length;

    const charactersStrength = character.stats?.strength ?? 0;

  return numberOfPowers + charactersStrength!;

}

const newCharacter = mockDCAPI.getCharacter(4)!;

console.log(getCharacterRating(newCharacter));

// Functional Array Methods

// Mapping examples

const testArray = [1, 2, 3, 4, 5];

const doubledArray = testArray.map((number) => number * 2);

console.log(doubledArray);

const allCharacters = mockDCAPI.getCharacters();

const listOfCharacters = allCharacters.map(character => character.name);

console.log(listOfCharacters);

export interface keyCharacterData
{
    name: string;
    isVillain: boolean;
    chararacterRating: number;
}

// Typed inline function with mapping

const keyCharacterInformation = allCharacters.map((character: CharacterData): keyCharacterData => ({
  name: character.name,
  isVillain: character.isVillain,
  chararacterRating:getCharacterRating(character),
}));

console.log(keyCharacterInformation);

// Filtering examples

const vilains = allCharacters.filter(character => character.isVillain);

const heroes = allCharacters.filter(character => !character.isVillain);

console.log(heroes);

console.log(vilains);

// Filter / Map Chaining

const powerfulHeroes = allCharacters.filter(character => !character.isVillain).filter(character => getCharacterRating(character) >= 13).map(character => character.name);

console.log(powerfulHeroes);

// Reduce examples

const totalCharacterStrength = allCharacters.reduce((acc, character) => acc + (character.stats?.strength ?? 0), 0);

console.log(totalCharacterStrength);

// Sorting examples

const testSortingArray = [5, 3, 8, 1, 4];

const sortedArray = testSortingArray.sort((a, b) => a - b);

console.log(sortedArray);

function naiveSortArrayAscending(arrayToSort: number[]): number[]
{
    const newArray: number[] = [];
    const arrayClone = JSON.parse(JSON.stringify(arrayToSort));

    while (arrayClone.length > 0)
    {
        let smallestValue = arrayClone[0];

        for (let i = 0; i < arrayToSort.length; i++)
        {
            if (arrayClone[i] < smallestValue)
            {
                smallestValue = arrayClone[i];
            }
        }

        newArray.push(smallestValue);
        const indexOfSmallest = arrayClone.indexOf(smallestValue);
        arrayClone.splice(indexOfSmallest, 1);
    }


    return newArray;
}

const naiveSortedArray = naiveSortArrayAscending(testSortingArray);

console.log(naiveSortedArray);

const heroessByStrength = allCharacters.filter(character => !character.isVillain).sort((a, b) => (b.stats?.strength ?? 0) - (a.stats?.strength ?? 0));

console.log(heroessByStrength);

const heroesNamesByStrength = allCharacters.filter(character => !character.isVillain).sort((a, b) => (b.stats?.strength ?? 0) - (a.stats?.strength ?? 0)).map(character => character.name);

console.log(heroesNamesByStrength);

// Immutable array operations

// adding to an immutable array

const characterToAdd: CharacterData = {
    id: 5,
    name: "Alexander Sangros",
    firstAppearance: "2025",
    aliases: ["The Newbie"],
    powers: [""],
    isVillain: false,
    baseOfOperations: "Unknown",
    stats: {
        strength: -5,
        speed: -5,
        intelligence: -500,
        durability: 0,
    },
    matchups: [],
};

const modifedCharacterList = [...allCharacters, characterToAdd];

console.log(modifedCharacterList);

// removing from an immutable array
const characterNameToRemove = "David Sangros";

const modifiedCharacterListAfterRemoval = modifedCharacterList.filter(character => character.name !== characterNameToRemove);

console.log(modifiedCharacterListAfterRemoval);

//  updating an immutable array

const modifiedCharacterListAfterUpdate = modifiedCharacterListAfterRemoval.map(character => character.name === "Alexander Sangros" ? {...character, baseOfOperations: "Redhill, UK"} : character);

console.log(modifiedCharacterListAfterUpdate);

// Asynchronous JacvaScript Techniques (loading data from external APIs

// Promise Handling

fetch("https://jsonplaceholder.typicode.com/todos").then(response => response.json()).then(data => {
    console.log("Fetched Data:", data);
}).catch(error => {
    console.error("Error fetching data:", error);
});

// Async / Await

async function fetchTodoItems(): Promise<void>
{
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        const data = await response.json();
        console.log("Fetched Data with Async/Await:", data);
    } catch (error) {
        console.error("Error fetching data with Async/Await:", error);
    }
}

fetchTodoItems().then((fetchedTodos) => {
    console.log("Fetch operation completed.");
    console.log(fetchedTodos)
})

console.log("TESTING ORDER OF ASYNC CODE");















// Optional chaining



