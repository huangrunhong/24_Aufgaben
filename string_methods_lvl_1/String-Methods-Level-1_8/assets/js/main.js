const text = "Sam is going to codingschool";
document.write(text.replace("coding", "").toUpperCase() + "<br>");
document.write(text.replace("coding", "").toLowerCase() + "<br>");
document.write(
  text
    .replace("coding", "")
    .toUpperCase()
    .replace("IS GOING TO", "is going to") + "<br>"
);
document.write(
  text
    .replace("coding", "")
    .toLowerCase()
    .replace("is going to", "IS GOING TO") + "<br>"
);

let newText = text.replace("coding", "");
document.write(
  newText.replace("i", "I").replace("g", "G").replace("t", "T").slice(0, 16) +
    newText
      .replace("i", "I")
      .replace("g", "G")
      .replace("t", "T")
      .slice(-6)
      .replace("s", "S")
);
