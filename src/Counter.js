import React from 'react'
import { connect } from 'react-redux';
function Counter(props) {
    console.log();
    return (
        <div>
            <h1>Mesin Penghitung</h1>
            <p>Count : {props.count}</p>
            <button onClick={props.onIncrementClick}>Increment</button> 
            <button onClick={props.onDecrementClick}>Dicrement</button>
        </div>
    )

}
function mapStatetoProps(state) {
    console.log('mapStatetoProps', state);
    return {
        count: state.count
    }
}
function mapDispatchtorops(dispatch) {
    return {
        onIncrementClick: () => {
            console.log('tombol di CLICK',);
            const action = { type: 'INCREMENT' };
            dispatch(action);
        },
        onDecrementClick: () => {
            console.log('tombol di DECREMENT CLICK',);
            const action = { type: 'DECREMENT' };
            dispatch(action);
        }

    }
}

export default connect(mapStatetoProps, mapDispatchtorops)(Counter)