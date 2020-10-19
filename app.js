var userWins = 0;
var compWins = 0;
var userChoice;
var compChoice;
const txtuser = "user";
const txtcomp = "comp";
const statement_div = document.querySelector(".statement > p");
const userscore_span = document.getElementById("user_score");
const compscore_span = document.getElementById("comp_score");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

//Generates random computer input
function gencompNum() {
    const comp_choices = ["r", "p", "s"];
    var num = Math.floor((Math.random() *3));
    return( comp_choices[num]);
}
//***********************************

function converttoWord ( word ) {
    if (word === "r") {
         return "Rock";
    }else if (word === "p") {
         return "Paper";
    }else {
         return "Scissor";
    }
}
//******************************* */
//FUNCTION TO DECLARE RESULT
//******************************* */
function result(userChoice) {
    compChoice = gencompNum();
    var combine= userChoice + compChoice;
    switch(combine) {
        case("rr"): 
            console.log(combine);
            statement_div.innerHTML = "DRAW";
            document.getElementById(userChoice).classList.add("grayglow");
            setTimeout(() =>  document.getElementById(userChoice).classList.remove("grayglow"), 300);
            break;
        case("rp"): 
            console.log(combine);
            statement_div.innerHTML =  converttoWord(compChoice)+txtcomp.sub()+" beats "+converttoWord(userChoice)+txtuser.sub()+". YOU LOSE";
            compWins++;
            document.getElementById(userChoice).classList.add("redglow");
            setTimeout(function() {
                document.getElementById(userChoice).classList.remove("redglow")                
            }, 300); 
            break;
        case("rs"):
            console.log(combine);
            statement_div.innerHTML = converttoWord(userChoice)+txtuser.sub() +" beats "+ converttoWord(compChoice)+txtcomp.sub()+". YOU WIN!!!";
            userWins++;
            document.getElementById(userChoice).classList.add("greenglow");
            setTimeout(function() {
                document.getElementById(userChoice).classList.remove("greenglow")                
            }, 300); 
            break;
        case("pr"):  
            console.log(combine);
            statement_div.innerHTML = converttoWord(userChoice)+txtuser.sub() +" beats "+ converttoWord(compChoice)+txtcomp.sub()+". YOU WIN!!!";
            userWins++;
            document.getElementById(userChoice).classList.add("greenglow");
            setTimeout(function() {
                document.getElementById(userChoice).classList.remove("greenglow")                
            }, 300); 
            break;
        case("pp"):  
            console.log(combine);
            statement_div.innerHTML = "DRAW"
            document.getElementById(userChoice).classList.add("grayglow");
            setTimeout(() => document.getElementById(userChoice).classList.remove("grayglow"), 300);
            break;
        case("ps"):
            console.log(combine);
            statement_div.innerHTML = converttoWord(compChoice)+txtcomp.sub()+" beats "+converttoWord(userChoice)+txtuser.sub()+". YOU LOSE";
            compWins++;
            document.getElementById(userChoice).classList.add("redglow");
            setTimeout(function() {
                document.getElementById(userChoice).classList.remove("redglow")                
            }, 300); 
            break;
        case("sr"): 
            console.log(combine);
            statement_div.innerHTML = converttoWord(compChoice)+txtcomp.sub()+" beats "+converttoWord(userChoice)+txtuser.sub()+". YOU LOSE";
            compWins++;
            document.getElementById(userChoice).classList.add("redglow");
            setTimeout(function() {
                document.getElementById(userChoice).classList.remove("redglow")                
            }, 300); 
            break;
        case("sp"): 
            console.log(combine);
            statement_div.innerHTML = converttoWord(userChoice)+txtuser.sub() +" beats "+ converttoWord(compChoice)+txtcomp.sub()+". YOU WIN!!!";
            userWins++;
            document.getElementById(userChoice).classList.add("greenglow");
            setTimeout(function() {
                document.getElementById(userChoice).classList.remove("greenglow")                
            }, 300); 
            break;
        case("ss"): 
            console.log(combine);
            statement_div.innerHTML = "DRAW"
            document.getElementById(userChoice).classList.add("grayglow");
            setTimeout(() => document.getElementById(userChoice).classList.remove("grayglow"), 300);
            break;
    }
    userscore_span.innerHTML = userWins;
    compscore_span.innerHTML = compWins;
    
}
//************************************ */
//************************************ */

//MAIN FUNCTION*********
main();

function main() {
    
    rock_div.addEventListener('click', function() {
        userChoice = "r";
        result(userChoice) })
    paper_div.addEventListener('click', function() { 
        userChoice = "p"; 
        result(userChoice) })
    scissor_div.addEventListener('click', function() {
        userChoice = "s"; 
        result(userChoice) })
    
}
//************************************** */


//link to all explanations https://www.youtube.com/watch?v=jaVNP3nIAv0