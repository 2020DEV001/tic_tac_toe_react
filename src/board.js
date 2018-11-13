import React from 'react';
import './index.css';
import Square from './square';

export default class Board extends React.Component {
    constructor(props){
        super(props);
    }

    addSquare() {
        return <Square />;
    }
    
    render() {
        return (
            <div>
                <div className="status">
                Player: {this.props.player}
                </div>
                <div className="board-row">
                    {this.addSquare()}
                    {this.addSquare()}
                    {this.addSquare()}
                </div>
                <div className="board-row">
                    {this.addSquare()}
                    {this.addSquare()}
                    {this.addSquare()}
                </div>
                <div className="board-row">
                    {this.addSquare()}
                    {this.addSquare()}
                    {this.addSquare()}
                </div>
            </div>
        );
    }
}