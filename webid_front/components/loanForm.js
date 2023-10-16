import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Question from '../components/question';
import NextQuestionButton from '../components/nextQuestionButton';
import PreviousQuestionButton from '../components/previousQuestionButton';

import styles from '../styles/LoanContract.module.css'

const questions = [
	{
		question: 'Enter the asset token',
		description: ' ',
	},
	{
		question: 'Asset % to auction',
		description: 'What percentage of your asset are you willing to auction now',
	},
	{
		question: 'How much is the full rent',
		description: 'How much does your asset cost to rent?',
	},
	{
		question: 'Time until repurchase',
		description: 'How many days until you are able to repurchase your asset.',
	},
	{
		question: 'Max Interest Rate',
		description: 'The Max Anual Interest Rate that you are willing to pay. Bidders can offer lower rates.',
	},
	{
		question: 'Price',
		description: 'What\'s the price?',
	},
	{
		question: 'Duration of auction',
		description: 'Put the time in seconds',
	},
	{
		question: 'Upload photos',
		description: 'Drag your photos',
	},
	{
		question: 'Description',
		description: 'Describe your asset as best as you can',
	},
];

const LoanForm = () => {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [answers, setAnswers] = useState(Array(questions.length).fill(''));
	const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
	const router = useRouter();

	const handleAnswer = (newAnswer) => {
		const updatedAnswers = [...answers];
		updatedAnswers[currentQuestion] = newAnswer;
		setAnswers(updatedAnswers);

		const allQuestionsAnswered = updatedAnswers.every((answer) => answer !== '');
		setIsSubmitDisabled(!allQuestionsAnswered);
	};

	const handleNextQuestion = () => {
		if (currentQuestion < questions.length - 1) {
			setCurrentQuestion(currentQuestion + 1);
		}
	};

	const handlePreviousQuestion = () => {
		if (currentQuestion > 0) {
			setCurrentQuestion(currentQuestion - 1);
		}
	};

	const handleSubmit = () => {
		console.log('Respostas:', answers);
    router.push('/loanConfirmation');
	};

	return (
		<div className={styles.formGrid}>
			<div className={styles.arrows}>
				<div>
					<PreviousQuestionButton onClick={handlePreviousQuestion} />
				</div>
				<div className={styles.questionContainer} >
					<Question
						question={questions[currentQuestion].question}
						description={questions[currentQuestion].description}
						answer={answers[currentQuestion]}
						onAnswer={handleAnswer}
					/>
				</div>
				<div>
					<NextQuestionButton onClick={handleNextQuestion} />
				</div>
			</div>
			<button onClick={handleSubmit} disabled={isSubmitDisabled}>
					Submit Answers
			</button>
		</div>
	);
};

export default LoanForm;
