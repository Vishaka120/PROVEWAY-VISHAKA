function changeColor(radioBtn) {
  const allBoxes = document.querySelectorAll(".num-pair");
  allBoxes.forEach((box) => {
    box.style.backgroundColor = "transparent";
  });
  const parentElement = findParentWithClass(radioBtn, "num-pair");
  if (parentElement) {
    parentElement.style.backgroundColor = "#F4FBF9";
    parentElement.style.border = "1px solid #007f61";
  }
  const card = findParentWithClass(radioBtn, "card");
  const dropdown = document.getElementById("dropdown");
  dropdown.style.display = "block";
  if (dropdown) {
    parentElement.appendChild(dropdown);
  }
  //   expandBox(card);
}
function findParentWithClass(element, className) {
  let parent = element.parentNode;
  while (parent) {
    if (parent.classList.contains(className)) {
      return parent;
    }
    parent = parent.parentNode;
  }
  return null;
}

function expandBox(card) {
  const dropdown = document.getElementsByClassName("dropdown");
  dropdown.style.display = "block";
  if (dropdown) card.appendChild(dropdown);
}
