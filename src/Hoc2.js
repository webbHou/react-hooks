/**
 * 双向数据绑定及验证-高阶组件
 */

import React, { Component } from 'react';

import PropTypes from 'prop-types';

function HOC2(WrapCompont){
    

    class HOC extends Component{

        state={
            error:'',
            value:''
        }

        static contextTypes = {
            modal:PropTypes.object,
            changeModal: PropTypes.func
        }


        //该input vlaue值改变时触发
        change=(e)=>{
            const { changeModal } = this.context;
            const { v_modal,check } = this.props;
            if(check.func && typeof check.func === 'function'){ //需要类型校验的进行校验
                if(!check.func(e.target.value)){
                    return this.setState({
                        error:check.msg
                    })
                }else{
                    this.setState({
                        error:''
                    })
                }
            }
            changeModal(v_modal,e.target.value);
        }

    
        render() {
            const { modal } = this.context;
            const { v_modal,forwardedRef } = this.props;

            return (
                <div>
                    <WrapCompont value={modal[v_modal]} ref={forwardedRef} onChange={this.change} />
                    <p>{this.state.error}</p>
                </div>
            )
        }
    }
    
    return React.forwardRef((props, ref) => {
        return <HOC forwardedRef={ref} {...props} />;
    });

}

class Put extends Component { 

    log(){ //表单父组件可操作执行
        console.log(1)
    }

    render(){
        return <input {...this.props} style={{ border:'1px solid #333'}} />
    }


}


export default HOC2(Put)

