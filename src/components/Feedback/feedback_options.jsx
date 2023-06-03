import React from 'react';
import css from './feedback_options.module.css';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({options, onLeaveFeedback}) => {
        return (
        <div className={css.feedback_div}>
                <button type='button' className={css.feedback_btn} name={options[0]} onClick={onLeaveFeedback}>Good</button>
                <button type='button' className={css.feedback_btn} name={options[1]} onClick={onLeaveFeedback}>Neutral</button>
                <button type='button' className={css.feedback_btn} name={options[2]} onClick={onLeaveFeedback}>Bad</button>
        </div>)
}
FeedbackOptions.propTypes = {
        options: PropTypes.array,
        onLeaveFeedback: PropTypes.func,
}