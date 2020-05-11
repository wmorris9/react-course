import React from 'react'

import Option from './Option'

export default class Options extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <button onClick={this.props.handleDeleteOptions}>Remove All</button>
                <ol>{this.props.options.map((option, index) => {
                    return (
                        <Option 
                            key={option} 
                            optionKey={option} 
                            optionText={option} 
                            handleDeleteOption={this.props.handleDeleteOption}
                        />
                    )
                })
                }</ol>
            </div>
        )
    }
}