const cards = [
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "batman", img: "batman.jpg" },
  { name: "captain america", img: "captain-america.jpg" },
  { name: "fantastic four", img: "fantastic-four.jpg" },
  { name: "flash", img: "flash.jpg" },
  { name: "green arrow", img: "green-arrow.jpg" },
  { name: "green lantern", img: "green-lantern.jpg" },
  { name: "ironman", img: "ironman.jpg" },
  { name: "spiderman", img: "spiderman.jpg" },
  { name: "superman", img: "superman.jpg" },
  { name: "the avengers", img: "the-avengers.jpg" },
  { name: "thor", img: "thor.jpg" },
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "batman", img: "batman.jpg" },
  { name: "captain america", img: "captain-america.jpg" },
  { name: "fantastic four", img: "fantastic-four.jpg" },
  { name: "flash", img: "flash.jpg" },
  { name: "green arrow", img: "green-arrow.jpg" },
  { name: "green lantern", img: "green-lantern.jpg" },
  { name: "ironman", img: "ironman.jpg" },
  { name: "spiderman", img: "spiderman.jpg" },
  { name: "superman", img: "superman.jpg" },
  { name: "the avengers", img: "the-avengers.jpg" },
  { name: "thor", img: "thor.jpg" },
];
const memoryGame = new MemoryGame(cards);
window.addEventListener("load", (event) => {
  let html = "";
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });
  // Add all the divs to the HTML
  document.querySelector("#memory-board").innerHTML = html;
  // Bind the click event of each element to a function
  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", function pickCard() {
      if (memoryGame.pickedCards.length < 2) {
        memoryGame.pickedCards.push(card);
        card.classList.toggle("turned");
      }
      if (memoryGame.pickedCards.length === 2) {
        const card1 = memoryGame.pickedCards[0].getAttribute("data-card-name");
        const card2 = memoryGame.pickedCards[1].getAttribute("data-card-name");
        const result = memoryGame.checkIfPair(card1, card2);
        card.removeEventListener("click", function pickCard() { });
        console.log(memoryGame.pickedCards);
        if (result === false) {
          /* setTimeout(() => {
          card.classList.toggle("turned");
         }, 1000) */
        } else {
          const gameEnd = memoryGame.checkIfFinished();
          if (gameEnd === false) {
            memoryGame.pairsGuessed++;
          }
        }
        memoryGame.pickedCards.splice(0, 2);
        console.log(result);
      }
      // TODO: write some code here
      // let hasTurned = card.classList.contains("turned")
      console.log(`Card clicked: ${card}`);
    });
  });
});
//if they're pair, remain flipped, checkifFinished, disable click
//if they're not pair, flip them back (setTimeout to flip)
//empty the pickedCardsArray