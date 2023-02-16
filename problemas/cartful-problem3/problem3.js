const questions = [
    {
        questionId: 1, questionName: 'What is your favorite color?', answers: [
            { answerName: 'Red', answerId: 11 },
            { answerName: 'Blue', answerId: 12 },
            { answerName: 'Pink', answerId: 13 }
        ]
    },
    {
        questionId: 2, questionName: 'Are you a flat-earther?', answers: [
            { answerName: 'Yes', answerId: 21 },
            { answerName: 'No', answerId: 22 }
        ]
    },
    {
        questionId: 3, questionName: 'Are you Happy?', answers: [
            { answerName: 'Yes', answerId: 31 },
            { answerName: 'No', answerId: 32 }
        ]
    }
];

function getAnswers() {
    let answerArrays = [];
    for (var i = 0; i < questions.length; i++) {
        var question = questions[i];
        var answers = question.answers.map(function (answer) {
            return answer.answerName;
        });
        answerArrays.push(answers);
    }
    return answerArrays;
}

function getCombinations(answerArray) {
    if (answerArray.length === 0) {
        return [[]];
    }

    const result = [];
    const rest = getCombinations(answerArray.slice(1));

    for (let i = 0; i < rest.length; i++) {
        for (let j = 0; j < answerArray[0].length; j++) {
            result.push([answerArray[0][j], ...rest[i]]);
        }
    }

    return result;
}

function createCSV(combinations, questionNames) {
    const fs = require('fs');
    const fileName = 'problem3v2.csv';
    // Create new File with questions names
    fs.writeFileSync(fileName, `${questionNames}\n`);
    // Create Answers
    combinations.forEach(element => {
        const fileLine = element.join(',');
        fs.appendFileSync(fileName, `${fileLine}\n`);
    });
}

let answerArrays = getAnswers();
let combinations = getCombinations(answerArrays);
const questionNames = questions.map(question => question.questionName).join(',');;
createCSV(combinations, questionNames);
