//This function contains the answers for each question
function checkResult() {
    var add = 0;
    answer1 = document.getElementById("op2");
    answer2 = document.getElementById("op5");
    answer3 = document.getElementById("op10");
    answer4 = document.getElementById("op14");
    answer5 = document.getElementById("op18");

//Checked is a property in js in which tells if the radio button is checked.
//The if stmts checks if the correct answers are selected it should increase variable add by 1. In the end it should be a total of 5 points
//answe1
if (answer1.checked == true) {
    add ++;
}
//answer2
if (answer2.checked == true) {
    add ++;
}
//answer3
if (answer3.checked == true) {
    add ++;
}
//answer4
if (answer4.checked == true) {
    add ++;
}
//answer5
if (answer5.checked == true) {
    add ++;
}
 document.getElementById("score").innerHTML = "Score:" +" "+ add;

}

