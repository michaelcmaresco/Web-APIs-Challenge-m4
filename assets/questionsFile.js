var timeElement = document.querySelector("#time");
var wrapperElement = document.querySelector(".wrapper");
var btnElement = document.querySelector("#start");
var divContEL = document.querySelector(".divContainer");
var hElement = document.querySelector("#title");
var oderListEl = document.querySelector("#q-list");
var finishDiv = document.querySelector(".finish-section");
var finalScore = document.querySelector("#result");
var errMsg = document.querySelector("#errorSmg");
var initialInput = document.querySelector("#inputInitial").value;
var submitEl = document.querySelector(".btn btn-primary mb-2");
var responsDiv = document.querySelector("#response");
var finaPageEl = document.querySelector(".final-page");
var initialAndScore = document.querySelector("#staticEmail");
var firstPageEl = document.querySelector(".first-page");


// The array of questions
var questions = [
    {
        title: "Commonly used data types DO not include:",
        choices: ["Strings", "Booleans", "Alerts", "Numbers"],
        answer: "alerts",
      },
      {
        title: "The condition in an if/else statemet is enclosed with _______",
        choices: ["Quotes", "Curly Brackets",  "Parenthesis", "Square Brackets"],
        answer: "Parenthesis",
      },
      {
        title: "Arrays in JavaScript can be used to store:",
        choices: ["Numbers and Strings", "Other arrays", "booleans", "all of the above"],
        answer:"all of the above",
      },
      {
        title: "String values must be enclosed within _______ when being assigned to variables",
        choices: ["Commas", "Curly Brackets", "Quotes", "Parenthesis"],
        answer: "~parenthesis",
      },
      {
        title: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["JavaScript", "Termonal/bash", "for loops", "Console.log"],
        answer: "for loops",
      }
    ]


    // relating to newer questions 
function displayQuestions() {
    var holdQ1Title = questions[i].title
    hElement.textContent = holdQ1Title
    var holdq1Choice1 = questions[i].choices[0];
    var holdq1Choice2 = questions[i].choices[1];
    var holdq1Choice3 = questions[i].choices[2];
    var holdq1Choice4 = questions[i].choices[3];

    oderListEl.innerHTML = '';

    var liTag1 = document.createElement("li");
    liTag1.setAttribute("class", "all_li")
    var btn = document.createElement('button');
    btn.setAttribute("class", "all_btn")
    btn.textContent = holdq1Choice1;
    liTag1.appendChild(btn)
    oderListEl.appendChild(liTag1);
    divContEL.appendChild(oderListEl);

    var liTag2 = document.createElement("li");
    liTag2.setAttribute("class", "all_li");
    var btn2 = document.createElement('button');
    btn2.setAttribute("class", "all_btn")
    btn2.textContent = holdq1Choice2;
    liTag2.appendChild(btn2)
    oderListEl.appendChild(liTag2)
    divContEL.appendChild(oderListEl);

    var liTag3 = document.createElement("li");
    liTag3.setAttribute("class", "all_li")
    var btn3 = document.createElement('button');
    btn3.setAttribute("class", "all_btn")
    btn3.textContent = holdq1Choice3;
    liTag3.appendChild(btn3)
    oderListEl.appendChild(liTag3)
    divContEL.appendChild(oderListEl);

    var liTag4 = document.createElement("li");
    liTag4.setAttribute("class", "all_li")
    var btn4 = document.createElement('button');
    btn4.setAttribute("class", "all_btn");
    btn4.textContent = holdq1Choice4;
    liTag4.appendChild(btn4);
    oderListEl.appendChild(liTag4);
    divContEL.appendChild(oderListEl);
    var allBtnEl = document.querySelectorAll(".all_btn")
    allBtnEl.forEach(function (event) {
        event.addEventListener("click", onclickHandler)
    });

}