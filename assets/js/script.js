// TODO: Declare any global variables we need

var tailsCount
var headsCount
var flipsCount
var txtMessage
var imgPenny

Initialize()

function Initialize(){
    tailsCount = 0
    headsCount = 0
    flipsCount = 0
    txtMessage = "Let's Get Rolling!"
    imgPenny = "./assets/images/penny-heads.jpg"
    Redraw()
}

let flip = document.querySelector('#flip')
flip.addEventListener('click', function () {
    flipsCount++
    if (Math.random() < 0.5) {
        headsCount++
        txtMessage = "You Flipped Heads!"
        imgPenny = "./assets/images/penny-heads.jpg"
    } else {
        tailsCount++
        txtMessage = "You Flipped Tails!"
        imgPenny = "./assets/images/penny-tails.jpg"
    }
    Redraw()
})

let clear = document.querySelector('#clear')
clear.addEventListener('click', function () {
    Initialize()
})

function Redraw() {
    let picture      = document.getElementById("penny")
    let message      = document.getElementById("message")
    let heads        = document.getElementById("heads")
    let headsPercent = document.getElementById("heads-percent")
    let tails        = document.getElementById("tails")
    let tailsPercent = document.getElementById("tails-percent")

    picture.setAttribute('src', imgPenny)
    message.textContent = txtMessage
    heads.textContent = headsCount
    tails.textContent = tailsCount
    if (flipsCount === 0) {
        headsPercent.textContent = "0%"
        tailsPercent.textContent = "0%"
    } else {
        headsPercent.textContent = Math.round(100*headsCount/flipsCount) + "%"
        tailsPercent.textContent = Math.round(100*tailsCount/flipsCount) + "%"
    }
}

document.addEventListener('DOMContentLoaded', function () {
    // This is just a sanity check to make sure your JavaScript script is getting loaded
    // You can remove it once you see it in your browser console in the developer tools
    console.log('Hi')

    // TODO: Add event listener and handler for flip and clear buttons

    // Flip Button Click Handler
        // TODO: Determine flip outcome
        // TODO: Update image and status message in the DOM

        // Update the scorboard
        // TODO: Calculate the total number of rolls/flips
        // Make variables to track the percentages of heads and tails
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell


    // Clear Button Click Handler
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)

})