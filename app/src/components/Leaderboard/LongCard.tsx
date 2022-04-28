import { FunctionComponent } from 'react';
import * as styles from '@/styles/components/Leaderboard.module.sass';

interface PropTypes {
  country: string;
  playerName: string;
  time: [number, number, number];
  correct: number;
  score: number;
}

const LongCard: FunctionComponent<PropTypes> = function ({
  country,
  playerName,
  time,
  correct,
  score,
}) {
  let i: number = 1;

  return (
    <div className={styles.longCardBody}>
      <div className={styles.leftSideWrapper}>
        <p className={styles.incrementer}>{i++}</p>
        <img src={`https://countryflagsapi.com/png/${country}`} className={styles.longCardImg} alt="a flag of a country" />
        <h6>{playerName}</h6>
      </div>
      <div className={styles.rightSideWrapper}>
        <div className={styles.timeCorrectWrapper}>
          <p>{`${time[0] > 0 ? time[0] + 'º' : ''} ${time[1]}' ${time[2]}"`}</p>
          <p>{correct}/20</p>
        </div>
        <h6>{score}</h6>
      </div>
    </div>
  );
};

export default LongCard;