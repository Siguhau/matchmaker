// function that takes an array and rotates it to the left by one step.
// example: rotateLeft([1,2,3,4,5]) => [2,3,4,5,1]
export function rotateLeft(arr) {
    let first = arr[0];
    for (let i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
    }
    arr[arr.length - 1] = first;
    return arr;
}

export function rotateRight(arr) {
    let last = arr[arr.length - 1];
    for (let i = arr.length - 1; i > 0; i--) {
        arr[i] = arr[i - 1];
    }
    arr[0] = last;
    return arr;
}

export function isOdd(num) {
    return num % 2 !== 0;
}

export function isEven(num) {
    return num % 2 === 0;
}

// create a array based on the input number
export function createArray(num) {
    const arr = [];
    for (let i = 1; i <= num; i++) {
        arr.push(i);
    }
    return arr;
}

export function createMatchups(arr){
    const matchups = [];
    const half = Math.ceil(arr.length / 2);
    for (let i = 0; i < half; i++) {
        matchups.push([arr[i], arr[arr.length - 1 - i]]);
    }
    return matchups;
}

// Rotate the teams in the array forward or backward depending on input function
export function rotateTeams(arr, rotate ){
    if (isOdd(arr.length)) {
        arr = rotate(arr);
    
    } else {
        const first = arr.shift();
        // remove first element to rotate the rest of the array
        arr = rotate(arr);
        //append element first in array
        arr.unshift(first);
    }    
    return arr;
}
export function rotateTeamsForward(arr) {
    return rotateTeams(arr, rotateLeft);
}

export function rotateTeamsBackwards(arr){
    return rotateTeams(arr, rotateRight);
}

//let arr = createArray(5);

//console.log(arr);
//console.log("Matchup: ", createMatchups(arr));
//console.log("Forward: ");
//console.log(rotateTeamsForward(arr));
//console.log("Matchup: ", createMatchups(arr));
//console.log("Backward: ");
//console.log(rotateTeamsBackwards(arr));
//console.log("Matchup: ", createMatchups(arr));
//console.log("Forward: ");
//console.log(rotateTeamsForward(arr));
//console.log("Matchup: ", createMatchups(arr));
//console.log("Forward: ");
//console.log(rotateTeamsForward(arr));
//console.log("Matchup: ", createMatchups(arr));
//console.log(rotateTeamsForward(arr));
//console.log("Matchup: ", createMatchups(arr));
//console.log(rotateTeamsForward(arr));
//console.log("Matchup: ", createMatchups(arr));
//console.log(rotateTeamsForward(arr));
//console.log("Matchup: ", createMatchups(arr));
//console.log(rotateTeamsForward(arr));
//console.log("Matchup: ", createMatchups(arr));
//console.log(rotateTeamsForward(arr));


