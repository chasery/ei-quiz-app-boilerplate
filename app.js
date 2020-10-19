/**
 * Example store structure
 */
const store = {
	// 5 or more questions are required
	questions: [
		{
			question: 'What color is broccoli?',
			answers: [
			'red',
			'orange',
			'pink',
			'green'
			],
			correctAnswer: 'green'
		},
		{
			question: 'What is the current year?',
			answers: [
			'1970',
			'2015',
			'2019',
			'2005'
			],
			correctAnswer: '2019'
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
function generateStartView() {
	// A function for generating the quiz start view
	return `
		<article>
			<section class="center">
				<p>Test your knowledge of Halloween with this 5 question quiz!</p>
				<button class="startQuiz button">Start Quiz!</button>
			</section>
		</article>
	`;
}
function generateQuestionView() {
	// A function for returning the current question view
	return `
		<article>
			<section>
				<form class="question">
					<h2>Question 1</h2>
				</form>
			</section>
		</article>
	`;
}
function generateQuizCompleteView() {
	// A function for generating the quiz completion view
	console.log('`generateQuizCompleteView` ran');
}

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store
function renderCurrentView() {
	// Initialize a variable to store our current view
	let currentView = "";
	let started = store.quizStarted;
	// Evaluate whether the quiz is started or not
	if (started) {
		// This will handle the true state and do some evaluation of what we need to render
		currentView = generateQuestionView();
	} else {
		// Set our current view to our Quiz Start template if quiz not started
		console.log('made it');
		currentView = generateStartView();
	};
	$('.main').html(currentView);
}

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)
function setQuestionNumberState() {
	// A function for setting the the question number in our store object
}
function handleStartQuizClick() {
	// Handle the click event of our start quiz button
	$('.startQuiz').on('click', function(){
		// Set the state of our quizStarted to true
		store.quizStarted = !store.quizStarted;
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