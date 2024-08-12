// create array
let data = [
    {
        Q: "A flashing red traffic light signifies that a driver should do what?",
        A: "stop",
        B: "speed up",
        C: "proceed with caution",
        D: "honk the horn",
        answer: "ans1"
      }, {
       Q: "A knish is traditionally stuffed with what filling?",
        A: "potato",
        B: "creamed corn",
        C: "lemon custard",
        D: "raspberry jelly",
        "answer": "ans1"
      }, {
        Q: "A pita is a type of what?",
        A: "fresh fruit",
        B: "flat bread",
        C: "French tart",
        D: "friend bean dip",
        "answer": "ans2"
      }, {
        Q: "A portrait that comically exaggerates a person's physical traits is called a what?",
        A: "landscape",
        B: "caricature",
        C: "still life",
        D: "Impressionism",
        "answer": "ans2"
      },
]
// create varriable
let num = 0
let score =0;
// get id
let question = document.getElementById("qns");
let myScore = document.querySelector(" .myScore");
let nextBtn = document.getElementById("next");
let currentQ = document.getElementById("currentQ");
let totalQuestions = document.getElementById("totalQuestions");
// show questions
question.innerHTML = data[num].Q;
// get options id
 let option1 = document.getElementById("opt1");
 let option2 = document.getElementById("opt2");
 let option3 = document.getElementById("opt3");
 let option4 = document.getElementById("opt4");
// display options
 option1.innerHTML = data[num].A;
 option2.innerHTML = data[num].B;
 option3.innerHTML = data[num].C;
 option4.innerHTML = data[num].D;
// get all input using class 
 let anwser = document.querySelectorAll(".options");

 var Questiontime = document.getElementById("Qtime");
 var timeleft = 60;
 var interval;
 function timer(){
 if(timeleft <= 0){
   clearInterval(timer);
   document.getElementById("Qtime").innerHTML = "Finished";
 } else {
   document.getElementById("Qtime").innerHTML = timeleft + " seconds remaining";
 }
 timeleft -= 1;
}interval = setInterval(timer,1000);

// current Question and question length
  function questionShow(){
    currentQ.innerHTML = num+"/";
    totalQuestions.innerHTML = data.length;
    
  }
    questionShow();

    // check ans
 function checkAns(){
    let ans;
    // go everyElemnt
    anwser.forEach(curElement => {
      // current elemnet check
    if(curElement.checked){
      // currentElement save id
        ans = curElement.id;
    }    
    });
    return ans;
 }
  // option disselect when user came next Question
 function disSelect(){
  anwser.forEach(curElement=>{
    curElement.checked=false;
  })
 }
 function next(){
    let checkedAns = checkAns();
    if(checkedAns==data[num].answer){
        score++;
    }   
    num++;
    timer();
    questionShow();
    disSelect();

    if(num < data.length){
    question.innerHTML  = data[num].Q;
    option1.innerHTML = data[num].A;
    option2.innerHTML = data[num].B;
    option3.innerHTML = data[num].C;
    option4.innerHTML = data[num].D;

 }else{
    myScore.innerHTML = `Your Scored ${score}/${data.length}<br><br>
    <button onclick="location.reload()">Play Again</button>`
    nextBtn.style.display="none";
 }
}
 

