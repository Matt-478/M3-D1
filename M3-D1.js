/* 1. Create a function to calculate the sum of the two given integers. If the two values are the same, return triple their sum. */
const sumOfNumbers = function (num1, num2) {
    if(num1 === num2) {
        return ((num1 + num2) *3 )
    } else {
        return num1+num2
    }
}

// console.log(sumOfNumbers(3,3)) 
// console.log(sumOfNumbers(2,3))

/* 2. Create a function to check two given integers. Return `true` if one of them is 50 or if their sum is 50. */
const isThisFifty = function (num1, num2) {
    let sum = 50
    if(num1 + num2 === sum || num1 === sum || num2 === sum) {
    return true
    } else {
     return false
 }
}
// console.log(isThisFifty(25, 25))


/* 3. Create a function to remove a character at a specified position from a given string: pass the position and the string as parameters, return the new string. */
const removeCharacter = function (str, position) {
    let splitString = str.split("")
}


/* 4. Create a function to find and return the largest of three given integers. */
const returnLargest = function (num1, num2, num3) {
    let arr = []
        if (num1 > num2 ) {
            arr.push(num1)
        }
        else if (num2 > num3) {
            arr.push(num2)
        } else {
            arr.push(num3) 
        }
        return arr
    }

// console.log(returnLargest(43,102,12))


/* 5. Create a function to check if two numbers are in the range 40-60 or 70-100. 
    Return `true` if they do, return `false` if one (or both) don't. */
    const inRange = function(num1, num2) {
    if(num1 >= 40 && num1<= 60 && num2 >= 40 && num2<= 60 || num1>=70 && num1 <=100 && num2>=70 && num2 <=100) {
        return true
    } else {
        return false
    }
}
// console.log(inRange(106, 93))

/* 6. Create a function to create a new string composed of a specified number of copies of a given string. 
    Pass the string and the number of copies as parameters. */
    const newStringOfOld = function (str, numOfCopies) {
    return str.repeat(numOfCopies)
    }
    // console.log(newStringOfOld("old", 4))


/* 7. Create a function to display the city name if the string begins with "Los" or "New". 
    Pass the city name as a parameter. Return `false` if they start with a different string. */
    const displayCityName = function(cityName) {
        if (cityName.length >= 3 && ((cityName.substring(0, 3) == 'Los')
        || (cityName.substring(0, 3) == 'New'))){
            return true
        } else {
            return false
        }
    }
    // console.log(displayCityName("Old Check"))


/* 8. Create a function to calculate and return the sum of all elements from an array with 3 elements. 
    Pass the array as a parameter. */
    const returnSumAll = function (arr) {
        let sum = 0
        for(let i = 0; i<arr.length; i++) {
            sum = sum +arr[i]
        }
        return sum
    }
// console.log(returnSumAll([1,2,3,4,5]))

/* 9. Create a function to test if an array of length 2 contains 1 OR 3. 
    Return `true` is it does, `false` if it doesn't. */
    const containsOneOrThree = function (arr) {
        if(arr.length === 2 ) {
            if( arr[0] === 1 || arr[0] === 3 || arr[1] === 1 || arr[1] === 3) {
            return true
        } else {
            return false
        }
    }
}
    // console.log(containsOneOrThree([7,5]))


/* 10. Create a function to test if an array of lenght 2 DOES NOT contain 1 or 3. 
    Return `true` if it doesn't, `false` if it does. */ 
    const doesnNotContainOneOrThree = function (arr) {
        if(containsOneOrThree(arr) === true ) {
            return false
        } else {
            return true
        }
    }
    // console.log(doesnNotContainOneOrThree([3,5]))


/* 11. Create a function to find the longest string from a given array of strings. 
    Pass the array as parameter and return the longest string. */ 
     const longestString = function (arr) {
        let length = 0;
        let longest;
        
        for (let i = 0; i < arr.length; i++) {
          if (arr[i].length > length) {
            length = arr[i].length;
            longest = arr[i];
          }
        }
        return longest
     }
    //  console.log(longestString(["Betty", "John", "Nala", "Elizabeth", "Frank"]))


/* 12. Create a function to find the types of a given angle:
  1. Acute angle ⇒ between 0 and 90 degrees. Return `acute`.
    2. Right angle ⇒ 90 degree. Return `right`
    3. Obtuse angle ⇒ between 90 and 180. Return `obtuse`
    4. Straight angle ⇒ 180 degrees. Return `straight`

    Pass the angle as a parameter.
*/
    const findTypeOfGivenAngle = function (angle) {
    // switch(angle) {
    //     case angle >= 0 && angle <= 90:
    //         return console.log("Acute")
    //         break
    //     }

        if (angle >= 0 && angle <= 90) {
            return console.log("Acute")
        } else if (angle === 90) {
            return "Right"
        } else if (angle >= 90 && angle <= 180) {
            return "Obtuse"
        } else if (angle === 180) {
            return "Straight"
        } else {
            return false
        }
    }
    // console.log(findTypeOfGivenAngle(4))


/* 13. Create a function to find and return the index of the greatest element of a given array of integers that you passed as a parameter. */
    const findIndexOfGreatest = function (arrayOfIntegers) {
        let max = arrayOfIntegers[0];
        let maxIndex = 0;
    
        for (let i = 1; i < arrayOfIntegers.length; i++) {
            if (arrayOfIntegers[i] > max) {
                maxIndex = i;
                max = arrayOfIntegers[i];
            }
        }
    
        return maxIndex;
    }
    // console.log(findIndexOfGreatest([3,7,2,14]))

/* 14. Create a function to find and return the largest **even** number from an array of integers that is passed a parameter. */
    const findLargestEvenNum = function (arrayOfIntegers) {
        arrayOfIntegers.sort((x, y) => y - x)

        for (let i = 0; i < arrayOfIntegers.length; i++) {
          if (arrayOfIntegers[i] % 2 == 0) {
            return arrayOfIntegers[i];
          }
        }   
    }
    // console.log(findLargestEvenNum([20, 40, 200]));

/* 15. Create a function to check from two given integers (passed as parameters) if one is positive and the other is negative. 
    Return `true` if that's the case, return `false` if it's not. */
    const areTheyoppositeIntegers = function (num1, num2) {

        if(num1 >= 0 && num2 < 0 || num2 >= 0 && num1 < 0) {
            return true
        } else {
            return false
        }
    }
    // console.log(areTheyoppositeIntegers(3,-7))


/* 16. Create a function to create and return a new string where the first 3 characters and in lower case and the others are in upper case. 
    If the string's length is less than 3, convert the whole string into uppercase. Pass the original string as a parameter. */
    const firstThreeLowerCase = function (str) {
        if(str.length === 3) {
           return str.toUpperCase();
        } else {
            let frontPart = (str.substring(0, 3)).toLowerCase();
            let backPart = str.substring(3, str.length).toUpperCase();  
            return frontPart + backPart;
        }
    }
    // console.log(firstThreeLowerCase("Ben"))
    // console.log(firstThreeLowerCase("Bonjourno"))


/* 17. Create a function to calculate the sum of two integers (passed as parameters). 
    If the sum is in the 50-80 range, return `65`, otherwise, return `80`. */


/* 18. Create a function to convert a number (passed as a parameter) into a string, basing yourself on this example: 
    The number has 3 as a factor ⇒ return `Diego`
    The number has 5 as a factor ⇒ return `Riccardo`
    The number has 7 as a factor ⇒ return `Stefano`
    If the number does not have 3,5, or 7, return the original number. 
    ⚠️ The factor is an integer which evenly divides a number without leaving a remainder. One number can have more than one factor, in that case you should return both names. 
Ex. 15 has both 3 and 5 has factors: the function will return `DiegoRiccardo` */


/* 19. Create a function that that takes a phrase as a parameter and returns its acronym.
Ex. British Broadcasting Corporation returns `BBC` */