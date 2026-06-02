import { useState } from "react";
import "./Country.css";

const Country = ({ count, setCount, handleVisitedCountries, country }) => {
  const name = country.name.common;
  const official_name = country.name.official;
  const flagimg = country.flags.flags.png;
  const population = country.population.population;
  const area = country.area.area;

  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
    handleVisitedCountries(country);
  };

  return (
    <div className={`country ${visited && "country-visited"}`}>
      <img src={flagimg} alt="" />
      <h1>Name:{name}</h1>
      <h2>Official Name:{official_name}</h2>
      <h2>Population: {population}</h2>
      <h2>
        Area :{area}
        {area > 30000 ? " Big country" : " Small Country"}
      </h2>
      <button className="button" onClick={handleVisited}>
        {visited ? "Visited" : "Not visited"}
      </button>
    </div>
  );
};

export default Country;
