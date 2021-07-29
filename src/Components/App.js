import React, {Suspense} from 'react';
import { Router, Switch } from 'react-router-dom';
import AppBar from './appBar/AppBar';

const App = () => {
    return (
        <AppBar />
        // <Suspense fallback={<h1>Загружаем...</h1>}></Suspense>
    );
}

export default App;