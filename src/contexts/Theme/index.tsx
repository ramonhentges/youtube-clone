import React, { useContext, useEffect, useState } from 'react';
import { dark, light } from './pallete';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

type ContextProps = {
  changeTheme: () => void;
  mode: 'light' | 'dark';
};

const GlobalStyle = createGlobalStyle`
  main {
    font-family: ${(props) => props.theme.fontFamily};
    background-color: ${(props) => props.theme.pallete.background};
    min-height: 100vh;
  }
  body {
    display: flex;
    flex-direction: column;
    margin: 0;
    min-height: 100%;
    font-family: ${(props) => props.theme.fontFamily};
    background-color: ${(props) => props.theme.pallete.background};
    &::-webkit-scrollbar {
              width: 6px;
            }
    &::-webkit-scrollbar-track {
              background: ${(props) => props.theme.scrollBar.track.color};
            }
    &::-webkit-scrollbar-thumb {
              background-color: ${(props) => props.theme.scrollBar.thumb.color};
              border-radius: 8px;
            }
  }
  svg {
    color: ${(props) => props.theme.text.primary};
    margin-right: 5px;
  }
  h3 {
    color: ${(props) => props.theme.text.secondary};
    font-size: 14px;
    padding: 0 24px;
  }
`;

const MyThemeContext = React.createContext<ContextProps>({} as ContextProps);

export const MyThemeProvider: React.FC = ({ children }) => {
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const theme = React.useMemo(() => (mode === 'light' ? light : dark), [mode]);
  useEffect(() => {
    if (localStorage.getItem('colorMode') === null) {
      if (
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
      ) {
        localStorage.setItem('colorMode', 'dark');
      } else {
        localStorage.setItem('colorMode', 'light');
      }
    }
    setMode(localStorage.getItem('colorMode') === 'light' ? 'light' : 'dark');
  }, []);
  const changeTheme = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    localStorage.setItem('colorMode', newMode);
    setMode(newMode);
  };
  return (
    <MyThemeContext.Provider value={{ mode, changeTheme }}>
      <ThemeProvider theme={theme}>
        {children}
        <GlobalStyle />
      </ThemeProvider>
    </MyThemeContext.Provider>
  );
};

export const useMyTheme = () => useContext(MyThemeContext);
