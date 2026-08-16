import { alert } from "@pnotify/core";

import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";

alert({
  title: "Success!",
  text: "PNotify is successfully imported.",
  type: "success",
});

const template = `    
<div class="country-info">
  <h1 style="text-align: left; width: 100%; margin-bottom: 20px">
    ${country.name}
  </h1>
  <div>
    <p><strong>Capital:</strong> ${country.capital}</p>
    <p><strong>Population:</strong> ${country.population}</p>
    <p><strong>Languages:</strong></p>
    <ul>
      ${languages}
    </ul>
  </div>
  <div>
    <img src="${country.flags.svg}" alt="Flag of ${country.name}" />
  </div>
</div>`;
