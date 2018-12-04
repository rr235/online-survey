import React, { Component } from 'react';
import Text from '../../atoms/Text';
import Dropdown from '../../atoms/Dropdown';
import RadioButtons from '../../atoms/RadioButtons';
import style from './style.scss';

class QuestionAnswer extends Component {
  getInputType() {
    switch (this.props.type) {
      case 'text':
        return <Text {...this.props} />;
      case 'select':
        return <Dropdown {...this.props} />;
      case 'radio':
        return <RadioButtons {...this.props} />;
      default:
        return null;
    }
  }

  render() {
    return (
      <>
        <label htmlFor={this.props.id} className={style.question}>
          {this.props.text}
        </label>
        {this.getInputType()}
      </>
    );
  }
}

export default QuestionAnswer;
