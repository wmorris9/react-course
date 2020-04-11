const appRoot = document.getElementById('app')

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer!',
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault()

    const option = e.target.elements.option.value

    if (option) {
        app.options.push(option)
        render()
        e.target.elements.option.value = ''
    }
}

const onRemoveAll = () => {
    app.options = []
    render()
}

const onMakeDecision = () => {
        alert(app.options[Math.floor((Math.random() * app.options.length))])
}

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            {app.options.length > 0 ? <p>Here are your options</p> : <p>No Options</p>}
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What Should I Do?</button>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
            {app.options.map((option, index) => (<li key={option + index}>{option}</li>))}
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    )
    
    ReactDOM.render(template, appRoot)
}

render()