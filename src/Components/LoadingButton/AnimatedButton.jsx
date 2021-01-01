import React from 'react';
import {Button} from "react-bootstrap";
import {CSSTransition, SwitchTransition} from "react-transition-group";
import "./AnimatedButton.css";

function AnimatedButton({isDisabled, onClickAction, onClickActionParameter, variant, buttonText}) {
    const buttonVariant = isDisabled ? "disabled" : variant;
    const btnText = isDisabled ? `${buttonText}d` : buttonText;

    let button =(<Button variant={buttonVariant} onClick={() => onClickAction(onClickActionParameter)}>{btnText}</Button>);

    return (
        <SwitchTransition mode="out-in">
            <CSSTransition key={isDisabled} timeout={500} classNames="fade" >
                {button}
            </CSSTransition>
        </SwitchTransition>
    );
}
export default AnimatedButton;