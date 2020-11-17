import React, { useState,useEffect,useReducer,createContext,useContext, useMemo, useCallback } from 'react';
import { Link } from 'react-router-dom'; 

function Reducer(state,action){
    switch(action.type){
        case 'add':
            return { ...state,count:state.count+1}
        case 'deadd':
            return { ...state,count:state.count-1 }
        default:
            return state;
    }
}

const context  = createContext({
    color:'red',
    background:'green'
})



export default function HOOK(){

    // const [count,setCount] = useState(0);

    const [state,dispatch] = useReducer(Reducer,{count:0});
    const [color,setColor] = useState('red');
    const [background,setBackground] = useState('blue');
    const { count } = state;

    useEffect(()=>{
        console.log('模拟 didmount')
        return ()=>{
            console.log('模拟 willunmount')
        }
    },[])

    const K = useMemo(()=>{
    return <p>{color}</p>
    },[color])
    
    const K2 = useCallback(()=>{
        console.log(color);
        function setBg(color) {  
            if(color=='red'){
                setBackground('blue')
            }else {
                setBackground('red')
            }
        }
        setBg(color)
    },[color])

    useEffect(()=>{
        if(count!==0){
            console.log('模拟didupdate')
        }
        return ()=>{
            console.log('清楚上次')
        }
    },[count])

    console.log('页面渲染')

    return (
        <div>
            <p>you click {count} times!</p>
            {K}
            <button onClick={ ()=>dispatch({type:'add'}) }>点击+1</button>
            <button onClick={ ()=>dispatch({type:'deadd'}) }>点击-1</button>
            <context.Provider value={{ color:color,background:background }}>
                <Child />
                <Child2 />
                <button onClick={()=> K2()}>更改</button>
                <button onClick={() => setColor('blue')}>color</button>
                <button onClick={() => setBackground('red')}>backgroud</button>
            </context.Provider>
            <Link to={{ pathname:'/',state:{id:1} }}>首页</Link>
            <Link to={{ pathname:'/form',search:'?id=1' }}>form</Link>
         </div>
    )

}

function Child2(){

    return (
        <context.Consumer>
            {(style)=>{
                return <p style={{color:style.color, background: style.background}}>哈哈哈哈2</p>
            }}
        </context.Consumer>
    )

}


function Child(){

    useEffect(()=>{
        console.log('更新child');
        return ()=>{}
    })
    
    const style = useContext(context);

    return (
        <p style={{color:style.color, background: style.background}}>哈哈哈哈</p>
    )

}