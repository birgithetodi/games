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
}
const button = document.querySelector('button');
button.addEventListener('click', onButtonClick);
