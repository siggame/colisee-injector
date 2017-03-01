import * as React from "react";

export class TeamList extends React.Component<any, any>{
    render(){
        const fakeData = [
            {name: "team1", id: 1},
            {name: "team2", id: 2},
            {name: "team3", id: 3},
            {name: "team4", id: 4},
            {name: "team5", id: 5}

        ];
        return <h1> Hello, {this.props.name}</h1>
    }
}
