// Variables - Getting the text to udpate
var questionLabel = document.getElementById('questionLabel');
var questionText = document.getElementById('questionText');
var optionA = document.getElementById('optionA');
var optionB = document.getElementById('optionB');
var optionC = document.getElementById('optionC');
var optionD = document.getElementById('optionD');
var questionImage = document.getElementById('questionImage');

// Game objects
var scoreLabel = document.querySelector('.scoreLabel');

// Game variables
var score = 0;
var selectedPoints = 0;

// Show questions
function showQuestion(e){
	getQuestionData(e);
	// Open modal
	$('#questionModal').modal();
	disableButton(event.target);
}

// Generate question data
function getQuestionData(e){
	var question = questions["question" + e]
	// Update question
	questionLabel.innerHTML = question.questionLabel
	questionText.innerHTML = question.questionText;
	// Update answers
	optionA.innerHTML = question.optionA.responseText;
	optionB.innerHTML = question.optionB.responseText;
	optionC.innerHTML = question.optionC.responseText;
	optionD.innerHTML = question.optionD.responseText;
	// Update correct
	updateCurrentCorrect(
		question.optionA.correctResponse,
		question.optionB.correctResponse,
		question.optionC.correctResponse,
		question.optionD.correctResponse);
	// Update current selected points
	selectedPoints = event.target.innerHTML;
}

// Add correct label for question
function updateCurrentCorrect(a, b, c, d){
	a && optionA.classList.add('correct') ||
	b && optionB.classList.add('correct') ||
	c && optionC.classList.add('correct') ||
	d && optionD.classList.add('correct')
}

// Disable the button after selected
function disableButton(e){
	e.style.cursor = 'auto';
	e.classList.remove('gamePiece');
	e.classList.add('gamePieceAnswered');
	e.onclick = '';
}

// Check question answer
function submitQuestion(){
	if (event.target.classList.contains('correct')) {
		alert('Esta CERTO!');
		updateScore(parseInt(selectedPoints));
	} else{
		alert('Esta ERRADO!!');
	}
	$('#questionModal').modal('hide');
}

// Update score
function updateScore(e){
	score = score + e;
	scoreLabel.innerHTML = "Pontos: " + score;
}

// Remove all correct labels
$("#questionModal").on("hidden.bs.modal", function () {
    optionA.classList.remove('correct');
    optionB.classList.remove('correct');
    optionC.classList.remove('correct');
    optionD.classList.remove('correct');
});

// Show leaderboard
function showLeaderBoard(){
	$('#leaderBoard').modal('show');
}
