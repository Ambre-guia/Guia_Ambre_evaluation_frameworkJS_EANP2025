// __tests__/CountryDetailClient.test.js
import { render, screen, fireEvent } from "@testing-library/react";
import CountryDetailClient from "../pages/countries/[cca3]/CountryDetailClient";

// Mock localStorage
const localStorageMock = (function () {
  let store = {};

  return {
    getItem: function (key) {
      return store[key] || null;
    },
    setItem: function (key, value) {
      store[key] = value.toString();
    },
    removeItem: function (key) {
      delete store[key];
    },
    clear: function () {
      store = {};
    },
  };
})();
global.localStorage = localStorageMock;

describe("CountryDetailClient", () => {
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

  beforeEach(() => {
    localStorageMock.clear();
  });

  test("should add country to favorites on click", () => {
    render(<CountryDetailClient country={country} />);

    // Find the favorite button and click it
    const favoriteButton = screen.getByRole("button");
    fireEvent.click(favoriteButton);

    // Check that the country was added to localStorage
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    expect(favorites).toContainEqual(country);
  });

  test("should remove country from favorites on click if already favorite", () => {
    // Add country to localStorage first
    localStorage.setItem("favorites", JSON.stringify([country]));

    render(<CountryDetailClient country={country} />);

    // Find the favorite button and click it
    const favoriteButton = screen.getByRole("button");
    fireEvent.click(favoriteButton);

    // Check that the country was removed from localStorage
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    expect(favorites).not.toContainEqual(country);
  });
});
