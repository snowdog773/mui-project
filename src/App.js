import React, { Component } from "react";
import Countdown from "./Countdown";
import Button from "@mui/material/Button";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

class App extends Component {
  state = {};

  render() {
    return (
      <>
        <BrowserRouter>
          <header>
            <h1>Countdown to Date</h1>
            <nav>
              <Link to="/12/25">Xmas</Link>
              <Link to="/04/29">My Birthday</Link>
              <Link to="/10/31">Halloween</Link>
            </nav>
          </header>
          <main>
            <Routes>
              <Route path="/:month/:day" element={<Countdown />} />
            </Routes>
          </main>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
