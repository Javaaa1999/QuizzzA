function Quiz (questions) {
	this.score = 0; 
	this.questions = questions;
	this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function () {
	return this.questions[this.questionIndex]
}

Quiz.prototype.isEnded = function() {
	return this.questions.length === this.questionIndex;
}

Quiz.prototype.guess = function(answer) {

	if (this.getQuestionIndex().correctAnswer(answer)) {
		this.score++;
	}

	this.questionIndex++;
}






function Question (text, choices, answer) {
	this.text = text;
	this.choices = choices;
	this.answer = answer;
}

Question.prototype.correctAnswer = function(choice) {
	return choice === this.answer;
}






function populate() {
	if (quiz.isEnded()) {
		showScores();
	} else {
		var element = document.getElementById('question');
		element.innerHTML = quiz.getQuestionIndex().text;

		//show choices
		var choices = quiz.getQuestionIndex().choices;
		for (var i = 0; i < choices.length; i++) {
			var element = document.getElementById('choice' + i);
			element.innerHTML = choices[i];

			guess("btn" + i, choices[i]);
		}

		showProgress();
	}
}


function guess(id, guess) {
	var button = document.getElementById(id);
	button.onclick = function() {
		quiz.guess(guess);
		populate();
	}
}


function showProgress() {
	var currentQuestionNumber = quiz.questionIndex + 1;
	var element = document.getElementById('progress');
	element.innerHTML = "Questions " + currentQuestionNumber + " of " + quiz.questions.length;
}


function showScores() {
	var gameOverHTML = "<h1>Result</h1>";
	gameOverHTML += "<h2 id='score'> Your Scores: " + quiz.score + "</h2>";
	var element = document.getElementById('quiz');
	element.innerHTML = gameOverHTML;
}


var questions = [
	new Question("What does HTTP stand for?", ["HyperText Transfer Package", "HyphenationText Test Program", "HyperText Transfer Protocol", "None of the above"], "HyperText Transfer Protocol"),
	new Question("What ia rgw full form of TCP/IP?", ["Telephone Call Protocol/International Protocol", "Transport Control Protocol/Internet Protocol", "Transmission Control Protocol/Internet Protocol", "None of the above"], "Transmission Control Protocol/Internet Protocol"),
	new Question("What does HTML stand for?", ["HyperText Markup Language", "Hyper Text Marking Language", "High-level Text Manipulation Language", "Home Tool Markup Language"], "HyperText Markup Language"),
	new Question("Which of the following is not a programming language?", [" Java", "HTML", "Python", "CSS"], "CSS"),
	new Question("What does API stand for?", [" Application Programming Interface", "Application Program Integration", "Automated Program Interface", "Advanced Program Invocation"], "Application Programming Interface"), 
	new Question("What does IDE stand for?", ["Integrated Development Environment", " Integrated Design Environment", "Interactive Development Environment", "Intelligent Design Environment"], "Integrated Development Environment"),
	new Question("Which programming language is often used for web development?", ["Java", "Python", "HTML", "C#"], "HTML"),
	new Question("What does SQL stand for?", ["Simple Query Language", "Structured Query Language", "Standard Query Language", "Sequential Query Language"], "Structured Query Language"),
	new Question("Which of the following is a dynamically-typed programming language?", ["C#", "C++", "Java", "Python"], "Python"),
	new Question("Which of the following is not an example of a database management system?", ["MongoDB", "PostgreSQL", "Apache", "MySQL"], "Apache"),
];

var quiz = new Quiz (questions);

populate();