const form = document.querySelector("form");
const result = document.querySelector(".result");
const Client = document.getElementById("name");
const age = document.getElementById("age");

let Clienthealth = document.querySelectorAll(".health");
let goodHabits = document.querySelectorAll(".Good_Habits");
let badHabits = document.querySelectorAll(".bad_habits");

let ínsuranceScore = 0;

const calculateInsurance = (event) => {
  let clientName = Client.value;
  let clientAge = age.value;

  // calculator 
  if (clientAge == 18) {
    ínsuranceScore = 500;
  } else if (clientAge > 18 && clientAge <= 25) {
    ínsuranceScore = 500 + (500 * 10) / 100;
  } else if (clientAge >= 26 && clientAge <= 35) {
    ínsuranceScore = 500 + (500 * 30) / 100;
  } else if (clientAge >= 36 && clientAge <= 45) {
    ínsuranceScore = 500 + (500 * 60) / 100;
  } else if (clientAge >= 46 && clientAge <= 55) {
    ínsuranceScore = 500 + (500 * 100) / 100;
  } else if (clientAge >= 56 && clientAge <= 65) {
    ínsuranceScore = 500 + (500 * 150) / 100;
  } else if (clientAge >= 66) {
    ínsuranceScore = 500 + (500 * 210) / 100;
  }

  // a
  Clienthealth.forEach((health) => {
    if (health.checked && health.id === "Hypertension") {
      ínsuranceScore += ínsuranceScore / 100;
    } else if (health.checked && health.id === "Blood_sugar") {
      ínsuranceScore += ínsuranceScore / 100;
    } else if (health.checked && health.id === "Overweight") {
      ínsuranceScore += ínsuranceScore / 100;
    }
  });

  // b
  goodHabits.forEach((habit) => {
    if (habit.checked && habit.id === "exercise") {
      ínsuranceScore -= (ínsuranceScore * 5) / 100;
    } else if (habit.checked && habit.id === "walking") {
      ínsuranceScore -= (ínsuranceScore * 5) / 100;
    } else if (habit.checked && habit.id === "swimming") {
      ínsuranceScore -= (ínsuranceScore * 5) / 100;
    }
  });

  // c
  badHabits.forEach((badhabit) => {
    if (badhabit.checked && badhabit.id === "Smoking") {
      ínsuranceScore += (ínsuranceScore * 5) / 100;
    } else if (badhabit.checked && badhabit.id === "Alcohol") {
      ínsuranceScore += (ínsuranceScore * 5) / 100;
    } else if (badhabit.checked && badhabit.id === "Drugs") {
      ínsuranceScore += (ínsuranceScore * 5) / 100;
    }
  });


  result.innerHTML = 
  `<div class ="result_output">  <p> Client : <span> ${clientName} </span> </p> 
  Insurance result : <span> ${ínsuranceScore.toFixed(0)} </span>  </div>`;
  form.reset();
  event.preventDefault();
  
    // console.log(ínsuranceScore);

};

form.addEventListener("submit", calculateInsurance);