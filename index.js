const cards = ["Guadalupe", "Ollie", "Aki"];
const string = "birthday";

function writeCards(cards, string) {
    let newArray = [];
    for (let i = 0; i < cards.length; i++) {
    newArray.push(`Thank you, ${cards[i]}, for the wonderful ${string} gift!`);
    debugger;
    }

return newArray;
}

writeCards(cards, string);

function countDown() {
    let countDown = 0;
    while (countDown < 11) {
        console.log(countDown++);
    }

return countDown;
}