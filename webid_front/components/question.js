import styles from '../styles/LoanContract.module.css';

const Question = ({ question, answer, onAnswer, description }) => {
	return (
	  <div>
		<div>
		  <h2 className={styles.questionText}>{question}</h2>
		  <p className={styles.questionDescription}>{description}</p>
		</div>
		<div>
		  <input className={styles.answerInput}
			type="text"
			placeholder="Your Answer"
			value={answer}
			onChange={(e) => onAnswer(e.target.value)}
		  />
		</div>
	  </div>
	);
  };

  export default Question;
