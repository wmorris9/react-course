// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

const appRoot = document.getElementById('app')

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer!'
}

const template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>
        <ol>
            <li>Item One</li>
            <li>Item Two</li>
        </ol>
    </div>
)

const user = {
    name: 'Weylin Morris',
    age: 23,
    location: 'Rexburg'
}

const templateTwo = (
    <div>
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {user.location}</p>
    </div>
)

ReactDOM.render(template, appRoot)