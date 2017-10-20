import React, { Component } from 'react';
import initState from './initState';
import Player from './Player';
import TeamOne from './TeamOne';
import TeamTwo from './TeamTwo';
import './App.css';

/* 
Create an app to assign a list of people to one of two teams.
You may either start with a hard-coded array of people or you can create a form to gather names from the user.
Start with listing the users. Have some way to add them into one of the two teams.
Once a person is assigned, they should be removed from the unassigned list and should be added to a team list. 
Once a person is on a team list, have a way to remove them from a team assignment (which will put them back on the unassigned list) or to switch them to the other team. 
Finally, have a way to reset things back to the original state of the game at the beginning.
*/


class App extends Component {
  // where we initialize state
  constructor(){
    // calls parent constructor of the component, allows us to use this and build on it
    super();
    // binding methods, so that when they're used, it knows which this is being referred to
    this.updateUserInput = this.updateUserInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTeamOne = this.handleTeamOne.bind(this);
    this.handleTeamTwo = this.handleTeamTwo.bind(this);
    this.handleUnassignTeam1 = this.handleUnassignTeam1.bind(this);
    this.handleUnassignTeam2 = this.handleUnassignTeam2.bind(this);
    this.handleTeamTwoFromTeam1 = this.handleTeamTwoFromTeam1.bind(this);
    this.handleTeamOneFromTeam2 = this.handleTeamOneFromTeam2.bind(this);
    // state holds initial data which can change over time
    this.state = initState;
  }

  // function to update user input and show what they are typing in input
  updateUserInput(event){
    var player = event.target.value;
    this.setState ({
      userInput: player,
    })
  }

  // function to handle click on submit button and add player to unassigned players array
  handleSubmit(){
    // COPY OF STATE - STATECOPY
    // object assign copies the values from a source objects to a target object
    let stateCopy = Object.assign({}, this.state);

    // check to see if user input is not empty
    if (stateCopy.userInput !== "") {
      // push user input player into unassigned list
      stateCopy.players.push(
        stateCopy.userInput,
      );
    }

    // reset current input 
    stateCopy.userInput = "";

    // UPDATE STATE WITH STATECOPY
    this.setState(stateCopy);
  }

  // function to add players to team 1
  handleTeamOne(index){
    // COPY OF STATE - STATECOPY
    const stateCopy = Object.assign({}, this.state);
    
    // use splice to remove player at certain index 
    // shift takes off the first value and returns that value
    const removedPlayer = stateCopy.players.splice(index,1).shift();
    console.log(removedPlayer);

    // add removed player to team 1 array
    stateCopy.team1.push(
      removedPlayer
    );

    this.setState (
      stateCopy
    );
  }

  // function to add players to team 2
  handleTeamTwo(index){
    // COPY OF STATE - STATECOPY
    const stateCopy = Object.assign({}, this.state);
    
    // use splice to remove player at certain index 
    // shift takes off the first value and returns that value
    const removedPlayer = stateCopy.players.splice(index,1).shift();
    console.log(removedPlayer);

    // add removed player to team 2 array
    stateCopy.team2.push(
      removedPlayer
    );

    this.setState (
      stateCopy
    );
  }

  // start test seperate function

  // function to add players to team 1 if they are already in team 2
  handleTeamOneFromTeam2(index){
    // COPY OF STATE - STATECOPY
    const stateCopy = Object.assign({}, this.state);
    console.log(index);
    console.log(stateCopy.team1);
    console.log(stateCopy.players);
    
    // use splice to remove player at certain index 
    // shift takes off the first value and returns that value
    const removedPlayer = stateCopy.team2.splice(index,1).shift();
    console.log(removedPlayer);

    // add removed player to team 1 array
    stateCopy.team1.push(
      removedPlayer
    );

    this.setState (
      stateCopy
    );
  }

  // function to add players to team 2 if they are already in team 2
  handleTeamTwoFromTeam1(index){
    // COPY OF STATE - STATECOPY
    const stateCopy = Object.assign({}, this.state);
    
    // use splice to remove player at certain index 
    // shift takes off the first value and returns that value
    const removedPlayer = stateCopy.team1.splice(index,1).shift();
    console.log(removedPlayer);

    // add removed player to team 2 array
    stateCopy.team2.push(
      removedPlayer
    );

    this.setState (
      stateCopy
    );
  }
  // end test seperate function

  // function to add players back to unassigned list
  handleUnassignTeam1(index){
    // COPY OF STATE - STATECOPY
    const stateCopy = Object.assign({}, this.state);
    
    // use splice to remove player at certain index 
    // shift takes off the first value and returns that value
    const removedPlayer = stateCopy.team1.splice(index,1).shift();
    console.log(removedPlayer);

    // add removed player to unassigned list
    stateCopy.players.push(
      removedPlayer
    );

    this.setState (
      stateCopy
    );
  }

  // function to add players back to unassigned list
  handleUnassignTeam2(index){
    // COPY OF STATE - STATECOPY
    const stateCopy = Object.assign({}, this.state);
    
    // use splice to remove player at certain index 
    // shift takes off the first value and returns that value
    const removedPlayer = stateCopy.team2.splice(index,1).shift();
    console.log(removedPlayer);

    // add removed player to unassigned list
    stateCopy.players.push(
      removedPlayer
    );

    this.setState (
      stateCopy
    );
  }

  render() {
    // map creates new array with the results of calling a provided function on every element in the calling array
    const players = this.state.players.map(function(player, index){
      return (
        // every element needs a key(includes this div too)
        <div key={`player-wrapper-${index}`} className="player">
          <Player
            // key is hidden so you can't access inside actual component
            key={`player-${index}`}
            player={player}
            // fat arrow function allows it to pass in the index, not just call instance of the method
            handleTeamOne={() => {this.handleTeamOne(index)}}
            handleTeamTwo={() => {this.handleTeamTwo(index)}}
            index={index}
          />
        </div>
      );
    },this);

    const team1 = this.state.team1.map(function(player, index){
      return (
        // every element needs a key(includes this div too)
        <div key={`team1-wrapper-${index}`} className="team1">
          <TeamOne
            // key is hidden so you can't access inside actual component
            key={`team1-${index}`}
            player={player}
            // fat arrow function allows it to pass in the index, not just call instance of the method
            handleTeamTwoFromTeam1={() => {this.handleTeamTwoFromTeam1(index)}}
            handleUnassignTeam1={() => {this.handleUnassignTeam1(index)}}
            index={index}
          />
        </div>
      );
    },this);

    const team2 = this.state.team2.map(function(player, index){
      return (
        // every element needs a key(includes this div too)
        <div key={`team1-wrapper-${index}`} className="team1">
          <TeamTwo
            // key is hidden so you can't access inside actual component
            key={`player-${index}`}
            player={player}
            // fat arrow function allows it to pass in the index, not just call the method
            handleTeamOneFromTeam2={() => {this.handleTeamOneFromTeam2(index)}}
            handleUnassignTeam2={() => {this.handleUnassignTeam2(index)}}
            index={index}
          />
        </div>
      );
    },this);

    return (
      <div className="App">
        <div>
          <label htmlFor="userInput">Add Contestant</label>
          <input name="userInput" id="userInput" value={this.state.userInput} onChange={this.updateUserInput} />
          <input type="submit" id="submitBtn" value="submit" onClick={this.handleSubmit}/>
        </div>
        <div className="unassignedList">
          <h1>The Voice Contestants</h1>
          {players}
        </div>

        <div className="teams">
          <div className="teamContainer">
            <h2>Team Alicia</h2>
            {team1}
          </div>

          <div className="teamContainer">
            <h2>Team Adam</h2>
            {team2}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
