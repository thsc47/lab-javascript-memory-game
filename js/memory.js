class MemoryGame {
  constructor(cards) {
    // add the rest of the class properties here
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  shuffleCards() {
    let arr = this.cards;
    let i = arr.length; 
    let j, temp;

    while(--i > 0) {
      j = Math.floor(Math.random() * (i+1));
      temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
    }
    return arr
  }

  checkIfPair(card1, card2) {
    // ... write your code here
    if (card1 === card2) {
      this.pairsClicked += 1
      this.pairsGuessed += 1
      return true
    } else {
      this.pairsClicked += 1
      return false
    }
  }

  checkIfFinished() {
    if(this.pairsGuessed === this.cards.length /2){
      return true
    }else{
      return false
    }
  }
}



// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
