const stages = [
    {
        "key": "REQUEST RECEIVED",
        "value": "Open"
    },
    {
        "key": "MEASUREMENT ACQUIRED",
        "value": "measurementAquired"
    },
    {
        "key": "ESTIMATE COMPLETED",
        "value": "estimateCompleted"
    }
];
/**
 * Reduce => some
 */
const stageSome = stages.reduce((prev, curr) => {
    if (curr.value === 'measurementAquired') {
        return true;
    }
    return prev;
}, false)

console.log(stageSome)


/**
 * Reduce => every
 */
 const every = [10, 5, 20, 160]
 const stageEvery = every.reduce((prev, curr) => {
 console.log(curr)
     if (curr > 150) {
         return false;
     }
     return prev;
 }, true)

console.log(stageEvery)

/**
 * Reduce => map
 */
const numbers = [
    12,
    1,
    89,
    45
]
const maxNum = numbers.reduce((prev, curr) => (curr > prev) ? curr : prev, 0);

console.log(maxNum)
const users = [
    {
        name: "Yagnesh",
        age: 30,
        gender: 'male'
    },
    {
        name: "Rohit",
        age: 26,
        gender: 'male'
    },
    {
        name: "virat",
        age: 24,
        gender: 'male'
    },
    {
        name: "dipila",
        age: 32,
        gender: 'female'
    },
    {
        name: "priyanka",
        age: 34,
        gender: 'female'
    },
    {
        name: "alia",
        age: 18,
        gender: 'female'
    },
];
const groupByAge = users.reduce((p, c) => {
    if ((c.age >= 10) && (c.age < 20)) {
        (p["10-19"] = p["10-19"] || []).push(c);
    } else if ((c.age >= 20) && (c.age < 30)) {
        (p["20-29"] = p["20-29"] || []).push(c);
    } else {
        (p["30-39"] = p["30-39"] || []).push(c);
    }
    return p;
}, {});

console.log(groupByAge)
