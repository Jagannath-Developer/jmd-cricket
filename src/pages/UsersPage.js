import React, { useEffect, useState } from "react";
// import {} from 'react-router-dom'
import { baseUrl } from "../utils/api";

export default function UsersPage() {
  const [usersData, setUsersData] = useState([]);
  useEffect(() => {
    fetchUsers();
    // window.location.reload()
  }, []);
  const fetchUsers = async () => {
    await baseUrl
      .get("/users")
      .then((response) => {
        const data = response.data.data;
        setUsersData(data.reverse());
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
      // window.location.reload();
  };
  return (
    <div className="container">
      <div className="d-flex justify-content-center p-3 gap-3">
        <h5>Teams:</h5>
        <h5> {usersData.length}</h5>
      </div>
      <div className="mt-3">
        {usersData.map((user, index) => (
          <div className="card shadow-sm p-4 m-2" key={index}>
            <div className="text-center">
              <h4 className="card-title text-uppercase">{user.teamName}</h4>
              <hr />
            </div>
            <div className="d-flex gap-5">
              <h6 className="card-text">Captain: </h6>
              <h6 className="card-text text-uppercase">{user.captainName}</h6>
            </div>
            <div className="d-flex gap-5">
              <h6 className="card-text">Number: </h6>
              <h6 className="card-text text-uppercase">{user.captainNumber}</h6>
            </div>
            <div className="d-flex gap-5">
              <h6 className="card-text">Village: </h6>
              <h6 className="card-text text-uppercase">{user.village}</h6>
            </div>
            <div className="d-flex gap-5 mt-2">
              <h6 className="card-text">Shirt Color: </h6>
              <div
                className="card-text text-uppercase w-50 rounded-1"
                style={{ background: `${user.shirtColor}` }}
              ></div>
            </div>
            <div className="mt-3" id="headingOne">
              <button
                className="btn btn-primary"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapseExample${index}`}
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                Members Show
              </button>
            </div>
            <div
              className="collapse"
              id={`collapseExample${index}`}
              aria-labelledby="headingOne"
            >
              <div>
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Name</th>
                      <th scope="col">Mobile</th>
                      <th scope="col">Adhar</th>
                    </tr>
                  </thead>
                  <tbody>
                    {user.members.map((person, i) => (
                      <tr key={`${person.name + i}`}>
                        <th scope="row">{i + 1}</th>
                        <td>{person.name}</td>
                        <td>{person.mobile}</td>
                        <td>{person.adhar}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
