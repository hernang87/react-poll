import React from 'react';
import './App.css';
import { useAppSelector } from './store';
import { selectPollOptions } from './reducers/poll-options';
import { Poll } from './components/Poll';

function App() {
  const values = useAppSelector(selectPollOptions);

  return (
    <div className="App">
      <header className="App-header">
        <Poll title="Choose a JS framework!" options={values} />
      </header>
    </div>
  );
}

export default App;
