import React, { Component } from 'react';
import styles from './style.scss';

class ProgressBar extends Component {
  calculateProgress() {
    return (this.props.index / this.props.total) * 100;
  }

  render() {
    const progress = `${this.calculateProgress().toFixed(2)}%`;
    return (
      <div className={styles.bar}>
        <div className={styles.progress} style={{ width: progress }}>
          <span className={styles.text}>{progress}</span>
        </div>
      </div>
    );
  }
}

export default ProgressBar;
