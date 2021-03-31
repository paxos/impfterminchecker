const axios = require("axios");
const { exec } = require("child_process");

const locations = [
  "impfterminservice_kiz76530",
  "impfterminservice_kiz76530_biontech",
  "impfterminservice_kiz76530_moderna",
  "impfterminservice_kiz76530_astra_zeneca",
  "impfterminservice_kre76137",
  "impfterminservice_kre76137_biontech",
  "impfterminservice_kre76137_moderna",
  "impfterminservice_kre76137_astra_zeneca",
  "impfterminservice_kiz77933",
  "impfterminservice_kiz77933_biontech",
  "impfterminservice_kiz77933_moderna",
  "impfterminservice_kiz77933_astra_zeneca",
  "impfterminservice_kre77815",
  "impfterminservice_kre77815_biontech",
  "impfterminservice_kre77815_moderna",
  "impfterminservice_kre77815_astra_zeneca",
  "impfterminservice_imp76287",
  "impfterminservice_imp76287_biontech",
  "impfterminservice_imp76287_moderna",
  "impfterminservice_imp76287_astra_zeneca",
  "impfterminservice_kiz77656",
  "impfterminservice_kiz77656_biontech",
  "impfterminservice_kiz77656_moderna",
  "impfterminservice_kiz77656_astra_zeneca",
  "impfterminservice_mes77656",
  "impfterminservice_mes77656_biontech",
  "impfterminservice_mes77656_moderna",
  "impfterminservice_mes77656_astra_zeneca",
  "impfterminservice_kre72280",
  "impfterminservice_kre72280_biontech",
  "impfterminservice_kre72280_moderna",
  "impfterminservice_kre72280_astra_zeneca",
  "impfterminservice_kiz72213",
  "impfterminservice_kiz72213_biontech",
  "impfterminservice_kiz72213_moderna",
  "impfterminservice_kiz72213_astra_zeneca",
];

(async () => {
  try {
    const response = await axios.patch(
      "https://impfterminradar.de/api/vaccinations/availability",
      locations
    );

    // console.log(response.data);

    console.log(`Checking ${response.data.length} entries…`);
    const hits = response.data.filter((entry) => entry.Available === true);
    console.log(`${hits.length} available!`);

    if (hits.length > 0) {
      exec("say AVAILABLE!");
    }
  } catch (error) {
    console.log(error);
  }
})();
