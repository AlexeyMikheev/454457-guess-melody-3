import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import WelcomeScreen from "./welcome-screen.jsx";
import {Settings} from "../../utils.js";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should welcome button be pressed`, () => {
  const onPlayButtonClick = jest.fn();

  const welcomeComponent = shallow(<WelcomeScreen errorsCount={Settings.ERRORS_COUNT} onPlayButtonClick={onPlayButtonClick} />);

  const welcomeButton = welcomeComponent.find(`button.welcome__button`);

  welcomeButton.simulate(`click`);

  expect(onPlayButtonClick).toHaveBeenCalledTimes(1);
});
