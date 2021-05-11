//header-onscroll
const close1 = document.getElementById("info");
const banner1 = document.getElementById("onscroll-Event");
const collapse = document.querySelectorAll(
  ".table-option .table-option__title"
);
const filterTable = document.querySelectorAll(
  ".table-option .table-option__filter-table"
);
function myFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    banner1.style.position = "fixed";
    banner1.style.marginTop = 0;
    banner1.style.zIndex = 100;
    close1.style.display = "none";
  } else {
    close1.style.display = "block";
    banner1.style.position = "";
    // banner1.style.position = "absolute";
    // banner1.style.backgroundColor = "rgb(0 0 0 / 0%)";
  }
}
window.onscroll = function () {
  myFunction();
};

for (let i = 0; i < collapse.length; i++) {
  console.log(collapse[i]);
  //   collapse[i].onclick = checkCollapse(i);
  collapse[i].onclick = function () {
    if (filterTable[i].classList.contains("collapse")) {
      filterTable[i].classList.remove("collapse");
      // thêm bớt class
      collapse[i].classList.replace("table-expand", "table-collapse");
      //   collapse[i].classList.add("table-collapse");
    } else {
      filterTable[i].classList.add("collapse");
      // thêm bớt class
      collapse[i].classList.replace("table-collapse", "table-expand");

      //   collapse[i].classList.add("table-expand");
    }
  };
}
