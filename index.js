const tBodyElement = document.querySelector("tbody");
axios("https://northwind.vercel.app/api/customers/").then(function (response) {
  console.log(response);
  for (let i = 0; i < response.data.length; i++) {
    const tdIdElement = document.createElement("td");
    const tdCompanyNameElement = document.createElement("td");
    const tdContactNameElement = document.createElement("td");
    const tdContactTitleElement = document.createElement("td");
    const tdAddressElement = document.createElement("td");
    const trElement = document.createElement("tr");
    tdIdElement.innerHTML = response.data[i].id;
    tdCompanyNameElement.innerHTML = response.data[i].companyName;
    tdContactNameElement.innerHTML = response.data[i].contactName;
    tdContactTitleElement.innerHTML = response.data[i].contactTitle;
    tdAddressElement.innerHTML = response.data[i].address;
    const street = response.data[i].address.street;
    trElement.append(tdIdElement, tdCompanyNameElement, tdContactNameElement, tdContactTitleElement, tdAddressElement);
    tBodyElement.appendChild(trElement);
  }

  
});
