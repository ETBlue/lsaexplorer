import React, { Component } from 'react';
import firebase from 'firebase';
import {Link} from 'react-router-dom';

import Option from './Option';
import './QuizView.css';

class QuizView extends Component {

  constructor(props) {

    super(props);

    this.state = {
      quiz: {
        id: this.props.id,
        title: this.props.title,
        description: this.props.description,
        type: this.props.type,
      },
      option: this.props.option || (this.props.type === "select" ? this._basicOptionData : {}),
      answer: this.props.answer || "", // 使用者選擇的答案

      order: this.props.order,
      route: this.props.route,
      condition: this.props.condition,
    };

    this._onInputChange = this._onInputChange.bind(this);
    this._onInputSubmit = this._onInputSubmit.bind(this);
    this._onSelect = this._onSelect.bind(this); // 根據使用者的選擇設定這題的答案
  }

  componentWillReceiveProps(nextProps) {
    this.setState((prevState, props) => {

      return {
        quiz: {
          id: nextProps.id,
          title: nextProps.title,
          description: nextProps.description,
          type: nextProps.type,
        },
        option: nextProps.option || (nextProps.type === "select" ? this._basicOptionData : {}),
        answer: nextProps.answer || "", // 使用者選擇的答案

        order: nextProps.order,
        route: nextProps.route,
        condition: nextProps.condition,
      };
    });
  }

  _onInputChange(event) {
    const answer = event.target.value || "";
    this.setState((prevState, props) => {
      return {
        answer: answer
      };
    });
  }

  _onInputSubmit(event) {
    firebase.database().ref('answer/' + this.props.id).set(this.state.answer);
  }

  _onSelect(event) {

    const answer = event.target.getAttribute("data-value");
    firebase.database().ref('answer/' + this.props.id).set(answer);

    this.setState((prevState, props) => {
      return {answer: answer};
    });
  }

  render() {

    let answerJSX;

    if (this.state.quiz.type === "select") {
      const option = this.state.option;
      if (option) {
        const optionJSX = Object.keys(option).map( (key) => {

          const item = option[key];
          const className = this.state.answer === item.value ? "active" : "";
          const next = this.state.route && this.state.route[item.value] ? 
            this.state.route[item.value].quiz : 
            (this.state.order && this.state.order.next ? this.state.order.next : 
            "") ;
          return (
            <Option 
              {...item} 
              key={key} 
              next={next} 
              className={className} 
              onClick={this._onSelect} 
            />
          )
        });
        answerJSX = (
          <div className="ui vertical fluid basic buttons">
          {optionJSX}
          </div>
        );
      }
    }

    if (this.state.quiz.type === "input") {
      answerJSX = (
        <div className="ui action input">
          <input 
            type="text" 
            id={this.state.quiz.id}
            placeholder={this.state.answer} 
            value={this.state.answer} 
            onChange={this._onInputChange}
          />
          <Link 
            to={this.state.order.next} 
            className="ui button"
            onClick={this._onInputSubmit}
          >
            Submit
          </Link>
        </div>
      );
    }

    return (
      <section className="QuizView">
        <div className="Question ui center aligned basic segment">
          <h3 className="ui header">
            {this.state.quiz.title}
          </h3>
          <p>
            {this.state.quiz.description}
          </p>
          { answerJSX }
        </div>
      </section>
    );
  }

}

export default QuizView;
