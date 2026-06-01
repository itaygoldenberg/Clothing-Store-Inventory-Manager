function addToStock() {
  let clothType = document.getElementById("clothesCatalog").value;
  let description = document.getElementById("descriptionOfCloth").value;
  let color = document.getElementById("colorOfClothFromPlate").value;
  let price = document.getElementById("priceOfCloth").value;
  let discount = document.getElementById("discountOfCloth").value;
  let clothesUrl = document.getElementById("urlOfImg").value;

  let priceNum = Number(price);
  let discountNum = Number(discount);

  let finalPrice = priceNum - priceNum * (discountNum / 100);

  if (clothType === "") {
    alert("Invalid Enter Type of clothes");
    return;
  }
  if (description === "") {
    alert("Invalid Enter Description about the clothes");
    return;
  }
  if (color === "") {
    alert("Invalid choose color of clothes");
    return;
  }
  if (price === "" || priceNum < 1 || priceNum > 1000) {
    alert("Price must be between 1 and 1000");
    return;
  }
  if (discount === "" || discountNum < 0 || discountNum > 100) {
    alert("Discount must be between 0 and 100");
    return;
  }
  if (clothesUrl === "") {
    alert("Invalid Enter Url");
    return;
  }
  if (!clothesUrl.startsWith("http://") && !clothesUrl.startsWith("https://")) {
    alert("Please enter a valid URL");
    return;
  }

  let clothes = JSON.parse(localStorage.getItem("clothes")) || [];

  clothes.push({
    Type: clothType,
    Description: description,
    Color: color,
    Price: priceNum,
    Discount: discountNum,
    FinalPrice: finalPrice,
    Url: clothesUrl,
  });

  localStorage.setItem("clothes", JSON.stringify(clothes));

  loadClothes();
  clearForm();
}

function loadClothes() {
  let tbody = document.getElementById("clothesTable");
  let clothes = JSON.parse(localStorage.getItem("clothes")) || [];

  tbody.innerHTML = "";

  clothes.forEach((cloth, index) => {
    tbody.innerHTML += `
        <tr>
            <td>${cloth.Type}</td>
            <td>${cloth.Description}</td>
            <td style="color: ${cloth.Color}">${cloth.Color}</td>
            <td>${cloth.Price}</td>
            <td>${cloth.Discount}%</td>
            <td style="color: ${cloth.FinalPrice <= 200 ? "green" : cloth.FinalPrice <= 700 ? "blue" : "red"}">${cloth.FinalPrice.toFixed(2)}</td>
            <td><img src="${cloth.Url}" width="100" height="100"></td>
            <td><button onclick="removeCloth(${index})">Delete</button></td>
        </tr>
        `;
  });

  let countOfCloths = document.getElementById("countCloths");
  let averageOfCloths = document.getElementById("averageCloths");

  let sum = clothes.reduce((total, cloth) => total + Number(cloth.Price), 0);
  let avg = clothes.length > 0 ? sum / clothes.length : 0;

  countOfCloths.textContent = "Current Clothes: " + clothes.length;
  averageOfCloths.textContent = "Average Price: " + avg.toFixed(2);
}

function removeCloth(index) {
  let clothes = JSON.parse(localStorage.getItem("clothes")) || [];
  clothes.splice(index, 1);
  localStorage.setItem("clothes", JSON.stringify(clothes));
  loadClothes();
}

function clearForm() {
  document.getElementById("descriptionOfCloth").value = "";
  document.getElementById("priceOfCloth").value = "";
  document.getElementById("discountOfCloth").value = "";
  document.getElementById("urlOfImg").value = "";
  document.getElementById("clothesCatalog").focus();
}

loadClothes();
