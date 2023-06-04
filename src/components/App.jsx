import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import './App.css';

import {Section} from './Feedback/section';
import {FeedbackOptions} from './Feedback/feedback_options';
import {Statistics} from './Feedback/statictics';

export class App extends Component {
   
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    }

    onClickButton = (evt) => {
        console.log(evt.target);
        const field = evt.target.name;
        this.setState(prevState => ({[field]: prevState[field] + 1,}));
    };

    countTotalFeedback = () => { return this.state.good + this.state.neutral + this.state.bad;}
    countPositiveFeedbackPercentage = () => {
        if (!this.countTotalFeedback()) return 0;
        return Math.round(100 * (this.state.good / this.countTotalFeedback()));
    }

    render(){ 
        return (
            <>
                <Section title="Please leave feedback">
                    <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.onClickButton} />
                </Section>

                <Section title="Statistics">
                    <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback()} positive_percentage={this.countPositiveFeedbackPercentage()} />
                </Section>
            </>
        )
    }
}