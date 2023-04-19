import React from "react";
import "../components/general.css";

const Sections = (props) => {
  console.log(props);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Имя</th>
            <th>Фамилия</th>
            <th>Возраст</th>
            <th>Айди</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.users[0].name}</td>
            <td>{props.users[0].lastName}</td>
            <td>{props.users[0].age}</td>
            <td>{props.users[0].id}</td>
          </tr>
          <tr>
            <td>{props.users[1].name}</td>
            <td>{props.users[1].lastName}</td>
            <td>{props.users[1].age}</td>
            <td>{props.users[1].id}</td>
          </tr>
          <tr>
            <td>{props.users[2].name}</td>
            <td>{props.users[2].lastName}</td>
            <td>{props.users[2].age}</td>
            <td>{props.users[2].id}</td>
          </tr>
          <tr>
            <td>{props.users[3].name}</td>
            <td>{props.users[3].lastName}</td>
            <td>{props.users[3].age}</td>
            <td>{props.users[3].id}</td>
          </tr>
          <tr>
            <td>{props.users[4].name}</td>
            <td>{props.users[4].lastName}</td>
            <td>{props.users[4].age}</td>
            <td>{props.users[4].id}</td>
          </tr>
          <tr>
            <td>{props.users[5].name}</td>
            <td>{props.users[5].lastName}</td>
            <td>{props.users[5].age}</td>
            <td>{props.users[5].id}</td>
          </tr>
          <tr>
            <td>{props.users[6].name}</td>
            <td>{props.users[6].lastName}</td>
            <td>{props.users[6].age}</td>
            <td>{props.users[6].id}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Sections;
