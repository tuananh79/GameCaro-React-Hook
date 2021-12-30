// import { useState } from "react";
import './Square.scss'
const Square = (props) => {
    return (
        <>
            <button className="btn" value={props.value} onClick={() => props.onClick()}>
                {props.value}
            </button>
        </>
    );
}
export default Square;