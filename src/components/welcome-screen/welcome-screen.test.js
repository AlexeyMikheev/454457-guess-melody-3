import React from "react";
import renderer from "react-test-renderer";
import WelcomeScreen from "./welcome-screen.jsx";
import {Settings} from '../../utils.js';

const playButtonHandler = () => {};

it(`Render App`, () => {
  const tree = renderer
    .create(<WelcomeScreen errorsCount={Settings.ERRORS_COUNT} onPlayButtonClick={playButtonHandler} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
