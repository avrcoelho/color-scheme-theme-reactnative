import React, {useEffect, useState} from 'react';
import {useColorScheme} from 'react-native';
import {ThemeProvider} from 'styled-components/native';

import {Container, Icon, Author} from './styles';
import themeScheme from './themes';

const App = () => {
  const [theme, setTheme] = useState(themeScheme.light);
  const colorScheme = useColorScheme();

  useEffect(() => {
    setTheme(colorScheme === 'light' ? themeScheme.light : themeScheme.dark);
  }, [colorScheme]);

  console.log(themeScheme.light);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Icon name="github" size={40} />
        <Author>/avrcoelho</Author>
      </Container>
    </ThemeProvider>
  );
};

export default App;
