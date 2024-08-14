import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';

import ColorGenerator from '../component';

const mockHookResult = { color: jest.fn(), generateColor: jest.fn() };

jest.mock('../hook', () => jest.fn(() => mockHookResult));

describe('ColorGenerator', () => {
  it(`matches snapshot`, () => {
    const tree = render(<ColorGenerator />);

    expect(tree).toMatchSnapshot();
  });
  it(`clicking on screen runs generateColor fn`, () => {
    const tree = render(<ColorGenerator />);

    const btn = screen.getByTestId('ScreenBtn');

    fireEvent.press(btn);

    expect(mockHookResult.generateColor).toHaveBeenCalled();
  });
});
