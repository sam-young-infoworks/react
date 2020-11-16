import React from 'react';
import { useEffect, useState } from 'react';

import './App.css';
import Boop from './components/boop/Boop';
import Button from './components/button/Button';
import ShiftBy from './hooks/shiftBy/shiftBy';

function App() {
  const [date, setDate] = useState(null);

  useEffect(() => {
    async function getDate() {
      const res = await fetch('/api/date');
      const newDate = await res.text();
      setDate(newDate);
    }
    getDate();
  }, []);

  return (
    <main>
      <ShiftBy x={-3}>
        <h1>Create React App + Go API</h1>
      </ShiftBy>
      <p>
        <a
          href="https://github.com/vercel/vercel/tree/master/examples/create-react-app"
          target="_blank"
          rel="noreferrer noopener"
        >
          This project
        </a>{' '}
        was bootstrapped with{' '}
        <a href="https://facebook.github.io/create-react-app/">
          Create React App
        </a>{' '}
        and contains three directories, <code>/public</code> for static assets,{' '}
        <code>/src</code> for components and content, and <code>/api</code>{' '}
        which contains a serverless <a href="https://golang.org/">Go</a>{' '}
        function. See{' '}
        <a href="/api/date">
          <code>api/date</code> for the Date API with Go
        </a>
        .
      </p>
      {/* <br /> */}
      {/* <h2>The date according to Go is:</h2>
      <p>{date ? date : 'Loading date...'}</p> */}

      {/* <section>
        <ShiftBy x={-3}>
          <h1>Hello world</h1>
        </ShiftBy>
        <p>This is a paragraph below a heading</p>
      </section> */}

      <Boop x={2} y={2}>howdy</Boop>

      {/* <Button /> */}
    </main>
  );
}

export default App;
