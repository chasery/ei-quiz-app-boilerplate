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
function generateQuizStartView() {
	// A function for generating the quiz start view
	return `
		<article>
			<section class="center">
				<p>Test your knowledge of Halloween with this 5 question quiz!</p>
				<button class="button">Start Quiz!</button>
			</section>
		</article>
	`;
}
function generateQuestionView() {
	// A function for returning the current question view
	console.log('`generateQuestionView` ran');
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
	// Evaluate whether the quiz is started or not
	if (store.quizStarted) {
		// This will handle the true state and do some evaluation of what we need to render
	} else {
		// Set our current view to our Quiz Start template if quiz not started
		currentView = generateQuizStartView();
	}

	$('.main').html(currentView);
}

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)
function handleStartQuizClick() {
	// A function to handle the starting of the quiz
	console.log('`handleStartQuizClick` ran');
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
	generateQuizStartView();
	generateQuestionView();
	generateQuizCompleteView();
	renderCurrentView();
	handleStartQuizClick();
	handleAnswerSubmit();
	handleNextQuestionClick();
	handleRetryQuizClick();
} 
$(handleInitialLoad);