import React from 'react'

import AddOption from './AddOption'
import Options from './Options'
import Action from './Action'
import Header from './Header'
import OptionModal from './OptionModal'

export default class IndecisionApp extends React.Component {
    state = {
        options: []
    }
    handleDeleteOptions = () => {
        this.setState(() => { 
            return {
                options: [],
                selectedOption: undefined
            }
        })
    }
    handleDeleteOption = (optionToDelete) => {
        this.setState((prevState) => {
            return {
                options: prevState.options.filter((option) => option != optionToDelete)
            }
        })
    }
    handleClearSelectedOption = () => {
        this.setState(() => {
            return {
                selectedOption: undefined
            }
        })
    }
    handlePick = () => {
        this.setState(() => {
            return {
                selectedOption: this.state.options[Math.floor(Math.random() * this.state.options.length)]
            }
        })
    }
    handleAddOption = (option) => {
        if (!option) {
            return 'Please enter an option!'
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists!'
        }
        this.setState((prevState) => {
            return {
                options: [ ...prevState.options, option ]
            }
        })
    }
    render() {
        const title = 'Indecision'
        const subtitle = 'Put your life in the hands of a computer!'

        return (
            <div>
                <Header 
                    title={title} 
                    subtitle={subtitle}
                />
                <Action 
                    hasOptions={this.state.options.length > 0} 
                    handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                    handleAddOption={this.handleAddOption}
                />
                <AddOption 
                    handleAddOption={this.handleAddOption}
                />
                <OptionModal 
                    selectedOption={this.state.selectedOption}
                    handleClearSelectedOption={this.handleClearSelectedOption}
                />
            </div>
        )
    }
}