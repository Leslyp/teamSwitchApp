import React, { Component } from 'react';

function TeamOne(props){
	return(
		<section className="teamOneContainer" >
      <h2>{props.player}</h2>
      <button onClick={props.handleTeamTwoFromTeam1} >Add to Team 2</button>
      <button onClick={props.handleUnassignTeam1} >Unassign Contestant</button>
    </section>
	);
};

export default TeamOne;
