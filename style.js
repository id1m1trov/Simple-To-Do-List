/*
function digitalClock() {

    var date = new Date();

    var hours = date.getHours() + '';
    var minutes = date.getMinutes() + '';
    var secundes = date.getSeconds() + '';
    var day = date.getDay();

    var weekDay = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    // adding 0 befor the digit is less than 2 
    if (hours.length < 2) {
        hours = '0' + hours;
    }
    if (minutes.length < 2) {
        minutes = '0' + minutes;
    }
    if (secundes.length < 2) {
        secundes = '0' + secundes;
    }

    document.querySelector("h1").innerHTML = weekDay[day] + " " + hours + ":" + minutes + ":" + secundes;


}
setInterval(digitalClock, 1000);


var students = [
    {
        name: 'John',
        score1: 50,
        score2: 46,
    },
    {
        name: 'Bob',
        score1: 23,
        score2: 24,
    },
    {
        name: 'Nick',
        score1: 40,
        score2: 36,
    },
    {
        name: 'Alex',
        score1: 44,
        score2: 45,
    }
];

var degree = ['A','B','C','D','E','F'];
var score = [91, 81, 71, 61, 51];


function sumScore(score1, score2) {
    var sum = score1 + score2;
    return sum;
}

function finalCalc() {
    var total = 0;
    for (var i = 0; i < students.length; i++){

        students[i].sum = sumScore(students[i].score1, students[i].score2);
        total = students[i].sum;
        
        if(total > 51){

            console.log(students[i].name + " passed final exam successfully");   

            for (var j = 0; j < score.length; j++) {
                if(total > score[j]){
                console.log("He got "+ total + " points and he got diploma with degree " + degree[j]);
                console.log("-------------------------");
                break;
                }
            }
        } else {
            console.log(students[i].name + " got " + total + " points, he faild and has to try nex year");
                console.log("-------------------------");
        }
            
    }
    console.log(students);
}
*/
// function totalScore() {

//     // crolling try all students
//     for (var i = 0; i < students.length; i++) {

//         // calculating the total score
//         total = students[i].score1 + students[i].score2;

//         //crolling try 
//         for (var j = 0; j < degreeLimit.length; j++) {

//             if (total >= degreeLimit[0][1]) {

//                 console.log(students[i].name + " passed final exam successfully: \n He has " +
//                     total + " and he got diploma with degree " + degreeLimit[0][0]);

//             } else if (total >= degreeLimit[1][1]) {

//                 console.log(students[i].name + " passed final exam successfully: \n He has " +
//                     total + " and he got diploma with degree " + degreeLimit[1][0]);

//             } else if (total >= degreeLimit[2][1]) {

//                 console.log(students[i].name + " passed final exam successfully: \n He has " +
//                     total + " and he got diploma with degree " + degreeLimit[2][0]);

//             } else if (total >= degreeLimit[3][1]) {

//                 console.log(students[i].name + " passed final exam successfully: \n He has " +
//                     total + " and he got diploma with degree " + degreeLimit[3][0]);

//             } else if (total >= degreeLimit[4][1]) {

//                 console.log(students[i].name + " passed final exam successfully: \n He has " +
//                     total + " and he got diploma with degree " + degreeLimit[4][0]);

//             } else {
//                 console.log(students[i].name + " got " + total + " points, has has " + degreeLimit[5][0] + " and he has to try next year");
//             }

//         }
//             console.log("---------------------------------------------");
//     }
// }

//finalCalc();

// const ARR = [];

// for(var i = 0 ; i < 10; i++) {
//     var randNum = Math.floor(Math.random() * 100);
//     ARR.push(randNum);
// }
// ARR.sort();
// console.log(ARR);

// const NEWaRR = ARR.map( l => l+10).filter( l => l > 50).sort();
// console.log(NEWaRR);

// var arr = {
//     numbers: [],
//     addNumbers: function(amount){
//         for(var i=0; i < amount; i++){
//             var num= Math.floor(Math.random() * 100);
//             arr.numbers.push(num);
//         }
//     },
//     addToNumers: function(number) {
//         if(number < 100) {
//             arr.forEach(element => {
//                 element = element + number;
//             });
//         } else {
//             console.log("Numbe is more than 100, please add number smaller than 100");
//         } 
//     }
// };


// var noteText = document.querySelector("#add-input");

var noteList = document.querySelector("ul#list");
var addBtn = document.getElementById("add-btn");
var noteText = document.getElementById("add-input");

var noteCount = ['First', 'Second', 'Third', 'Forth', 'Fifth', 'Sixth', 'Seventh', 'Eight', 'Ninth', 'Tenth'];
var numberOfNotes = 0;

// proba
// var items = noteList.childNodes;
var listArr = [];


addBtn.addEventListener('click', function (e) {
    e.preventDefault();


    //chek if the input value is empty
    if (noteText.value !== '') {

        //initialize the elemets
        var note = document.createElement("li"),
            checkBullet = document.createElement("input"),
            firstPar = document.createElement("p"),
            secondPar = document.createElement("p"),
            editIcon = document.createElement("i"),
            delIcon = document.createElement("i"),
            input = document.createElement("input");


        //adding classes to the elements
        checkBullet.setAttribute("type", "checkbox");
        checkBullet.className = "check-bullet";
        firstPar.className = "note-label";
        secondPar.className = "note-icons";
        editIcon.className = "fa fa-edit";
        delIcon.className = "fa fa-times";
        input.className = "edit-note";
        input.setAttribute("type", "text");
        input.setAttribute("disabled", "disabled")
        input.setAttribute("value", noteText.value);


        //adding numbers on the labels
        (numberOfNotes < 10) ? firstPar.textContent = noteCount[numberOfNotes] + ' Note': firstPar.textContent = (numberOfNotes + 1) + '-th Note';

        //show the "hide/show btn"
        if (numberOfNotes >= 0) {
            var hideBtn = document.getElementById("hide-label");
            hideBtn.style.visibility = "visible";
        }

        //adding elements to the DOM
        secondPar.appendChild(editIcon);
        secondPar.appendChild(delIcon);
        note.appendChild(checkBullet);
        note.appendChild(firstPar);
        note.appendChild(secondPar);
        note.appendChild(input);
        noteList.appendChild(note);

        //reseting the value of the input 
        noteText.value = "";
        noteText.focus();
    } else {
        alert("You need to add text first");
    }

    //adding to te count of notes
    numberOfNotes++;

    listArr.push(note);



    //**************************************** loop for finding witch note is active 
    for (var j = 0; j < listArr.length; j++) {


        //***************** DONE NOTE (CHECKED)
        var checkBtn = listArr[j].firstChild;

        checkBtn.onclick = function () {
            if (this.checked) {
                this.parentElement.childNodes[3].style.textDecoration = "line-through";
                this.parentElement.childNodes[1].classList.add("done-note");
            } else {
                //this.input.style.textDecoration = "none";
                this.parentElement.childNodes[3].style.textDecoration = "none";
                this.parentElement.childNodes[1].classList.remove("done-note");
            }
        }

        //***************** DELETE NOTE BUTTON

        var delBtn = listArr[j].childNodes[2].childNodes[1];
        delBtn.onclick = function () {
            this.parentElement.parentElement.style.borderLeftColor = "red";
            this.parentElement.parentElement.style.borderBottomColor = "red";

            //setting delay for coloring the border in red first, otherwise its showing the confirm dialog first
            var those = this;
            setTimeout(b, 300);

            function b() {
                if (confirm("Delete the \"" + those.parentElement.parentElement.childNodes[1].textContent + "\" note")) {
                    //those.parentElement.parentElement.style.display = "none";
                    those.parentElement.parentElement.classList.add("del-note");
                    setTimeout(t => those.parentElement.parentElement.style.display = "none", 500);
                    noteList.removeChild(those.parentElement.parentElement);
                } else {
                    those.parentElement.parentElement.style.borderLeftColor = "#eee";
                    those.parentElement.parentElement.style.borderBottomColor = "#eee";

                }
            };
        }

        //************** EDIT BUTTON
        var editBtn = listArr[j].childNodes[2].childNodes[0];
        editBtn.onclick = function () {

            var those = this;

            var input = (this.parentElement.parentElement).lastChild;
            input.toggleAttribute("disabled");

            if (input.hasAttribute("disabled")) {
                this.classList.remove("pusle");
                input.classList.remove("edit-in-proc");
                those.parentElement.parentElement.childNodes[1].classList.remove("note-label-edit");
                those.parentElement.parentElement.childNodes[1].classList.add("note-saved");
                setTimeout(function () {
                    those.parentElement.parentElement.childNodes[1].classList.remove("note-saved")
                }, 2000);


            } else {
                this.classList.add("pusle");
                input.classList.add("edit-in-proc");
                those.parentElement.parentElement.childNodes[1].classList.add("note-label-edit");
                input.focus();
            }
        }
    }
});


//******************************* HIDE/SHOW ALL NOTES


var hideBtn = document.getElementById("hide-btn"); // btn for hiding all notes



hideBtn.addEventListener('click', function () {
    var label = document.getElementById("hide-label");

    if (hideBtn.checked) {
        noteList.style.display = "none";
        label.textContent = "Show Notes";
    } else {
        noteList.style.display = "block";
        label.textContent = "Hide Notes";

    }
});


//******************************* HIDE/SHOW ONLY THE DONE NOTES

var hideDoneLabel = document.getElementById("label-done"); // variable for done label
var hideDoneBtn = document.getElementById("hide-chk-btn"); // btn for hiding only the DONE notes 

hideDoneLabel.addEventListener('click', function () {
    for (var i = 0; i < noteList.children.length; i++) {
        if (hideDoneBtn.checked) {
            if (noteList.children[i].firstChild.checked) {
                noteList.children[i].style.display = "none";
                hideDoneLabel.textContent = "Show Done Notes";
            }
        } else {
            if (noteList.children[i].firstChild.checked) {
                noteList.children[i].style.display = "flex";
                hideDoneLabel.textContent = "Hide Done Notes";
            }
        }
    }
});


//************************ SEARCH

var searchField = document.getElementById("search-text");

searchField.addEventListener('keyup', function(e){

    var surchChar = e.target.value.toUpperCase();
    
    var notes = document.querySelectorAll("ul li");

    Array.from(notes).forEach(function(note){
        var noteText = note.childNodes[3].value.toUpperCase();

        if(noteText.indexOf(surchChar) !== -1) {
            note.style.display = "flex";
        } else {
            note.style.display = "none";
        }
    });

    
});