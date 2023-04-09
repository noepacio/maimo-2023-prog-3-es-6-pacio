/*
Exercises

Tips: 
1. To show the result of each exercise write a consol log with the form: console.log('Ex 1.', value or function).
2. Make some research about the usage of reduce, some and many.
3. Create a js file called utils.js and place all helper functions in it. (Ex 10 and 14)

1) Import songs array using modules.

2. Use the map function to create a new array with the title of each song in uppercase letters.

3. Use the filter function to create a new array with all the songs released before 1975.

4. Use destructuring to create a variable that stores the title of the first song in the array.

5. Use the find function to get the object representing the song "Hotel California".

6. Use the rest operator to create a function that takes any number of arguments and returns their sum. (Tip: Use reduce)

7. Use the map function and template literals to create a new array with strings in the format "Title - Artist (Year)" for each song.

8. Use destructuring and the filter function to create a new array with the titles of all the songs by The Beatles.

9. Use arrow functions and the reduce function to calculate the total number of years between all the songs' release dates. (Tip: Use reduce)

10. Create a module that exports a function to calculate the average release year of the songs in the input array. (Tip: Use reduce.)

11. Use the find function to get the object representing the song with the longest title.

12. Use destructuring and template literals to log the title, artist and year of the first element of the array.

13. Use the rest operator to create a new array without the first element.

14. Import the filter() function from a utils.js module and use it to create a new array with all the songs that have "Love" in the title.

15. Use the every() method to check if all the songs have titles that are 5 or more characters long.

16. Use the some() method to check if there are any songs from the 80s.

17. Use a template literal to create a string that says "The Beatles released Let It Be in 1970."

18. Use the map() method to create a new array with just the artist names.

19. Create a function called randomMovie that returns one movie from the songs array randomly. Log the call of this function 3 times.

20. Write your own function using at least 3 concepts.

*/

// 1) Import songs array using modules.

import songs from "./songs.js";

console.log(songs);

// 2. Use the map function to create a new array with the title of each song in uppercase letters.

const songTitles = songs.map((song) => {
    return { title: song.title.toUpperCase() };
});

console.log(songTitles);

// 3. Use the filter function to create a new array with all the songs released before 1975.

const oldSongs = songs.filter(({year}) => year <= 1975);

console.log(oldSongs);

// 4. Use destructuring to create a variable that stores the title of the first song in the array.????

const {title: titleOfTheFirstSong} = songs[0];
console.log(titleOfTheFirstSong);

// 5. Use the find function to get the object representing the song "Hotel California".

const hotelCaliforniaSong = songs.find((song) => "Hotel California");

console.log(hotelCaliforniaSong);

// 6. Use the rest operator to create a function that takes any number 
// of arguments and returns their sum. (Tip: Use reduce)

const numbers = [1, 8, 20, 89];

const sum = numbers.reduce((acumulator, number) => {
    return acumulator + number;
})

console.log(sum);

//const sum = (...values) => 

// 7. Use the map function and template literals to create 
// a new array with strings in the format "Title - Artist (Year)" for each song.

const artistAndTitle = songs.map((song) => {
    return `${song.title} - ${song.artist} (${song.year})`;
});

console.log(artistAndTitle);

// 8. Use destructuring and the filter function to create 
// a new array with the titles of all the songs by The Beatles.

const beatlesSongs = songs.filter(({artist}) => artist === "The Beatles");

console.log(beatlesSongs);

// 9. Use arrow functions and the reduce function 
// to calculate the total number of years between all the songs' release dates. (Tip: Use reduce)

const totalYears = songs.reduce((acc, curr) => acc + curr.year, 0);

console.log(totalYears);

// 10. Create a module that exports a function to calculate 
// the average release year of the songs in the input array. (Tip: Use reduce.)

const averageYears = totalYears / songs.length;

console.log(averageYears);

// 11. Use the find function to get the object representing the song with the longest title.

const longestTitle = songs.find((song) => {
    return song.title.length === Math.max(...songs.map((song) => song.title.length));
});

console.log(longestTitle);

// 12. Use destructuring and template literals 
// to log the title, artist and year of the first element of the array.

const firstElement = songs.map(({title, artist, year}) => {
    return `Title: ${title} Artist: ${artist} Year: ${year}`
});

console.log(firstElement[0]);

// 13. Use the rest operator to create a new array without the first element.

const restOfTheArray = [...songs.slice(1)]; //slice()

console.log(restOfTheArray);

// 14. Import the filter() function from a utils.js module 
// and use it to create a new array with all the songs that have "Love" in the title.

import { songsWithLove } from "./songs.js";

console.log(songsWithLove);

// 15. Use the every() method to check if all the songs have titles that are 5 or more characters long.

const songsCharacters = songs.every(function(song) {
    return title.length >= 5
});

console.log(songsCharacters);


// 16. Use the some() method to check if there are any songs from the 80s.
// Hay algo mal
const anySongs = songs.some(function(year) {
    return (year >= 80 && year <= 89)
});

console.log(anySongs); 

// 17. Use a template literal to create a string that says "The Beatles released Let It Be in 1970."

const beatlesSong = songs.find((song) => song.artist === "The Beatles");

const beatlesString = `${beatlesSong.artist} released ${beatlesSong.title} in ${beatlesSong.year}`;

console.log(beatlesString);

// 18. Use the map() method to create a new array with just the artist names.

const artistsNames = songs.map((song) => song.artist);

console.log(artistsNames);

// 19. Create a function called randomMovie that returns 
// one movie from the songs array randomly. Log the call of this function 3 times.

function randomTitle() {
    const index = Math.floor(Math.random() * songs.length);
    return songs[index].title;
}

console.log(randomTitle());
console.log(randomTitle());
console.log(randomTitle());

// 20. Write your own function using at least 3 concepts.
// Use destructuring and the filter function to create a new array with the songs released after 1980. Show them using template literals 

const afterEighties = songs.filter(({year}) => year >= 1980);

const results = `The songs are ${afterEighties[0].title}, ${afterEighties[1].title} and ${afterEighties[2].title}`;

console.log(results);

