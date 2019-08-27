import React from 'react';
const initalState = {
    name: 'M',
    message: 'TS'
}
type StateType = Readonly<typeof initalState>

const messageHoc = (WrappedComponent: any) => {
    class HOC extends React.Component<{}, StateType>{
        readonly state: StateType = initalState;
        render() {
            return (<WrappedComponent message={this.state.message} name={this.state.name} />)
        }
    }
    return HOC;
}
export default messageHoc;