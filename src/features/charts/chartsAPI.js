const chartsApiUrl =
  "https://s3-ap-southeast-1.amazonaws.com/he-public-data/chart2986176.json";

export function fetchChartsData() {
  return new Promise((resolve, reject) => {
    fetch(chartsApiUrl)
      .then((response) => {
        resolve(response.json());
      })
      .catch((error) => reject(error));
  });
}
