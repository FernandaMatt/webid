import { ChevronLeft } from 'react-feather';

import styles from '../styles/LoanContract.module.css';

const PreviousQuestionButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className={styles.arrowbutton}>
      <ChevronLeft size={24} />
    </button>
  );
};

export default PreviousQuestionButton;
