import React, { useState } from "react";

const App = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const handleForm = (e) => {
    e.preventDefault();
    let pay = { name: name, email: email, pass: pass };
    let newData = [...data, pay];
    setData(newData);
  };
  console.log(data);
  return (
    <div>
      <form onSubmit={handleForm}>
        <input
          type="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPass(e.target.value)}
        />
        <input
          type="text"
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
        />
        <input type="submit" value="submit" />
      </form>
      <div>
        {data?.map((e) => (
          <div key={e.name}>
            <p>{e.name}</p>
            <p>{e.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
