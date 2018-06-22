import React, { Component } from 'react';
import { classify } from './utils';

export default class Button extends Component {

    render(){
        const CSS_NAME = 'btn';
        const Tag = this.props.href ? 'a' : 'button';
        const className = classify(CSS_NAME, this.props.className)
            + (this.props.disabled ? ' disabled':'');
        return (
            <Tag {...this.props} className={className}>Google</Tag>
        );
    };
};