// const targetDiv1 = document.getElementById("desc1");
// const btn = document.getElementById("item1");
function openDescription(desc) {
  var target = document.getElementById(desc).value;
  alert(target);
  if (target.style.display !== "none") {
    target.style.display = "none";
    alert("Hi Carlos");
    return false;
  } else {
    target.style.display = "block";
    alert("Hi Rachel");
    return false;
  }
};

