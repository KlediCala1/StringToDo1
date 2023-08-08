function removeBlanks(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            result += str[i];
        }
    }
    return result;
}
console.log(removeBlanks(" Pl ayTha tF u nkyM usi c ")); // Output: "PlayThatFunkyMusic"
console.log(removeBlanks("I can not BELIEVE it's not BUTTER")); // Output: "IcannotBELIEVEit'snotBUTTER"

function getDigits(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (!isNaN(char)) {
            result += char;
        }
    }
    return Number(result);
}
console.log(getDigits("abc8c0d1ngd0j0!8")); // Output: 801008
console.log(getDigits("0s1a3y5w7h9a2t4?6!8?0")); // Output: 1357924680

function acronym(str) {
    const words = str.split(" ");
    let result = "";
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        if (word !== "") {
            result += word[0].toUpperCase();
        }
    }
    return result;
}
console.log(acronym(" there's no free lunch - gotta pay yer way. ")); // Output: "TNFL-GPYW"
console.log(acronym("Live from New York, it's Saturday Night!")); // Output: "LFNYISN"

function countNonSpaces(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            count++;
        }
    }
    return count;
}
console.log(countNonSpaces("Honey pie, you are driving me crazy")); // Output: 29
console.log(countNonSpaces("Hello world !")); // Output: 11

function removeShorterStrings(arr, value) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length >= value) {
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4)); // Output: ['Good morning', 'sunshine', 'Earth', 'says', 'hello']
console.log(removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3)); // Output: ['There', 'bug', 'the', 'system']