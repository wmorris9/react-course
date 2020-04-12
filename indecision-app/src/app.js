class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision'
        const subtitle = 'Put your life in the hands of a computer!'
        const options = [1, 2, 3]

        return (
            <div>
                <Header 
                    title={title} 
                    subtitle={subtitle}
                />
                <Action />
                <Options options={options}/>
                <AddOption />
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        )
    }
}

class Action extends React.Component {
    handlePick() {
        alert('handlePick')
    }
    render() {
        return (
            <button onClick={this.handlePick}>What Should I Do?</button>
        )
    }
}

class Options extends React.Component {
    constructor(props) {
        super(props)
        this.handleRemoveAll = this.handleRemoveAll.bind(this)
    }
    handleRemoveAll() {
        console.log(this.props.options)
    }
    render() {
        console.log(this.props.options.length)
        return (
            <div>
                <button onClick={this.handleRemoveAll}>Remove All</button>
                <ol>{this.props.options.map((option, index) => <Option key={option} optionKey={option} option={option} />)}</ol>
            </div>
        )
    }
}

class Option extends React.Component {
    render() {
        return (
            <li key={this.props.optionKey}>{this.props.option}</li>
        )
    }
}

class AddOption extends React.Component {
    handleAddOption(e) {
        e.preventDefault()
        if (e.target.elements.option.value.trim()) {
            console.log(e.target.elements.option.value.trim())
            e.target.elements.option.value = ''
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))