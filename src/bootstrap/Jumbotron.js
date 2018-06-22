import React, { Component } from 'react';

import Container from './Container';
import { classify } from './utils';

export default class Jumbotron extends Component {

    render(){
        const CSS_NAME = 'jumbotron';
        const props = Object.assign({}, this.props);

        props.className = classify(CSS_NAME, props.className);
        const containerFluid = props.containerFluid;
        delete props.containerFluid;

        const body = props.className.includes(CSS_NAME + '-fluid') ? (
            <Container 
                style={{ color: 'red' }}
                fluid={containerFluid}
            >
                {this.props.children}
            </Container>
        ) : this.props.children; 
        return(
            <div {...props}>
              {body}
            </div>
        ) 
    }
}