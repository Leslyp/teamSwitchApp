import React, { Component } from 'react';

function Player(props){
	return(
		<section className="player" >
      <h2>{props.player}</h2>
      <button onClick={props.handleTeamOne} >Add to Team 1</button>
      <button onClick={props.handleTeamTwo} >Add to Team 2</button>
    </section>
	);
};

export default Player;
