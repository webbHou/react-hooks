
import React,{ Component } from 'react';

import { countAdd,countDec } from './reducer';

import Connect from './Connect';


class Count extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                {this.props.count}
                <button onClick={this.props.addCount}>增加</button>
                <button onClick={this.props.delCount}>减少</button>
            </div>
        );
    }
}


const mapStateToprops = (state) =>{
    return {
        count: state.count
    }
}

const mapDispatchToprops = (dispatch) =>{
    return {
        addCount:()=>dispatch(countAdd()),
        delCount:()=>dispatch(countDec()),
    }
}

export default Connect(mapStateToprops,mapDispatchToprops)(Count)