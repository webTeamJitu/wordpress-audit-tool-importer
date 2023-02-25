import { tableRow } from "./components.js";

document.addEventListener("DOMContentLoaded", async () => {
  let res;
  let data;
  // Handle login
  res = await fetch("http://localhost:3000/api/v1/auth/login", {
    method: "POST",
    body: JSON.stringify({
      email: "benjamin.nyota@thejitu.com",
      password: "secretoh",
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  data = await res.json();

  res = await fetch("http://localhost:3000/api/v1/clients", {
    headers: { Authorization: data.token },
  });
  data = await res.json();
  renderTableRow(".table tbody", data);
});

const renderTableRow = (tbody, clients) => {
  tbody = document.querySelector(tbody);
  tbody.innerHTML = clients.map((client) => tableRow(client)).join("");
};
