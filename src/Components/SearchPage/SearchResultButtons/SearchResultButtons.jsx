import React from 'react';
import {Button} from "react-bootstrap";
import {CSSTransition, SwitchTransition} from "react-transition-group";
import "./SearchResultButtons.css";

function SearchResultButtons({isNominated, addNomination, movieResult, deleteNomination}) {
    let button = isNominated ?
        (<div>
            <Button variant="outline" disabled>Nominated</Button>
            <Button variant="outline-danger" onClick={() => deleteNomination(movieResult.imdbID)} >Remove</Button>
        </div>)
        : (<Button variant="success" onClick={() => addNomination(movieResult)}>Nominate</Button>);

    return (
        <SwitchTransition mode="out-in">
            <CSSTransition key={isNominated} timeout={500} classNames="fade" >
                {button}
            </CSSTransition>
        </SwitchTransition>
    );
}
export default SearchResultButtons;