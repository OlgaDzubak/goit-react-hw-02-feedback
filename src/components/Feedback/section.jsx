import { Component } from "react";
import PropTypes from 'prop-types';
import css from './section.module.css';

export class Section extends Component {
    static defaultProps = {
        title : "Section",
    };
    static propTypes = {
        title: PropTypes.string,
        children: PropTypes.element,
    }
    render () {
        return (
            <section className={css.section}>
                <h2 className={css.section_title}>{this.props.title}</h2>
                {this.props.children}
            </section> 
        );
    }
}