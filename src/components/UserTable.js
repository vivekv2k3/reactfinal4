import React, { useEffect, useState } from "react";
import "./UserTable.css";
function UserTable() {
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch(`https://dummyjson.com/users`)
      .then((response) => response.json())
      .then((actualData) => {
        console.log(actualData);
        setData(actualData.users);
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="usertable">
      <center>
        <h1>Dummy Data</h1>
      </center>
      <table className="usertable1">
        <tr className="usertable2">
          <th className="usertable2">Sno</th>
          <th className="usertable2">Profile Pic</th>
          <th className="usertable2">First Name</th>
          <th className="usertable2">Last Name</th>
          <th className="usertable2">Gender</th>
          <th className="usertable2">E-mail</th>
          <th className="usertable2">Username</th>
          <th className="usertable2">Domain</th>
          <th className="usertable2">IP</th>
          <th className="usertable2">University</th>
        </tr>
        {data.map((item, index) => (
          <tr className="usertable2" key={index}>
            <td className="usertable2">{item.id}</td>
            <td className="usertable2">
              <img src={item.image} alt="" height={100} />
            </td>
            <td className="usertable2">{item.firstName}</td>
            <td className="usertable2">{item.lastName}</td>
            <td className="usertable2">{item.gender}</td>
            <td className="usertable2">{item.email}</td>
            <td className="usertable2">{item.username}</td>
            <td className="usertable2">{item.domain}</td>
            <td className="usertable2">{item.ip}</td>
            <td className="usertable2">{item.university}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default UserTable;
