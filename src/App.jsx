import React  from "react";
import Message from "./components/Message/Message.jsx";
import Wrapper from "./components/Wrapper/Wrapper.jsx";
import Counter from "./components/Counter/Counter.jsx";
import TaskList from "./components/TaskList/TaskList.jsx";

class App extends React.Component {
  render() {
    return (
        <div>
          <TaskList />
          <Counter start={5} />
          <Counter start={2} />
          <Counter start={1} />
          <Message />
          <Wrapper />
        </div>
    )
  }
}

export default App
