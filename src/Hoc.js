/**
 * 属性劫持-反向继承
 */

import React,{ Component } from 'react';



function HOC(WarpComponent){
    return class extends WarpComponent{

        // state = {
        //     value:'',

        // }

        change = (e)=>{
            this.setState({
                value:e.target.value
            })
        }

        componentDidMount(){
            console.log(this.props)
            console.log(this.state)
        }

        render(){

            const tree = super.render();
            let child = tree.props.children;
            let newprops = { title:'22' };

            const newTree = React.cloneElement(tree,newprops,child);

            

            const pops = {
                value:this.state.value,
                onChange: this.change
            }

            return newTree
        }
    }
}

class Log extends Component{
    state={
        value:''
    }
    change = (e) =>{
        this.setState({
            value: e.target.value
        })
    }
    render(){
        return(
            <div>
                <p>{this.state.value}</p>
                <input value={this.state.value} onChange={this.change} />
                <p className="p1 p2">Here are the documents needed to verify your property/properties:</p>
                <p className="p1">Here are the documents needed to verify your property/properties:</p>
            </div>
        )
    }
}



export default HOC(Log)