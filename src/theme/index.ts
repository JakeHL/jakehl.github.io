import baseStyled, { ThemedStyledInterface } from 'styled-components';

import Colors from './colors';
import Fonts from './fonts';
import Sizes from './sizes';
import Breakpoints from './breakpoints';

const Theme = {
  Colors,
  Fonts,
  Sizes,
  Breakpoints,
};

export default Theme;
export type ThemeType = typeof Theme;
export const styled = baseStyled as ThemedStyledInterface<ThemeType>;
