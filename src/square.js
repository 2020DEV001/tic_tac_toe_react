import React from 'react';
import './index.css';

export default class Square extends React.Component {
    render() {
        return (
          
            <button className="square" >
                
			{this.props.value}
			</button>
        );
    }
}