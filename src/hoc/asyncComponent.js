import React, { Component } from 'react';

const asyncComponent = (importComponent) =>  {
    return class extends Component {
        state = {
            component:null
        };
        componentDidMount () {
            importComponent()
            .then( comp => {
                this.setState({ component: comp.default  });
            }) 
        }
        render(){
            let c = this.state.component;
            return c ? < c {...this.props}/>:null;
        }

    }
}

export default asyncComponent;