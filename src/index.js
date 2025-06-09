// This file serves as the main entry point for the JavaScript application, rendering components and managing application state.

import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Dashboard from './components/ui/Dashboard';

const App = () => {
    return (
        <div>
            <Dashboard />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));