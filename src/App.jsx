import React from "react";
import "./App.css";
import { TaskApp } from "./components/apps/TaskApp";
import { ContextExample } from "./components/apps/ContextExample";

function StudentName({ name }) {
  return <div>Name: {name.firstName + " " + name.lastName}</div>;
}

function StudentDetail({ detail }) {
  const [firstName, setFirstName] = React.useState(detail.firstName);
  const [lastName, setLastName] = React.useState(detail.lastName);
  const [age, setAge] = React.useState(detail.age);

  const name = React.useMemo(
    () => ({
      firstName,
      lastName,
    }),
    [firstName, lastName]
  );
  return (
    <div>
      <div>
        First Name:
        <input onChange={(event) => setFirstName(event.target.value)} />
      </div>
      <div>
        Last Name:
        <input onChange={(event) => setLastName(event.target.value)} />
      </div>
      <div>
        Age:
        <input onChange={(event) => setAge(parseInt(event.target.value))} />
      </div>
      <StudentName name={name} />
      <div>Age: {age}</div>
    </div>
  );
}

function App() {
  return (
    <div>
      {/* <StudentDetail
        detail={{ firstName: "Abhishek", lastName: "Mittal", age: 20 }}
      /> */}
      <ContextExample />
    </div>
  );
}

export default App;
