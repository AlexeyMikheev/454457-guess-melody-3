import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import ArtistQuestion from '../artist-question/artist-question.jsx';
import GenreQuestion from '../genre-question/genre-question.jsx';
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";

const playButtonHandler = () => { };

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {errorsCount} = props;
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <WelcomeScreen errorsCount={errorsCount} onPlayButtonClick={playButtonHandler} />
          </Route>
          <Route exact path="/dev-artist">
            <ArtistQuestion />
          </Route>
          <Route exact path="/dev-genre">
            <GenreQuestion />
          </Route>
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
