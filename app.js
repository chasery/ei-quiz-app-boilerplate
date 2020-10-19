/**
 * Example store structure
 */
const store = {
	// 5 or more questions are required
	questions: [
		{
			question: 'Which country did Halloween originate in?',
			answers: [
			'Mexico',
			'Ireland',
			'Romania',
			'Egypt'
			],
			correctAnswer: 'Ireland'
		},
		{
			question: 'What is the color order of a piece of candy corn from base to point?',
			answers: [
			'Orange (base), Yellow (middle), White (point)',
			'Green (base), Yellow (middle), White (point)',
			'Yellow (base), White (middle), Orange (point)',
			'White (base), Orange (middle), Yellow (point)'
			],
			correctAnswer: 'Yellow (base), White (middle), Orange (point)'
		},
		{
			question: 'How many people were hung during the Salem Witch Trials?',
			answers: [
			'13',
			'19',
			'25',
			'32'
			],
			correctAnswer: '19'
		},
		{
			question: 'Who wrote the classic novel ‘Dracula?’',
			answers: [
			'Mary Shelly',
			'Edgar Allen Poe',
			'H.P. Lovecraft',
			'Bram Stoker'
			],
			correctAnswer: 'Bram Stoker'
		},
		{
			question: 'Which horror movie icon has the highest on-screen body count?',
			answers: [
			'Jason Vorhees - Friday the 13th series',
			'Freddy Krueger - A Nightmare on Elm Street series',
			'Michael Myers - Halloween series',
			'Leatherface - The Texas Chainsaw Massacre series'
			],
			correctAnswer: 'Jason Vorhees - Friday the 13th series'
		}
	],
	quizStarted: false,
	questionNumber: 0,
	score: 0
};

/**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material and access support for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 * 
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates
function generateStartView(store) {
	// A function for generating the quiz start view
	const quizLength = store.questions.length;

	return `
		<div class="start">
			<div class="start__content">
				<p>Test your knowledge of Halloween with this ${quizLength} question quiz!</p>
				<button class="startQuiz button">Begin</button>
			</div>
		</div>
	`;
}

function generateAnswerElement(answer, index) {
	// A function to create an answer element ofr our multiple select
	return `
		<li class="answer">
			<label for="answer${index}">${answer}</label>
			<input type="radio" id="answer${index}" tabindex="${index}" name="answers" value="${answer}">
		</li>
	`;
}
function generateQuestionView(store) {
	// This function grabs the current question and returns that information to display in the view template
	// Variables for handling the various dynamic state content of our question view
	const {questions, questionNumber, score} = store;
	const currentQuestion = questions[questionNumber];
	const currentQuestionNumber = questionNumber + 1;
	const quizLength = questions.length;
	// Build out our list of answers
	let answerList = currentQuestion.answers.map((answer, index) => generateAnswerElement(answer, index)).join("");
	return `
		<form class="question">
			<div class="question__card">
				<h3 class="question__number">Question ${currentQuestionNumber} / ${quizLength}</h3>
				<h2 class="question__text">${currentQuestion.question}</h2>
				<ul>
					${answerList}
				</ul>
			</div>
			<footer class="footer">
				<p class="footer__score">Correct Answers: <strong class="footer__count">${score} / ${quizLength}</strong></p>
				<button class="footer__control" disabled>Submit</button>
			</footer>
		</form>
	`;
}
function generateCompleteView() {
	// A function for generating the quiz completion view
	console.log('`generateCompleteView` ran');
}

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store
function renderCurrentView() {
	// Initialize a state variable to pass in
	let currentView = "";
	// Evaluate whether the quiz is started or not and that we aren't on the final question
	if (store.quizStarted && store.questionNumber < store.questions.length) {
		// This will handle the true state and do some evaluation of what we need to render
		currentView = generateQuestionView(store);
	} else {
		// Set our current view to our Quiz Start template if quiz not started
		currentView = generateStartView(store);
	};
	$('.main').html(currentView);
}

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)
function toggleQuizStartedState() {
	// A function for toggling the started state of the quiz app in our store object
	store.quizStarted = !store.quizStarted;
}
function handleStartQuizClick() {
	// Handle the click event of our start quiz button
	$('.startQuiz').on('click', function(){
		// Set the state of our quizStarted to true
		toggleQuizStartedState();
		// Render our first question
		renderCurrentView();
	});
}
function handleAnswerSubmit() {
	// A function to handle the submission of an answer
	console.log('`handleAnswerSubmit` ran');
}
function handleNextQuestionClick() {
	// A function to handle the next question click
	console.log('`handleNextQuestionClick` ran');
}
function handleRetryQuizClick() {
	// A function to handle the retry quiz click
	console.log('`handleRetryQuizClick` ran');
}
function handleInitialLoad() {
	// A function to initalize our app
	
	// Testing stubbed out functions
	renderCurrentView();
	handleStartQuizClick();
	handleAnswerSubmit();
	handleNextQuestionClick();
	handleRetryQuizClick();
} 
$(handleInitialLoad);