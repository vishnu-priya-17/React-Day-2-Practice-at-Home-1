import React, {Component} from "react";

export class Book extends Component {
    render()
    {
        return (
        <div>
            <p>Book: {this.props.book}</p>
            <p>Author: {this.props.author}</p>
        </div>
        );
    }
}

export default Book;