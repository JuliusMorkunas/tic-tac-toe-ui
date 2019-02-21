import React from 'react';
import renderer from 'react-test-renderer';
import Game from './Game';

it('Game renders correctly', () => {
  const tree = renderer.create(<Game />).toJSON();
  expect(tree).toMatchSnapshot();
});
