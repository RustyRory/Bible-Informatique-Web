fetch("http://localhost:5000/api/examples")
  .then((response) => response.json())
  .then((data) => {
    const content = document.getElementById("content");
    content.innerHTML = data
      .map((item) => `<p>${item.name}: ${item.description}</p>`)
      .join("");
  })
  .catch((err) => console.error(err));
