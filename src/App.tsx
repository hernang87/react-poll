import React from 'react';
import './App.css';
import { useAppSelector } from './store';
import { selectOptions } from './reducers/options';
import { Poll } from './components/Poll';

function App() {
  const values = useAppSelector(selectOptions);

  return (
    <div className="App">
      <header className="App-header">
        <Poll title="Choose a JS framework!" values={values} />
      </header>
    </div>
  );
}

export default App;
