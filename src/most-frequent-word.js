//Most frequent word

const _ = require('lodash');

(function () {
    const paragraph = `Bob hit a ball, the hit BALL flew long after it was hit`
    const forbiddenWords = ['hit']

    try {
        if (paragraph.length < 1 || paragraph.length > 1000) throw 'Paragraph length must be greater than 1 and less than 1000!'
        if (forbiddenWords.length < 1 || forbiddenWords.length > 100) throw 'Paragraph length must be greater than 1 and less than 100!'

        let lowerParagraph = paragraph.toLocaleLowerCase().replace(/[^\w\s]/gi, '')
        let wordsArray = lowerParagraph.split(' ')
        let allowedWords = [];

        for (const word of wordsArray) {
            if (!word || forbiddenWords.includes(word)) continue;
            allowedWords.push(word)
        }

        const wordCounting = _.countBy(allowedWords)
        console.log(wordCounting)

    } catch (err) {
        throw new Error(`Error: ${err.message || err}`)
    }
})();