import React, { Component } from 'react';
import css from './Feedback.module.css';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = event => {
    console.log(event.target.value);
    const { name } = event.target;
    this.setState(prevState => {
      return {
        [name]: prevState[name] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const { good } = this.state;
    return total === 0 ? 0 : (good / total) * 100;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const handleClick = this.handleClick;
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();

    return (
      <>
        <h1>Please leave feedback</h1>
        <button className={css.button} onClick={handleClick} name="good">
          Good
        </button>
        <button className={css.button} onClick={handleClick} name="neutral">
          Neutral
        </button>
        <button className={css.button} onClick={handleClick} name="bad">
          Bad
        </button>
        <h2>Statistics</h2>
        <ul className={css.statisticsList}>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {totalFeedback}</li>
          <li>
            Positive Feedback Percentage:{' '}
            {positiveFeedbackPercentage.toFixed(0)}%
          </li>
        </ul>
      </>
    );
  }
}
