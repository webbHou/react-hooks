import React, { Component } from 'react';

import PropTypes from 'prop-types';

import Input from './Hoc2';

export default class Form extends Component{

    state = {
        modal:{
            name:'',
            age:''
        }
    }

    changeModal = (name,value) =>{
        this.setState({
            modal:{ ...this.state.modal,[name]:value }
        })
    }

    static childContextTypes = {
        modal: PropTypes.object,
        changeModal: PropTypes.func
    }

    getChildContext(){
        return {
            modal:this.state.modal,
            changeModal:this.changeModal
        }
    }

    validatorName = {
        func: (val) => val && /^[a-z]+$/i.test(val),
        msg: '请输入字母'
    }

    validatorAge = {
        func: (val) => val && !isNaN(val),
        msg: '请输入数字'
    }
    

    componentDidMount(){
        console.log(this.ref.log())
    }


    render(){
        return (
            <div>
                <Input check={this.validatorName} ref={ref=>{this.ref=ref}}  v_modal='name' />
                <Input check={this.validatorAge} v_modal='age' />
            </div>
        )
    }

}