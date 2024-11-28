const quizData = ["banana", "pear"]

const url = "https://kool.krister.ee/chat/MBtheGoat";

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
            let optionArray = hangman[selectEl.value]
            const randNr = Math.floor(Math.random() * optionArray.length)
            chosenWord = optionArray[randNr];
            chosenWord = chosenWord.toUpperCase();
            console.log("chosenWord", chosenWord)

            const wordContainer = document.querySelector("#guess-word-container");
            wordContainer.innerHTML = chosenWord;
           
        }
    });
}

const button = document.querySelector('#new-game-button');
button.addEventListener('click', onButtonClick);

//id määrates on #
//classi määrates on .