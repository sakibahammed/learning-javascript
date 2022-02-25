const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}

loadCountries()


const displayCountries = countries => {

    // countries.forEach(country => {
    //     console.log(country);
    // })
    const countriesDiv = document.getElementById('countries');

    // countries.forEach(country => {
        
    // })
    for(country of countries){
        

        const div  = document.createElement('div');
        div.classList.add('country')
        // const h3 = document.createElement('h3');
        // h3.innerText = `Name :  ${country.name.common}`;
        // const p = document.createElement('p');
        // p.innerText = `Capital :  ${country.capital}
        // flag : ${country.flag}
        // map: ${country.maps.googleMaps}`;
        // div.appendChild(h3);
        // div.appendChild(p);
        div.innerHTML = `
            <h3>${country.name.common} </h3>
            <p>${country.capital}</p>
            <button onclick="loadCountryByName('${country.name.common}')"> Details </button>
        `
        
        countriesDiv.appendChild(div);
    }
}

const loadCountryByName = name => {
    const url = `https://restcountries.com/v3.1/name/${name}
    `
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetail(data[0]))
    // console.log(url);
}

const displayCountryDetail = country =>{
    const countryDiv = document.getElementById('country-detail');
    countryDiv .innerHTML = `
        <h3> ${country.name.common} </h3>
        <h3> ${country.border} </h3>
        <img src="${country.flags.png}" alt="">
        <p> Population : ${country.population} </p>
    `

}