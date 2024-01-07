import { useEffect, useState } from "react";
import { useCountry } from "../hooks/";
import { Combobox } from "../components/";
import { CountryDAO } from "../domain";

export const Main = ({ countryDao }: { countryDao: CountryDAO }) => {
  const [country, setCountry] = useState("");
  const { countryList, getCountries, setCountryList } = useCountry(
    countryDao.getCountry
  );

  useEffect(() => {
    if (country.length > 2) {
      getCountries(country);
    } else {
      setCountryList([]);
    }
  }, [country]);

  return (
    <Combobox value={country} setValue={setCountry}>
      {countryList?.map((country) => (
        <Combobox.Option
          key={country.name.common}
          value={country.name.common}
          flag={country.flag}
        />
      ))}
    </Combobox>
  );
};
