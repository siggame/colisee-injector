import * as React from "react";
import * as ReactDOM from "react-dom";

import { TeamList } from "./TeamList";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { App } from "./App";

class MainApp extends React.Component<any, any>{
    render(){
        return <div> 
            <Header />
            <App />
            <Footer />
          </div>
    }
}

ReactDOM.render(
    <MainApp/>,
    document.getElementById('root')
);