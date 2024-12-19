// Data
const FULL_DECK = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10,
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10,
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10,
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10
]
let deck
let playerHand
let dealerHand

// Top-level function for playing a round
function playRound() {
    reset()
    dealCardToBoth()
    dealCardToBoth()
    while (!isGameOver() && playerWantsCard()) {
        dealCardToBoth()
    }
    const winner = getWinner()
    announceWinner(winner)
}

// Reset all the cards
function reset() {
    deck = shuffle(FULL_DECK)
    playerHand = []
    dealerHand = []
}

// Returns a shuffled copy of an array
function shuffle(array) {
    const shuffledArray = array.slice()
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        const temp = shuffledArray[i]
        shuffledArray[i] = shuffledArray[j]
        shuffledArray[j] = temp
    }
    return shuffledArray
}

// Deal a card to both players
function dealCardToBoth() {
    playerHand.push(deck.pop())
    dealerHand.push(deck.pop())
}

// Check if the game is over because someone's hand is equal to or over 21
function isGameOver() {
    return getHandValue(playerHand) >= 21 || getHandValue(dealerHand) >= 21
}

// Ask the player if they want another card, return true if they do
function playerWantsCard() {
    const response = prompt(`Your hand value: ${getHandValue(playerHand)}\n\nDo you want another card`)
    const wantCard = response !== null && (
        response.toLowerCase() === "yes" || 
        response.toLowerCase() === "y"
    )
    return wantCard
}

// Add up the value of a hand of cards
function getHandValue(hand) {
    let total = 0
    for (let i = 0; i < hand.length; i++) {
        total += hand[i]
    }
    return total
}

// Figure out who is closest to 21 without going over
function getWinner() {
    const dealerValue = getHandValue(dealerHand)
    const playerValue = getHandValue(playerHand)
    const dealerGap = 21 - dealerValue
    const playerGap = 21 - playerValue
    if (dealerValue <= 21 && (dealerGap < playerGap || playerValue > 21)) {
        return "Dealer"
    }
    if (playerValue <= 21 && (playerGap < dealerGap || dealerValue > 21)) {
        return "Player"
    }
    return "No one"
}

// Alert out the winner to the user
function announceWinner(winner) {
    alert(`Final hand totals:\n\nDealer: ${
        getHandValue(dealerHand)
    }\nPlayer: ${
        getHandValue(playerHand)
    }\n\nAnd the winner is....\n\n${winner}!!!`)
}