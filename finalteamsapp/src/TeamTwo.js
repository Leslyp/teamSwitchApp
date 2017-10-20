import React, { Component } from 'react';

function TeamTwo(props){
	return(
		<section className="teamTwoContainer" >
      <h2>{props.player}</h2>
      <button onClick={props.handleTeamOneFromTeam2} >Add to Team 1</button>
      <button onClick={props.handleUnassignTeam2} >Unassign Contestant</button>
    </section>
	);
};

export default TeamTwo;
