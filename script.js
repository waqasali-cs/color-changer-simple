let nthInterval;
let count = 0;

const p = document
  .querySelector("div")
  .appendChild(document.createElement("p"));
p.style.fontSize = "2rem";
p.style.textAlign = "center";

const btnEl = document.querySelectorAll("button");

btnEl.forEach((i) => {
  i.addEventListener("click", () => {
    count++;

    if (i.className == "red") {
      document.body.style.backgroundColor = "red";
      clearInterval(nthInterval);
            nthInterval = null;

    } else if (i.className == "blue") {
      if (document.body.style.backgroundColor == "blue") {
        alert("already blue select another color");
      } else {
        document.body.style.backgroundColor = "blue";
        clearInterval(nthInterval);
              nthInterval = null;

      }
    } else if (i.className == "green") {
      document.body.style.backgroundColor = "green";
      clearInterval(nthInterval);
      nthInterval=null
    } else if (i.className == "auto") {
      if (!nthInterval) {
        nthInterval = setInterval(autoFunc, 500);
      }
    } else if (i.className == "clear") {
      document.body.style.backgroundColor = "";
      count = 0;
      clearInterval(nthInterval);
      nthInterval = null;
    }

    p.textContent = `clicked count: ${count}`;
  });
});

function autoFunc() {
  let randomColor = Math.floor(Math.random() * 256 * 256 * 256).toString(16);
  document.body.style.backgroundColor = `#${randomColor}`;
}
