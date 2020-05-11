import React from 'react' 

export default class Action extends React.Component {
    render() {
        return (
            <button 
                onClick={this.props.handlePick} 
                disabled={!this.props.hasOptions}
                >What Should I Do?
            </button>
        )
    }
}