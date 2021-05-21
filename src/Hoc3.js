/*
 * @Author: webbhou
 * @Date: 2020-12-16 13:38:30
 * @LastEditors: webbhou
 * @LastEditTime: 2020-12-16 14:10:23
 * @FilePath: /react-hooks/src/Hoc3.js
 * @Description: 
 */
import React from 'react';

import Connect from './Connect';
import { countAdd,countDec } from './reducer';

const MakeCallHoc = Component => {
    const Hoc = (props) => {

        const countAdd = () => {
            props.countAdd()
        }


        return (
            <Component 
                onClick={()=>countAdd()}
                {...props}
            >打电话{props.count}</Component>
        )  
    }

    return Connect(mapStateToProps, mapDispatchToProps)(Hoc)
}

const mapStateToProps = (state) =>{
    return {
        count: state.count
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        countAdd: () => dispatch(countAdd()),
        countDec: () => dispatch(countDec()),
    }
}


const CallBtn = props => {
    return <button style={{ width: '100px', ...props.style }} {...props}>{props.children}</button>
}

export const MakeCall = MakeCallHoc(CallBtn);

export default MakeCallHoc;

