import React, { useState } from "react";

function Form() {
  const [person, setPerson] = useState({
    fname: "",
    lname: "",
    email: "",
    age: "",
  });

  const [people, setPeople] = useState([]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (person.fname && person.lname && person.email && person.age) {
      const newPerson = { ...person, id: new Date().getTime().toString() };
      setPeople([...people, newPerson]);
      setPerson({
        fname: "",
        lname: "",
        email: "",
        age: "",
      });
    }
  };
  return (
    <>
      <div className="container mt-2">
        <h2>React form</h2>
        <form className="form">
          <div className="form-group ">
            <label htmlFor="fname">Firstname:</label>
            <input
              type="text"
              className="form-control"
              name="fname"
              id="fname"
              value={person.fname}
              aria-describedby="helpId"
              placeholder=""
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lname">Lastname:</label>
            <input
              type="text"
              className="form-control"
              name="lname"
              id="lname"
              aria-describedby="helpId"
              placeholder=""
              value={person.lname}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
              aria-describedby="helpId"
              placeholder=""
              value={person.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="age">Age:</label>
            <input
              type="number"
              className="form-control"
              name="age"
              id="age"
              aria-describedby="helpId"
              placeholder=""
              value={person.age}
              onChange={handleChange}
            />
          </div>
          <button className="btn btn-secondary" onClick={submitHandler}>
            Add person
          </button>
        </form>

        <div className="container my-3">
          <div className="row">
            <div className="col">
              {people.map((per) => {
                return (
                  <ul
                    key={per.id}
                    className="list-group mt-4"
                    style={{ border: "2px solid #222" }}
                  >
                    <li className="list-group-item">Fname: {per.fname}</li>
                    <li className="list-group-item">Lname: {per.lname}</li>
                    <li className="list-group-item">Email: {per.email}</li>
                    <li className="list-group-item">Age: {per.age}</li>
                  </ul>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
