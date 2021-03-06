import React from 'react';

import { PropTypes } from 'prop-types';


class Provider extends React.Component{

    constructor(props){
        super(props);
        console.log(this.props.store)
    }

    static childContextTypes = {
        store: PropTypes.object
    }

    getChildContext = () =>{
        return {
            store: this.props.store
        }
    }

    render(){
        return (
            <div>
                {this.props.children}
            </div>
        )
    }

}

export default Provider