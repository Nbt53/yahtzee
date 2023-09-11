import { number } from "prop-types";
const singles = ['1', '2', '3', '4', '5', '6', 'bonus']
const hands = ['three of a kind', 'four of a kind', 'full house', 'small straight', 'long straight', 'yahztee', 'total']

let rules = []



function createSingleRules() {
    for (let i = 0; i < singles.length; i++) {
        rules.push({ rule: i, points: number })
    }

}

function createHandRules() {
    for (let i = 0; i < hands.length; i++) {
        hands.push({ rule: i, points: number })
    }

}
console.log(createSingleRules(singleRules))