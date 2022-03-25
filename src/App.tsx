import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import ChineseLevelSelectPage from "./Chinese/LevelSelectPage";
import ChallengePage from "./Chinese/ChallengePage";
import LanguageSelectPage from "./Home/LanguageSelectPage";
import "./App.css";

function App() {
  return (
      <div className="App">
        <Route exact path="/">
          <LanguageSelectPage />
        </Route>
        <Route exact path="/Chinese">
          <ChineseLevelSelectPage />
        </Route>
        <Route exact path="/Chinese/:level">
          <ChallengePage />
        </Route>
      </div>
  );
}

export default App