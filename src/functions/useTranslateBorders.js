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
        country.alpha3Code === i && border.push(country.name);
      })
    );

  return border;
};

export default useTranslateBorders;
