import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

let userSelectedChoice;
let computerSelectedChoice;

function userChoiceClicked(e) {
  userSelectedChoice = e.currentTarget.id;
  //console.log(e.currentTarget);
  gameLogic();
}

function genrateComputerChoiceRandomly() {
  let choiceArray = ["stone", "paper", "scissors"];
  return choiceArray[Math.floor(Math.random() * choiceArray.length)];
}

function gameLogic() {
  computerSelectedChoice = genrateComputerChoiceRandomly();
  console.log(userSelectedChoice + "-" + computerSelectedChoice);
  switch (userSelectedChoice + "-" + computerSelectedChoice) {
    case "stone-scissors":
    case "paper-stone":
    case "scissors-paper":
      console.log(document.querySelector(".resultMsg").innerHtml);
      document.querySelector(".userScore").innerHTML =
        1 + Number(document.querySelector(".userScore").innerHTML);
      document.querySelector(".resultMsg").innerHTML = "User Wins";
      break;
    case "scissors-stone":
    case "stone-paper":
    case "paper-scissors":
      console.log(document.querySelector(".resultMsg").innerHtml);
      document.querySelector(".compScore").innerHTML =
        1 + Number(document.querySelector(".compScore").innerHTML);
      document.querySelector(".resultMsg").innerHTML = "Computer Wins";
      break;
    case "scissors-scissors":
    case "stone-stone":
    case "paper-paper":
      document.querySelector(".resultMsg").innerHTML = "DRAW";
      break;
  }
}

function App() {
  return (
    <>
      <div className="header">Hello</div>
      <div className="body">
        <div className="score">
          <span className="badge" id="userLabel">
            user
          </span>
          <span className="badge" id="computerLabel">
            computer
          </span>
          <span className="userScore">0</span>:
          <span className="compScore">0</span>
        </div>
        <div className="resultMsg">Stone beats Scissor, you wins!</div>
        <div className="choices">
          <span className="choice" id="stone" onClick={userChoiceClicked}>
            <img src="http://hannahch.com/images/rock.svg" alt="rock-img" />
          </span>
          <span className="choice" id="paper" onClick={userChoiceClicked}>
            <img src="http://hannahch.com/images/paper.svg" alt="paper-img" />
          </span>
          <span className="choice" id="scissors" onClick={userChoiceClicked}>
            <img
              src="http://hannahch.com/images/scissors.svg"
              alt="scissor-img"
            />
          </span>
        </div>
      </div>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
