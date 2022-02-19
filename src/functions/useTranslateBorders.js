import { useContext } from "react";
import {
  CountriesContext,
  CurrentCountryContext,
} from "../components/CountriesContext";

const useTranslateBorders = (country) => {
  const countries = useContext(CountriesContext);
  const { currentCountry } = useContext(CurrentCountryContext);
  const border = [];

  country &&
    currentCountry?.borders?.map((i) =>
      countries.find((country) => {
        return country.cca3 === i && border.push(country.name.common);
      })
    );
  
  return border;
};

export default useTranslateBorders;
