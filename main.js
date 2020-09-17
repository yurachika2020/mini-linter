let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

let overusedWords = ['really', 'very', 'basically'];

const storyWords = story.split(' ');

//console.log(storyWords);

//console.log(storyWords.length);

const betterWords = storyWords.filter(function(storyWord) {
  return !unnecessaryWords.includes(storyWord); 
});

//console.log(betterWords.length);


//There is an array of words called overusedWords. These are words overused in this story. You want to let the user of your program know how many times they have used these overused words.

let overusedWords_count_really = 0 ;
let overusedWords_count_very = 0 ;
let overusedWords_count_basically = 0 ;

for (let i = 0; i < storyWords.length; i++){
  if (storyWords[i] === 'really') {
    overusedWords_count_really += 1 ;
  } else if (storyWords[i] === 'very') {
    overusedWords_count_very += 1 ;
  } else if (storyWords[i] === 'basically') {
    overusedWords_count_basically += 1 ;
  } 
}

console.log(`overusedWords_count_really : ${overusedWords_count_really}`);
console.log(`overusedWords_count_very : ${overusedWords_count_very}`);
console.log(`overusedWords_count_basically : ${overusedWords_count_basically}`);


//Count how many sentences are in the paragraph

let sentence_count = 0 ;
storyWords.forEach(function(storyWord){
  if (storyWord[storyWord.length-1] === '.' || storyWord[storyWord.length-1] === '!') {
    sentence_count += 1 ;
  }
});

//Log these items to the console:
console.log(`The word count : ${storyWords.length}`) ;
console.log(`The sentence count : ${sentence_count}`) ;

let overusedWords_count = 0 ;

for (let i = 0; i < storyWords.length; i++){
  for (let j = 0; j < overusedWords.length; j++) {
    if (storyWords[i] === overusedWords[j]) {
      overusedWords_count += 1 ;
    }
  }
}
console.log(`The number of times each overused word appears : ${overusedWords_count}`) ;


//Log the betterWords array to the console as a single string.
console.log(betterWords.join(' '));




