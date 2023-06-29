/* the purpose of this app is creating a random password that has a set length. This can't be below than 6 characters neither above than 16 characters.*/
function randomPasswordGenerator(PassLength){
    /* check if the parameter put into the function is the desired */
    if(PassLength < 6 || PassLength > 16){
        return "You password should have between 6 characters and 16 of length!"
    }

    /*this are the arrays of characters that the password will use */

const alphabet = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
  ];

const numbers = [
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
  ];
  
const specialCharacters = [
    '!', '@', '#', '$', '%', '^', '&', '?'
];

    /* this variable will be the one containing the result */

    let password = "";

    /* A for loop will be used to create the password. 
    It's length will be based on the function parameter passLength.
    Inside of it we will generate a random number between 0 and 2, to randomly choose a type of character.
    Then, it will take a random character from the selected array and add it to the password variable*/

for(let i = 0; i < PassLength; i++){
    /* this generates a random number between 0 and 2 */
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber){
        /* Characters case */
        case 0:
            password += alphabet[Math.round(Math.random() * (alphabet.length - 1))];
        break;
        /* Numbers case */
        case 1:
            password += numbers[Math.round(Math.random() * (numbers.length - 1))];
        break;
        /* Special characters case */
        case 2:
            password += specialCharacters[Math.round(Math.random() * (specialCharacters.length - 1))];
        break;
    }
}
    /* After the loop is compleated, the created password will be returned */
    return password;
}

/* here are some tests, to check if it's working properly*/

console.log(randomPasswordGenerator(100));
console.log(randomPasswordGenerator(-2));
console.log(randomPasswordGenerator(10));
console.log(randomPasswordGenerator(12));
console.log(randomPasswordGenerator(7))