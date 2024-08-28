import { StatusBar } from 'react-native';
import { Routes } from '@routes/index';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Players } from '@screens/Players';
import { Loading } from '@components/Loading';
import { ThemeProvider } from 'styled-components';

import theme from '@theme/index';

export default function App() {

  const [fontsLoaded] = useFonts({Roboto_400Regular, Roboto_700Bold})

  return (
    <>
      <ThemeProvider theme={theme}>
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor="transparent"
        />
        { fontsLoaded ? <Routes /> : <Loading /> }
      </ThemeProvider>
    </>
  );
}
