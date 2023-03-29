import React from "react";
import Book from "./react9/Book";

export class App extends React.Component {
    render()
    {
        return (
        <div>
        <Book book="The India Story" author="Bimal Jalal"/>
        <Book book="Listen to Your Heart: The London Adventure" author="Ruskin Bond"/>
        <Book book="Business of Sports: The Winning Formula for Success" author="Vinit Karnik"/>
        <Book book="A Place Called Home" author="	Preeti Shenoy"/>
        <Book book="Modi @20: Dreams Meeting Delivery" author="	VP Venkaiah Naidu"/>
        </div>
        );
    }
}

export default App;
