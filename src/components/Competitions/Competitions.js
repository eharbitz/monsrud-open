import React, { useState } from 'react';
import PostRow from './../Posts/Post';
import styles from './Competitions.module.css';
import competitions from './../../database/dataloader';

const CompetitionView = ({ competition, setSelectedYear }) => {
  return (
    <div className={styles.CompetitionView}>
      <button onClick={() => setSelectedYear(null)}>Tilbake</button>
      <h1>{competition.title}</h1>
      <div className={styles.TopBoxContainer}>
        <div className={styles.TopBoxImageContainer}>
          <img
            className={styles.TopBoxImage}
            alt={competition.title}
            src={competition.image}
          ></img>
        </div>
        <div className={styles.TopBoxTextContainer}>
          <div className={styles.TopBoxText}>
            <div className={styles.TopBoxTextHeader}>Vinner</div>
            <div>{competition.winner}</div>
          </div>
          <div className={styles.TopBoxText}>
            <div className={styles.TopBoxTextHeader}>Innsamlet</div>
            <div>{competition.donated}</div>
          </div>
          <div className={styles.TopBoxText}>
            <div className={styles.TopBoxTextHeader}>Deltakere</div>
            <div>{competition.attendees}</div>
          </div>
        </div>
      </div>

      <div className={styles.AboutBox}>
        <h3>Hvordan gikk turneringen?</h3>
        <div>{competition.tournamentText}</div>
      </div>

      <div className={styles.ImageCarousel}>Bilder kommer her...</div>
      <div className={styles.AboutBox}>
        <h3>Om {competition.organization}</h3>
        <div>{competition.organizationInfo}</div>
      </div>
    </div>
  );
};

const CompetitionPage = () => {
  const [selectedYear, setSelectedYear] = useState(null);

  const selectYear = year => {
    setSelectedYear(year);
    window.scrollTo(0, 0);
  };

  if (selectedYear === null) {
    return (
      <PostRow postItems={competitions} setSelectedItem={selectYear}></PostRow>
    );
  } else {
    return (
      <CompetitionView
        competition={competitions[selectedYear]}
        setSelectedYear={selectYear}
      ></CompetitionView>
    );
  }
};

export default CompetitionPage;
