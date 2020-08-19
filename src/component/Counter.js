import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {incrementCounter, decrementCounter} from './../actions';

const Container = styled.div`
    max-width:200px;
    margin:30px auto;
    box-shadow: 0 4px 15px 0 #c2c2c2;
    font-size:20px;
    font-weight:800;

    .counter{
        display:flex;
        background:#000000;
        color:#f2f2f2;
        justify-content: space-between;
        padding:5px;
        

        .btn{
            padding:5px 20px;
            font-size:25px;
            font-weight:800;
        }

        .lbl{
            padding:5px ;
            font-size:25px;
            font-weight:800;
        }
    }

`;

const Counter= (props) =>{

    const {count,increment,decrement} = props;

    return <Container>
        <h3>Redux Counter</h3>
        <div className="counter">
            <button className="btn"
                onClick={increment}
            >+</button>
            <div class="lbl">{count}</div>
            <button className="btn"
                onClick={decrement
            }>-</button>
        </div>
    </Container>
}

const mapStateToProps = (state) =>({
    count: state.count
});

const mapDispatchToProps= (dispatch)=>({
    increment: ()=>{ dispatch(incrementCounter())},
    decrement: ()=>{ dispatch(decrementCounter())},

});

export default connect(mapStateToProps, mapDispatchToProps)(Counter)