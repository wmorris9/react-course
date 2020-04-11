
let count = 0

const addOne = () => {
    count++
    renderCounterApp()
}

const removeOne = () => {
    count--
    renderCounterApp()
}

const resetCount = () => {
    count = 0
    renderCounterApp()
}

const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={(addOne)}>+1</button>
            <button onClick={(removeOne)}>-1</button>
            <button onClick={(resetCount)}>Reset</button>
        </div>
    )

    ReactDOM.render(templateTwo, appRoot)
}

renderCounterApp()