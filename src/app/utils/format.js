export function formatPopulation(population) {
  if (population <= 1_000_000) {
    return (population / 1_000).toFixed(2) + "K";
  }
  return (population / 1_000_000).toFixed(2) + "M";
}
