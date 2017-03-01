import * as React from "react";
import * as ReactDOM from "react-dom";

import { TeamList } from "./TeamList";

class App extends React.Component<any, any>{
    render(){
        return <div className="pure-g">
            <div className="pure-u-1-3">
              <TeamList/>
            </div>
            <div className="pure-u-1-3">
              <button className="pure-button button-xlarge button-error">Fight!</button>
            </div>
              <TeamList/>
          </div>
    }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);