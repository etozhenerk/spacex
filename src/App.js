import React from "react";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Footer } from "./components/Footer/Footer";
import { Features } from "./components/Features/Features";
import "./style.css";

class App extends React.Component {
  state = {
    rocket: 'Falcon 1',
  };

  render() {
    return (
      <>
        <Header />
        <Main rocket={this.state.rocket}/>
        <Features />
        <Footer />
      </>
    );
  }
}

export default App;
