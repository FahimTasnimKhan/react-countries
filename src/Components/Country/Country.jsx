import "./Country.css";

const Country = ({ country }) => {
  const name = country.name.common;
  const official_name = country.name.official;
  const flagimg = country.flags.flags.png;
  const population = country.population.population;

  return (
    <div className="country">
      <h1>Name:{name}</h1>
      <h2>Official Name:{official_name}</h2>
      <h2>Population: {population}</h2>
      <img src={flagimg} alt="" />
    </div>
  );
};

export default Country;
