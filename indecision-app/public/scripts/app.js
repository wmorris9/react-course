'use strict';

// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

var appRoot = document.getElementById('app');

var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer!',
    options: ['One', 'Two']
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item One'
        ),
        React.createElement(
            'li',
            null,
            'Item Two'
        )
    ),
    app.options.length > 0 ? React.createElement(
        'p',
        null,
        'Here are your options'
    ) : React.createElement(
        'p',
        null,
        'No Options'
    )
);

var user = {
    name: 'Weylin Morris',
    age: 23,
    location: 'Artesia, NM'
};

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? user.name : 'Anonymous'
    ),
    user.age >= 18 && React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    user.location && React.createElement(
        'p',
        null,
        'Location: ',
        user.location
    )
);

ReactDOM.render(template, appRoot);

var mulitplier = {
    numbers: [1, 2, 3, 4, 5],
    multiplyBy: 7,
    multiply: function multiply() {
        var _this = this;

        return this.numbers.map(function (number) {
            return number * _this.multiplyBy;
        });
    }
};

console.table(mulitplier.multiply());
