import UserInfo from "./components/UserInfo";
import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";
function App() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        setUser(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="App">
      <UserInfo data={user} />
    </div>
  );
}

export default App;
