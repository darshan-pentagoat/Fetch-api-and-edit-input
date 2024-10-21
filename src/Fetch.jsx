import { useState, useEffect } from "react";
const Fetch = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        return res.json();
      })
      .then((data) => setUser(data));
  }, []);

  return (
    <>
      {user.map((users) => (
        <p>{users.name}</p>
      ))}
    </>
  );
};
export default Fetch;
