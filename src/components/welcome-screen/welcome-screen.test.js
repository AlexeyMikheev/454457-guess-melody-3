import React from "react";
import renderer from "react-test-renderer";
import WelcomeScreen from "./welcome-screen.jsx";
import {Settings} from '../../utils.js';

it(`Render App`, () => {
  const tree = renderer
    .create(<WelcomeScreen errorsCount={Settings.ERRORS_COUNT} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
