// you can write js here

const content = document.getElementById('input');
const btn = document.getElementById('vowel-btn');
const voyelles = document.getElementById('vowel-title');

let input = "";
const vowels = ["a", "e", "i", "o", "u", "y"];

let resultArray = [];
let vowelsArray = [];

btn.addEventListener('click', function(){
    voyelles.textContent = "";
    vowelsArray = [];
    resultArray = [];
    input = content.value;
    for (let i = 0; i < input.length ; i++){
        resultArray.push(input[i])
    }


    resultArray.forEach((result) => {
        for (let i = 0; i < vowels.length ; i++){
            let letter = vowels[i].indexOf(result);
            if (letter !== -1){
                vowelsArray.push(result)
            }
        }
    })
    
    voyelles.textContent = vowelsArray.join(" / ").toUpperCase();
})

