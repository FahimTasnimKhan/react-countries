import { use, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = ({ countriesPromise }) => {
  const [count, setCount] = useState([]);
  const countryData = use(countriesPromise);
  const countries = countryData.countries;

  const handleVisitedCountries = (country) => {
    console.log("handleVisitedCountries clicked", country);
    const newCount = [...count, country];
    setCount(newCount);
  };

  console.log(countries);

  return (
    <div>
      <h1>No of countries : {countries.length}</h1>
      <h1>Total no of countries visited : {count.length}</h1>
      <div className="countries">
        {countries.map((country) => (
          <Country
            count={count}
            setCount={setCount}
            key={country.ccn3.ccn3}
            country={country}
            handleVisitedCountries={handleVisitedCountries}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
