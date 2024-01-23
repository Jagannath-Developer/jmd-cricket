import React, { useState } from "react";
import "../index.css";
import { baseUrl } from "../utils/api";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [teamName, setTeamName] = useState("");
  const [captainName, setCaptainName] = useState("");
  const [captainNumber, setCaptainNumber] = useState("");
  const [village, setVillage] = useState("");
  const [shirtColor, setShirtColor] = useState("");

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [adhar, setAdhar] = useState("");
  const [membersList, setMembersList] = useState([]);

  const history = useNavigate();

  const addMember = async () => {
    
    const member = {
      name: name,
      mobile: mobile,
      adhar: adhar,
    };
    console.log(member);
    setMembersList([...membersList, member]);
    setName("");
    setMobile("");
    setAdhar("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (membersList.length < 8) {
      alert("Minimum 8 members required for Team");
    } else {
      addToServer();
    }
  };
  const addToServer = async () => {
    const body = {
      teamName: teamName,
      captainName: captainName,
      captainNumber: captainNumber,
      village: village,
      shirtColor: shirtColor,
      members: membersList,
    };
    await baseUrl
      .post("/register", body)
      .then(() => {
        console.log("add Successfully");
        setIsLoading(true);
        setTimeout(() => {
            history("/");
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const Loading = () => (
    <div
      className="mt-5"
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <div className="d-flex  align-items-center">
        <strong>Loading...</strong>
        <div
          className="spinner-border ml-auto"
          role="status"
          aria-hidden="true"
        ></div>
      </div>
    </div>
  );
  return (
    <div className="container">
      {isLoading ? (
        <Loading />
      ) : (
        <div className="p-2 ">
          <div className="text-center mt-2">
            <h4>Register</h4>
          </div>
          <div className="pt-2">
            <div className="input-group mt-3 has-validation">
              <span
                className="input-group-text bi bi-bezier"
                id="basic-addon1"
              ></span>
              <input
                type="text"
                className="form-control text-uppercase"
                placeholder="Team name"
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
                required
              />
            </div>
            <div className="input-group mt-3">
              <span
                className="input-group-text bi bi-person-circle"
                id="basic-addon1"
              ></span>
              <input
                type="text"
                className="form-control text-capitalize"
                placeholder="Captain name"
                value={captainName}
                onChange={(e) => setCaptainName(e.target.value)}
                required
              />
            </div>
            <div className="input-group mt-3">
              <span
                className="input-group-text bi bi-phone"
                id="basic-addon1"
              ></span>
              <input
                type="number"
                className="form-control"
                placeholder="Captain mobile number"
                value={captainNumber}
                onChange={(e) => setCaptainNumber(e.target.value)}
                required
              />
            </div>
            <div className="input-group mt-3">
              <span
                className="input-group-text bi bi-geo-alt"
                id="basic-addon1"
              ></span>
              <input
                type="text"
                className="form-control text-capitalize"
                placeholder="village or city name"
                value={village}
                onChange={(e) => setVillage(e.target.value)}
                required
              />
            </div>
            {/* <div className="input-group mt-3">
            <span
              className="input-group-text bi bi-palette"
              id="basic-addon1"
            ></span>
            <input
              type="text"
              className="form-control"
              placeholder="shirt color"
              value={shirtColor}
              onChange={(e) => setShirtColor(e.target.value)}
            />
          </div> */}
            <div className="mt-3">
              <label htmlFor="state" className="form-label mx-2 fw-bold ">
                <span className="bi bi-palette"></span> Shirt Color
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
                id="quality"
                required
                value={shirtColor}
                onChange={(e) => setShirtColor(e.target.value)}
              >
                <option defaultValue="">Choose...</option>
                <option value="Black">Black</option>
                <option value="White">White</option>
                <option value="Blue">Blue</option>
                <option value="Orange">Orange</option>
                <option value="Yellow">Yellow</option>
                <option value="Red">Red</option>
                <option value="Grey">Grey</option>
                <option value="Green">Green</option>
                <option value="Pink">Pink</option>
                <option value="Purple">Purple</option>
                <option value="Silver">Silver</option>
              </select>
            </div>
            <div className="py-2">
              {/* <hr className="hr border border-2 border-dark" /> */}
            </div>
            <div>
              <div>
                <hr />
                <h4>Team member details (minimum 8)</h4>
                <hr />
              </div>
              <div className="input-group mt-3 has-validation">
                <span
                  className="input-group-text bi bi-person-circle"
                  id="basic-addon1"
                ></span>
                <input
                  type="text"
                  className="form-control text-capitalize"
                  placeholder="full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="input-group mt-3">
                <span
                  className="input-group-text bi bi-phone"
                  id="basic-addon1"
                ></span>
                <input
                  type="number"
                  className="form-control"
                  placeholder="mobile number"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  required
                />
              </div>
              <div className="input-group mt-3">
                <span
                  className="input-group-text bi bi-card-heading"
                  id="basic-addon1"
                ></span>
                <input
                  type="number"
                  className="form-control"
                  placeholder="adhar card number"
                  value={adhar}
                  onChange={(e) => setAdhar(e.target.value)}
                />
              </div>
              <div className="mt-3 d-flex justify-content-end">
                <button className="btn btn-warning w-50" onClick={addMember}>
                  Add Member
                </button>
              </div>
            </div>
            <div>
              <div>
                <hr />
                <h5>Members List ({membersList.length})</h5>
                <hr />
              </div>
              <div>
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Name</th>
                      <th scope="col">Mobile</th>
                      <th scope="col">Adhar</th>
                      <th scope="col">Del</th>
                    </tr>
                  </thead>
                  <tbody>
                    {membersList.map((person, index) => (
                      <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{person.name}</td>
                        <td>{person.mobile}</td>
                        <td>{person.adhar}</td>
                        <td
                          onClick={() => {
                            membersList.splice(index, 1);
                            setMembersList((prev) => [...prev]);
                          }}
                        >
                          <span className="bi bi-trash3-fill text-danger"></span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="my-5">
              <button className="btn btn-primary w-100" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
