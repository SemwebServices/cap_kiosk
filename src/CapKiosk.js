import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


function CapKiosk() {
  return (
    <Router>
      <div>
        <h1>CAP Kiosk</h1>
        <Header/>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Header() {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  );
}

export default CapKiosk;


