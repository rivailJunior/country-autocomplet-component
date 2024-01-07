import { useEffect, useState } from "react";
import { useCountry } from "../hooks/";
import { Combobox } from "../components/";
import { CountryDAO } from "../domain";
import { OptionsTextHighlight } from "../helper/options.helper";

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
      {countryList?.map((item) => (
        <Combobox.Option
          key={item.name.common}
          value={item.name.common}
          flag={item.flag}
        >
          <OptionsTextHighlight text={item.name.common} textMatch={country} />
        </Combobox.Option>
      ))}
    </Combobox>
  );
};
