
function playRound() {
    const fullDeck = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10,
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10,
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10,
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10
    ]
    let deck = fullDeck
    let playerHand = []
    let dealerHand = []
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        const temp = deck[i]
        deck[i] = deck[j]
        deck[j] = temp
    }
    playerHand = []
    dealerHand = []
    playerHand.push(deck.pop())
    dealerHand.push(deck.pop())
    playerHand.push(deck.pop())
    dealerHand.push(deck.pop())
    let playerHandValue = 0
    for (let i = 0; i < playerHand.length; i++) {
        playerHandValue += playerHand[i]
    }
    const response = prompt(`Your hand value: ${playerHandValue}\n\nDo you want another card`)
    let wantsCard = response !== null && (
        response.toLowerCase() === "yes" ||
        response.toLowerCase() === "y"
    )
    let dealerHandValue = 0
    for (let i = 0; i < dealerHand.length; i++) {
        dealerHandValue += dealerHand[i]
    }
    while (!(playerHandValue >= 21 || dealerHandValue >= 21) && wantsCard) {
        playerHand.push(deck.pop())
        dealerHand.push(deck.pop())
        playerHandValue = 0
        for (let i = 0; i < playerHand.length; i++) {
            playerHandValue += playerHand[i]
        }
        dealerHandValue = 0
        for (let i = 0; i < dealerHand.length; i++) {
            dealerHandValue += dealerHand[i]
        }
        if(playerHandValue >= 21 || dealerHandValue >= 21) {
            break
        }
        const response = prompt(`Your hand value: ${playerHandValue}\n\nDo you want another card`)
        wantsCard = response !== null && (
            response.toLowerCase() === "yes" ||
            response.toLowerCase() === "y"
        )
    }
    dealerHandValue = 0
    for (let i = 0; i < dealerHand.length; i++) {
        dealerHandValue += dealerHand[i]
    }
    const dealerGap = 21 - dealerHandValue
    const playerGap = 21 - playerHandValue
    let winner
    if (dealerHandValue <= 21 && (dealerGap < playerGap || playerHandValue > 21)) {
        winner = "Dealer"
    }
    else if (playerHandValue <= 21 && (playerGap < dealerGap || dealerHandValue > 21)) {
        winner = "Player"
    } else {
        winner = "No one"
    }
    alert(`Final hand totals:\n\nDealer: ${dealerHandValue
        }\nPlayer: ${playerHandValue
        }\n\nAnd the winner is....\n\n${winner}!!!`)
}