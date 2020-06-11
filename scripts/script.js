import hiragana from './hiragana.js';

const kana = hiragana.map(letter => letter.kana);

// const rows = document.getElementsByTagName("ul");
// console.log(rows) 

const flipCard = (e) => {
    console.log(e.target.innerText)  
}  

kana.forEach(row => {
    for (let i = 0; i < row.length; i++) {
        const node = document.createElement("li");
        const textnode = document.createTextNode(row[i]);
        node.addEventListener("click", flipCard, false);
        node.appendChild(textnode);
        document.getElementById("hiraganaList").appendChild(node);
    }
}); 
