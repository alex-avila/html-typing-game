'use strict'

const textField = document.getElementById('text')
const paragraph = 'This is definitely a paragraph and not a sentence.'

// Get variables for paragraph beginning middle and end
let beginning = ''
let end = paragraph
let pos = 0

const appendText = () => {
    textField.innerHTML = ''
    beginning = paragraph.slice(0, pos)
    end = paragraph.slice(pos)
    for (let i = 0; i < 2; i++) {
        const span = document.createElement('span')
        const text = document.createTextNode(i === 0 ? beginning : end)
        span.appendChild(text)
        span.style.color = i === 0 ? 'black' : 'gray'
        textField.appendChild(span)
    }
}

textField.focus()

const game = ({key}) => {
    if (key === end[0]) {
        pos++
        appendText()
    }
}

textField.addEventListener('keypress', game)

appendText()