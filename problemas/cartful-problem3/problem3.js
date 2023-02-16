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
    }
];


// Calcular las combinaciones

function getCombinations(questions) {
    const totalQuestions = questions.length;
    const totalAnswers = questions[0].answers.length;
    const totalCombinations = Math.pow(totalAnswers, totalQuestions);
    console.log(`Total combinations: ${totalCombinations}`);
    return { totalCombinations, totalQuestions, totalAnswers };
}

function createCSV(questions) {
    const fs = require('fs');
    const fileHeader = questions.map(q => q.questionName).join(',');
    const fileName = 'problem3.csv';
    // Create new File with questions names
    fs.writeFileSync(fileName, `${fileHeader}\n`);

    let { totalCombinations, totalQuestions, totalAnswers } = getCombinations(questions);
    console.log(totalCombinations, totalQuestions, totalAnswers);
    // Create Answers
    for (let i = 0; i < totalCombinations; i++) {
        const combination = [];
        let counter = i;

        for (let j = 0; j < totalQuestions; j++) {
            const answerIndex = counter % totalAnswers;
            counter = Math.floor(counter / totalAnswers);
            if (questions[j].answers[answerIndex]) {
                // Adding new combination
                combination.unshift(questions[j].answers[answerIndex].answerName);
            }
        }

        const fileLine = combination.join(',');
        fs.appendFileSync(fileName, `${fileLine}\n`);
    }
}

createCSV(questions);