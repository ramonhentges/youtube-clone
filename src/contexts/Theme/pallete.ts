import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    fontFamily: string;
    pallete: {
      background: string;
      paper: string;
      divider: string;
      hover: string;
      inputFocus: string;
    };
    text: {
      primary: string;
      secondary: string;
    };
    scrollBar: {
      track: {
        color: string;
      };
      thumb: {
        color: string;
      };
    };
  }
}

export const light: DefaultTheme = {
  fontFamily: 'Roboto, sans-serif',
  pallete: {
    background: '#f9f9f9',
    paper: '#ffffff',
    divider: '#e5e5e5',
    hover: '#f2f2f2',
    inputFocus: '#1c63b9'
  },
  text: {
    primary: '#030303',
    secondary: '#7a7a7a'
  },
  scrollBar: {
    track: {
      color: 'rgba(0,0,0,0.00)'
    },
    thumb: {
      color: 'rgba(0,0,0,.1)'
    }
  }
};

export const dark: DefaultTheme = {
  fontFamily: 'Roboto, sans-serif',
  pallete: {
    background: '#181818',
    paper: '#202020',
    divider: '#303030',
    hover: '#383838',
    inputFocus: '#1c63b9'
  },
  text: {
    primary: '#ffffff',
    secondary: '#aaaaaa'
  },
  scrollBar: {
    track: {
      color: 'rgba(0,0,0,0.00)'
    },
    thumb: {
      color: '#d5d5d5'
    }
  }
};
