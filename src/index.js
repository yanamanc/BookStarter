import ReactDOM from 'react-dom';
import React from 'react';

class Hello extends React.Component {
    render() {
        return <div>Leha</div>
    }
}

ReactDOM.render (
    <Hello />,
    document.getElementById('root')
);
