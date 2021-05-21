/*
 * @Author: webbhou
 * @Date: 2020-12-01 16:07:56
 * @LastEditors: webbhou
 * @LastEditTime: 2020-12-14 10:28:40
 * @FilePath: /react-hooks/src/Count.js
 * @Description: 
 */

import React,{ Component } from 'react';

import { countAdd,countDec } from './reducer';

import Connect from './Connect';


class Count extends Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
    }

    shouldComponentUpdate(nextProps,nextState) {
        if(nextProps.count !== this.props.count){
            this.setState({
                count: nextProps.count
            })
        }
        return true
    }



    render(){
        const { count } = this.state;
        console.log('state'+count);
        return (
            <div>
                {count}
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