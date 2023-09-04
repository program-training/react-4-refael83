
import Grandpa from './Grandpa/Grandpa';
import MoodContextProvider from './themeContext';
import ThemeSwitcher from './ThemeSwitcher/ThemeSwitcher';
import BackgroundSwitcher from './BackgroundSwitcher/BackgroundSwitcher';

function App() {
  return (
    <>
      <Grandpa/>
      <MoodContextProvider>
         <ThemeSwitcher/>
         <BackgroundSwitcher></BackgroundSwitcher>
      </MoodContextProvider>
    </>
  );
}

export default App;
