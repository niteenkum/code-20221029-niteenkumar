import Footer from "./Components/Footer";
import Header from "./Components/Header";
import AboutUsScreen from "./Screens/AboutUsScreen";
import MainScreen from "./Screens/MainScreen";
import SecondScreen from "./Screens/SecondScreen";

function App() {
  return (
    <div>
      {/* <MainScreen></MainScreen> */}
      <Header/>
      <MainScreen/>
      <SecondScreen/>
      <AboutUsScreen/>
      <Footer/>

    </div>
  );
}

export default App;
