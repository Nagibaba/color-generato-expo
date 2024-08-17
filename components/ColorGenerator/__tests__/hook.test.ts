import { act } from '@testing-library/react-native';
import { renderHook } from '@testing-library/react-hooks';

import useContainer from '../hook';

describe('ColorGenerator hook', () => {
  let result: any = null;
  beforeEach(() => {
    ({ result } = renderHook(() => useContainer()));

    jest.clearAllMocks();
  });

  it(`matches snapshot`, () => {
    expect(result.current).toMatchSnapshot();
  });

  it(`initial color is different from any hex color`, () => {
    const color = result.current.color;
    expect(color).toBe('white');
  });

  it(`running generateColor changes the color`, () => {
    const color = result.current.color;

    act(result.current.generateColor);

    expect(result.current.color).not.toBe(color);
  });
});
