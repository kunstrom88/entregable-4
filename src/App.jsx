import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

const BASE_URL = "https://users-crud.academlo.tech/";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}users/`)
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="App">
      <h1>Users CRUD</h1>

      <section>
        {users.map((user) => (
          <article key={user.id}>
            <h3>
              {user.first_name} {user.last_name}
            </h3>
            <hr />
            <ul>
              <li>
                <span>Email</span> {user.email}
              </li>
              <li>
                <span>Birthday</span> {user.birthday}
              </li>
            </ul>
            <hr />
          </article>
        ))}
      </section>
    </div>
  );
}

export default App;
