import Card from "./components/Card";
import ThemeSwitcher from "./components/ThemeSwitcher";
import Title from "./components/Title";
import ThemeSwitchProvider from "./context/ThemeSwitchProvider";

function App() {
  return (
    <ThemeSwitchProvider>
      <Title />
      <ThemeSwitcher />
      <Card />
    </ThemeSwitchProvider>
  );
}

export default App;
