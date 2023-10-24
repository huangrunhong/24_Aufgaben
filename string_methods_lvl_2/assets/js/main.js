function suchen() {
  const text = document.body.querySelector("#text");
  const searchInput = document.body.querySelector("#search-input");
  let contentInput = searchInput.value;
  let content = text.innerText;
  text.innerHTML = content.replaceAll(
    contentInput,
    `<span class=highlight>${contentInput}</span>`
  );
}
