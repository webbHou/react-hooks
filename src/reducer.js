const initState = {
    count:0
}


export function countAdd(){
    return {
        type:'add',
    }
}

export function countDec(){
    return {
        type:'dec',
    }
}

export default function count(state=initState,action){
    switch(action.type){
        case 'add':
            return {...state,count:state.count+1 }
        case 'dec':
            return {...state,count:state.count-1 }
        default:
            return {...state}
    }
}




