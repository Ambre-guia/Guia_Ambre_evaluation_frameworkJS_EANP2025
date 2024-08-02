import axios from "axios";

const getAllCountries = async () => {
  try {
    const response = await axios.get("https://restcountries.com/v3.1/all");
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des pays:", error);
    return [];
  }
};

export default getAllCountries;
