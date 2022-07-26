import React from "react";
import people from "./data/got.json";
import withSearch from "./WithSearch";

const People = (props) => {
  let { searchTerm } = props;
  let allPeople = people.reduce((acc, cv) => {
    acc = acc.concat(cv.people);
    return acc;
  }, []);

  let filteredPeople = allPeople.filter((person) =>
    person.name.toLowerCase().includes(searchTerm)
  );
  return (
    <>
      <ul className="people">
        {filteredPeople.map((sp, i) => (
          <SinglePerson key={i} {...sp} />
        ))}
      </ul>
    </>
  );
};

function SinglePerson(props) {
  return (
    <li className="card">
      <div className="info">
        <img src={props.image} alt={props.name} />
        <h2>{props.name}</h2>
      </div>
      <p>{props.description}</p>
      <a href={props.wikiLink}>Learn More!</a>
    </li>
  );
}

export default withSearch(People);
