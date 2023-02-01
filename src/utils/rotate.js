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

// create matchups based on the array, 
// this creates all the matchups in one round
// before the teams are rotated.
export function createMatchups(arr){
    const matchups = [];
    const half = Math.ceil(arr.length / 2);
    for (let i = 0; i < half; i++) {
        let matchup = [arr[i], arr[arr.length - 1 - i]]
        if (matchup[0] !== matchup[1]) {
            matchups.push(matchup);
        }
    }
    return matchups;
}

// Create all matchoups for all rounds.
export function createAllMatchups(arr){
    const matchups = [];
    for (let i = 0; i < arr.length; i++) {
        matchups.push(createMatchups(arr));
        arr = rotateTeamsBackwards(arr);
    }
    // if the length is even, remove the last matchups
    // (BUG: double entry)
    if (isEven(arr.length)) {
        for (let i = 0; i < arr.length/2; i++) {
            matchups[matchups.length-1].pop();
        }
    }
    return matchups
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
