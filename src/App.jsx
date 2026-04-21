import React  from "react";
import Message from "./components/Message/Message.jsx";
import Wrapper from "./components/Wrapper/Wrapper.jsx";

class App extends React.Component {
  render() {
    return (
        <div>
          <Message />
          <Wrapper />
        </div>
    )
  }
}

export default App
