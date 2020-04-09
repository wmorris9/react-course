// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

const appRoot = document.getElementById('app')

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer!',
    options: [
        'One',
        'Two'
    ]
}

const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <ol>
            <li>Item One</li>
            <li>Item Two</li>
        </ol>
        {app.options.length > 0 ? <p>Here are your options</p> : <p>No Options</p>}
    </div>
)

const user = {
    name: 'Weylin Morris',
    age: 23,
    location: 'Artesia, NM'
}

const templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {user.age >= 18 && <p>Age: {user.age}</p>}
        {user.location && <p>Location: {user.location}</p>}
    </div>
)

ReactDOM.render(template, appRoot)