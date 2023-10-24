const text1 = "Sam is going to school";
const text2 = "Susi";
const text3 = "and";
// console.log(text1.concat(" ") + text3.concat(" the movie theater"));
document.write(text1.concat(" ") + text3.concat(" the movie theater") + "<br>");
document.write(text1.replace("school", "").concat(" movie theater") + "<br>");
document.write(
  text2.concat(" ") + text3.concat(" ") + text1.replace("is", "are") + "<br>"
);

document.write(
  text2.concat(" ") +
    text3.concat(" ") +
    text1.replace("is", "are").replace("school", "the gym").concat(" ") +
    text3.concat(" the movie theater") +
    "<br>"
);

document.write(
  text2.concat(" ") +
    text1.replace("Sam", "").concat(" and the movie theater") +
    "<br>"
);
