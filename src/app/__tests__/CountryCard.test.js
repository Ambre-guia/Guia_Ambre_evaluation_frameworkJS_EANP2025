// CountryCard.test.js
import { render, screen } from "@testing-library/react";
import CountryCard from "../components/CountryCard/CountryCard";
import { describe, expect, it } from "vitest";

describe("CountryCard", () => {
  it("should render the country card with the correct props", () => {
    const country = {
      name: {
        common: "France",
      },
      translations: {
        fra: {
          official: "République française",
          common: "France",
        },
      },
      region: "Europe",
      flags: {
        svg: "https://flagcdn.com/fr.svg",
        alt: "The flag of France is composed of three equal vertical bands of blue, white and red.",
      },
      cca3: "FRA",
    };

    render(<CountryCard country={country} key={country.cca3} />);

    expect(screen.getByAltText("Drapeau du pays France")).toBeInTheDocument();
    expect(screen.getByText("France")).toBeInTheDocument();
    expect(screen.getByText("Europe")).toBeInTheDocument();
  });
});
