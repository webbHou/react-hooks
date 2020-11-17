/**
 * 模拟connect
 */

import React,{ Component } from 'react';

import { PropTypes } from 'prop-types';


const connect = (mapStateToProps,mapDispatchToprops) => (Wrapcompont) =>{
    return class extends Component{
        state={
            allprops:{}
        }
        static contextTypes = {
            store: PropTypes.object
        }

        componentDidMount(){
            const store = this.context.store;
            console.log(this.context)
            this._update();
            store.subscribe(() => this._update());
        }

        //数据更新页面更新
        _update(){
            console.log('redux更新')
            const store = this.context.store;
            const state = mapStateToProps?mapStateToProps(store.getState()):{};
            const dispatch = mapDispatchToprops?mapDispatchToprops(store.dispatch):{};
            this.setState({
                allprops:{...state,...dispatch,...this.props}
            })
        }

        render(){
            return <Wrapcompont {...this.state.allprops} />
        }
    }
}

export default connect