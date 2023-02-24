 const words=["application","programming","interface"];
 const selectedWord = words[Math.floor(Math.random()*words.length)];
 console.log("seleceteed word",selectedWord);
 const wrongLetters=document.getElementsByClassName("wrong-letters")


window.addEventListener("keydown", (e) =>{
    
 if(e.keyCode >= 65 && e.keyCode <=90){

    const letter = e.key.toLocaleLowerCase()
    console.log("letter",letter);
    wrongLetters[0].innerHTML= `${wrongLetters[0].innerHTML} , ${letter}`;
 }
   
});

