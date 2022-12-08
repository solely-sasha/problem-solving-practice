//  1.   understand the problem
//     ------------------------------------------------
//       write a function that takes an array of numbers and returns the largest
//       the parameter is an array of numbers and the output will be the largest number in that array

//  2.   Make a plan 
//      ------------------------------------------------------
//       use a for loop to loop over the numbers and find the largest number

//  3.   implement the plan
//      -------------------------------------------------------

function largest(array) {
  
    let highestNum = array[0];
    for (var i = 0; i < array.length; i++){
        let currentNum = array[i]
        if(currentNum > highestNum){
            highestNum = currentNum;
            return highestNum;
            
        }
    }


}


//  4   review
//     -----------------------------------------------
//      console.log(largest([4, 54, 28, 19, 23, 5, 6]))
        console.log(largest([36, 8, 40, 13, 9]))


//     --------- Part 2 -----------------------------------------------------------------

//      Write a function that takes an array of words and a character and returns each word that has that character present.
// 1.   understand the problem
//    ------------------------------------------------------------------------------------------------------
//      write a function that has 2 parameters; one is an array of words and one is a character so when the function is 
//      is called, it will return all of the words from the array that contain the specified character. 

// 2.   Make a plan
//    --------------------------------------------------------------------------------------------------
//      start with a function and name the variables for the array and character parameters. Decide which array method 
//      can be used to loop through the array and find the character, but also return the words that include that character.
//      Possibly just filter. 

//  3.  Implement the plan
//     -------------------------------------------------------------------------------------------------
//    1st attempt using filter()

function lettersWithStrings(array, character){

filteredCharacters = array.filter(word => word.includes(character))
    return filteredCharacters;


}

//   4. Review
//     ----------------------------------------------------------

console.log(lettersWithStrings(["$omething", "W0rd", "Hi!", "$a$ha", ],"$" ))