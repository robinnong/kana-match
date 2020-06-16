import hiragana from './hiragana.js';
 
// const rows = document.getElementsByTagName("ul");
// console.log(rows) 

const flipCard = (e) => {

}

const loadChart = () => {
    hiragana.forEach(char => { 
        const node = document.createElement("li"); 
        const kanaText = document.createElement("span");
        kanaText.innerText = char.kana;
        const romajiText = document.createElement("span");
        romajiText.innerText = char.romaji;
        // node.addEventListener("click", flipCard, false);
        node.appendChild(kanaText);
        node.appendChild(romajiText);
        document.getElementById("hiraganaList").appendChild(node);
    });
} 

const init = () => { 
    loadChart();
}
// Define a convenience method and use it
const ready = (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
}

ready(() => {
    init();
});

