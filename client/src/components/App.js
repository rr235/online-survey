import React, { Component } from 'react';
import ProgressBar from './atoms/ProgressBar';
import QuestionAnswer from './organisms/QuestionAnswer';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Online Survey</h1>
        <ProgressBar />
        <QuestionAnswer
          text="How old are you?"
          id="age"
          name="age"
          type="text"
        />
      </div>
    );
  }
}

export default App;
