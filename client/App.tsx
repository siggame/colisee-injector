import * as React from "react";
import * as $ from "jquery";

import {TeamList, TeamListProps, TeamListState} from "./TeamList";

interface AppState{
    selected_teams: number[];
}

export class App extends React.Component<void, AppState>{
    constructor(props){
        super(props);
        this.state = {selected_teams: [0,0]};
        this.changeTeamList = this.changeTeamList.bind(this);
    }
    changeTeamList(teamId: number , index: number){
        let newSelectedTeams = this.state.selected_teams;
        newSelectedTeams[index] = teamId;
        this.setState({
            selected_teams: newSelectedTeams
        });
    }
    inject(){
        const body = {
            competitorA: this.state.selected_teams[0],
            competitorB: this.state.selected_teams[1]
        };
        $.post("/api/inject", body);
    }
    render(){
        return <div className="pure-g">
            <div className="pure-u-1-3"><TeamList onChange={(s)=>{this.changeTeamList(s,0)}}/></div>
            <div className="pure-u-1-3"><button onClick={()=>{this.inject()}}>Fight!</button></div>
            <div className="pure-u-1-3"><TeamList onChange={(s)=>{this.changeTeamList(s,1)}}/></div>

        </div>
    }
}

/*
https://facebook.github.io/react/docs/lifting-state-up.html <<<<< look at this later
class App extends React.Component<any, any>{
    fight(team1Id, team2Id) {
    	const t1 = $("#rightList").selected_team;
      const t2 = $("#leftList").selected_team;
    	...
      
      // validation
      
      
      // if all good
      jquery.send(api/inject);
    }
    render(){
        return <div className="pure-g">
            <div className="pure-u-1-3">
              <TeamList id="leftList"/>
            </div>
            <div className="pure-u-1-3">
              <button className="pure-button button-xlarge button-error" onClick={()->fight()}>Fight!</button> <- put selected team here
            </div>
              <TeamList id="rightList"/> <- get selected_team from here
          </div>
    }
}*/