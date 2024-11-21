const quizData = ["banana", "pear"]

const hangman = {
    fruits: ["banana", "watermelon", "pineapple", "blueberry", "rasberry", "strawberry"],
    sports: ["volleyball", "football", "tennis", "basketball", "soccer", "baseball"],
    phones: ["Iphone", "Samsung", "Nokia", "Xiomi", "Android", "Huawei"]
}



const el = document.querySelector(".hangman")

function onButtonClick() {
    let element = document.querySelector('#choose-category');
    element.classList.remove('hidden');

    const selectEl = document.querySelector('select')
    selectEl.addEventListener('click', e => {
        if (selectEl.value) {
           console.log(selectEl.value);
           hangman[selectEl.value]
           
           var arr =  ["banana", "watermelon", "pineapple", "blueberry", "rasberry", "strawberry"];
           let optionArray = options[optionValue];
           const randNr = Math.floor(Math.random() * optionArray.length)
           chosenWord = optionArray[randNr];
           chosenWord = chosenWord.toUpperCase();         
        }
     

    });
}
const button = document.querySelector('#new-game-button');
button.addEventListener('click', onButtonClick);

// queryselector <select>
// addeventlistere click
// hangman[select.value]
// randomiga võta listist asi

let optionArray = options[optionValue];
  //choose random word
  const randNr = Math.floor(Math.random() * optionArray.length)
  chosenWord = optionArray[randNr];
  chosenWord = chosenWord.toUpperCase();
