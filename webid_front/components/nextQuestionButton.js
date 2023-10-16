import { ChevronRight } from 'react-feather';

import styles from '../styles/LoanContract.module.css';

const NextQuestionButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className={styles.arrowbutton}>
      <ChevronRight size={24} />
    </button>
  );
};

export default NextQuestionButton;
