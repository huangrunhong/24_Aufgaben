const A = "Susi is going to codingschool";
const B = "Susi is going to coding";
const output1 = document.body.querySelector("#output1");
const output2 = document.body.querySelector("#output2");
const output3 = document.body.querySelector("#output3");
const output4 = document.body.querySelector("#output4");
const output5 = document.body.querySelector("#output5");

output1.textContent = A.slice(0, 4);
output2.textContent = A.slice(5, 7);
output3.textContent = A.slice(5, 17) + A.slice(23);
output4.textContent = A.slice(23);
output5.textContent = A.slice(0, 8) + A.slice(23);
