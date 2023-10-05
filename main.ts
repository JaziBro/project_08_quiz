import inquirer from "inquirer"

let answers = await inquirer.prompt([
    {
        name: "question1",
        type: "list",
        choices: ["A) Mount Everest", "B) K2", "C) Mount Blanc", "D) Mount Fuji"],
        message: "Which of the following is the highest Mountain on Earth: "        
    },
    {
        name: "question2",
        type: "list",
        choices: ["A) Atlantic Ocean", "B) Inidan Ocean", "C) Pacific Ocean", "D) Southern Ocean "],
        message: "Which of the following is the largest Ocean on Earth: "        
    },
    {
        name: "question3",
        type: "list",
        choices: ["A) North", "B) why would it have smoke", "C) West", "D) none of the above "],
        message: "If an electric train is travelling towards North, where will its smoke travel?: "        
    },
    {
        name: "question4",
        type: "list",
        choices: ["A) Europe", "B) Asia", "C) Southern America", "D) Northern America "],
        message: "Which of the following is the largest Continent of Earth: "        
    },
    {
        name: "question5",
        type: "list",
        choices: ["A) 4th", "B) 2nd", "C) 3rd", "D) None of the above "],
        message: "You're 4th place right now in a race. What place will you be in when you pass the person in 3rd place?: "        
    },
    {
        name: "question6",
        type: "list",
        choices: ["A) Atlantic Ocean", "B) Inidan Ocean", "C) Pacific Ocean", "D) Southern Ocean "],
        message: "Which of the following is the largest Ocean on Earth: "        
    },
    {
        name: "question7",
        type: "list",
        choices: ["A) Atlantic Ocean", "B) Inidan Ocean", "C) Pacific Ocean", "D) Southern Ocean "],
        message: "Which of the following is the largest Ocean on Earth: "        
    },
    {
        name: "question8",
        type: "list",
        choices: ["A) Atlantic Ocean", "B) Inidan Ocean", "C) Pacific Ocean", "D) Southern Ocean "],
        message: "Which of the following is the largest Ocean on Earth: "        
    },
    {
        name: "question9",
        type: "list",
        choices: ["A) Atlantic Ocean", "B) Inidan Ocean", "C) Pacific Ocean", "D) Southern Ocean "],
        message: "Which of the following is the largest Ocean on Earth: "        
    },
    {
        name: "question10",
        type: "list",
        choices: ["A) Atlantic Ocean", "B) Inidan Ocean", "C) Pacific Ocean", "D) Southern Ocean "],
        message: "Which of the following is the largest Ocean on Earth: "        
    },
    
])
