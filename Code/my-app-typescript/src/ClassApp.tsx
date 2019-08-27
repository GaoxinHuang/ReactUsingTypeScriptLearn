// interface SearchFunc{
//     (source:string):boolean;
// }
// let mySearch:SearchFunc;

import React from 'react';
import Message from './FunctionalMessage'

const initalState = {
    name:'M',
    message: 'TS'
}
type StateType = Readonly<typeof initalState> 
interface AppProps{
    mss:string;
}
class ClassApp extends React.Component<AppProps, StateType>{
    readonly state: StateType = initalState;
    render(){
        return (<div >Functional Class, {this.state.message}
        <div><Message /></div>
        </div>)
    }
}
export default ClassApp;
