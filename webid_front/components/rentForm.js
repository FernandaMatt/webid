import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Question from './question';
import NextQuestionButton from './nextQuestionButton';
import PreviousQuestionButton from './previousQuestionButton';

import styles from '../styles/LoanContract.module.css'

const questions = [
	{
		question: 'Enter the asset token',
		description: ' ',
	},
];

const RentForm = () => {
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
    router.push('/rentConfirmation');
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

export default RentForm;
