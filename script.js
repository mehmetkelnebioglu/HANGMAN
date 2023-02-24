 const words=["application","programming","interface"];
 const selectedWord = words[Math.floor(Math.random()*words.length)];
const  corretLetters=document.getElementById('word');
 const wrongLetters=document.getElementById("wrong-letters");

 const corretLetterss= [];
 const wrongLetterss=[];



window.addEventListener("keydown", (e) =>{
    
 if(e.keyCode >= 65 && e.keyCode <=90){

    const letter = e.key.toLocaleLowerCase()

    if(selectedWord.includes(letter)){
        corretLetterss.push(letter)
        corretLetters.innerHTML += letter+ ","
    }else{
        wrongLetterss.push(letter);
        updateWrongLetters();
    }
    
   }
});

function updateWrongLetters(){
    console.log("updateWrongLetters")
    wrongLetters.innerHTML = `${wrongLetters.map((letter)=>letter)}`;

}





