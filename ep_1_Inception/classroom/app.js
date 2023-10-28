// const heading = React.createElement(
//     'h1',
//     { id: 'heading' },
//     'Hello from React'
// )

// console.log(heading);

const heading = React.createElement(
    'div', { id: 'parent' }, [
        React.createElement('div', {id: 'child1'}, [
            React.createElement('h1', {}, 'I am an h1 tag'),
            React.createElement('h1', {}, 'I am an h1 tag')
        ]),
        React.createElement('div', {id: 'child2'}, [
            React.createElement('h1', {}, 'I am an h1 tag'),
            React.createElement('h1', {}, 'I am an h1 tag')
        ])
    ]
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading)

