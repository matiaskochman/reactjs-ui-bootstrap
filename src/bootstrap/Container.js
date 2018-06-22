import React, { Component } from 'react';

export default class Container extends Component {

    render(){
        const { fluid, className } = this.props;
        const cls = `container${fluid ? '-fluid' : ''} ${className || ''}`;
        return(
            <div className={cls} style={this.props.style}>
                {this.props.children}
            </div>
        ) 
    }
}