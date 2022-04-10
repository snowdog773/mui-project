import React, { Component } from "react";
import Countdown from "./Countdown";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";

class App extends Component {
  state = {};

  render() {
    return (
      <>
        <BrowserRouter>
          <header>
            <h1>It's The Final Countdown</h1>
            <nav>
              <Stack spacing={2}>
                <Button variant="outlined">
                  <Link to="/12/25">Xmas</Link>
                </Button>
                <Button variant="outlined">
                  <Link to="/04/29">My Birthday</Link>
                </Button>
                <Button variant="outlined">
                  <Link to="/10/31">Halloween</Link>
                </Button>
              </Stack>
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
