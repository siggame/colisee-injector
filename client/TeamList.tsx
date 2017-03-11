import * as React from "react";
import * as $ from "jquery";

export interface TeamListState{
    teams: {id: number, name: string}[];
    selected_team: number | null;
};

export interface TeamListProps{
    onChange: (state: number) => void;
};

export class TeamList extends React.Component<TeamListProps, TeamListState>{
    constructor(props){
        super(props);
        this.state = {teams: [], selected_team: null};
        $.getJSON( "/api/teams", data => this.setState({teams: data}) );

        this.selectTeam = this.selectTeam.bind(this);

    }
    selectTeam(teamId: number){
        this.setState({
            selected_team: teamId
        })
        this.props.onChange(teamId);
    }
    render(){
        const teamElements = this.state.teams.map((team)=>{
            return <div><button onClick={()=>this.selectTeam(team.id)}>{team.name}</button><br/></div>
        })
        return <div>{teamElements}</div>
    }
}
//find how to change team null to team id when onClick is pressed
//put calls in fight button
//make real calls to api
//add authentication
