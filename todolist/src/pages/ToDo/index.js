import React, { useState, useEffect } from "react";

import { Container, Header, Content, InputDiv, List } from "./styles";

function ToDo() {
  const [tasks, setTasks] = useState([]);
  const [taskInfo, setTaskInfo] = useState("");

  function handleAddTasks() {
    const data = {
      title: taskInfo,
      confirmed: false,
    };

    setTasks([...tasks, data]);
  }

  function handleConfirmed(task) {
    const findTask = tasks.findIndex((e) => e.title === task.title);

    tasks[findTask].confirmed = true;
  }

  return (
    <Container>
      <Header>
        <h2>Tasks</h2>
      </Header>

      <Content>
        <InputDiv>
          <input
            type="text"
            placeholder="What do you want to do?"
            onChange={(e) => setTaskInfo(e.target.value)}
          />
          <button type="button" onClick={handleAddTasks}>
            Save
          </button>
        </InputDiv>
        <List>
          <ul>
            {tasks.map((task, i) => (
              <li key={i}>
                <button
                  type="button"
                  confirmed={task.confirmed}
                  onClick={() => handleConfirmed(task)}
                ></button>
                {task.title}
              </li>
            ))}
          </ul>
        </List>
      </Content>
    </Container>
  );
}

export default ToDo;
