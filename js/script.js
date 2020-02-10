window.onload = () => {
  let head, santa, nyTree, header, headerTop, headerLinks, shopContacts;

  head = document.querySelector("head");
  header = document.querySelector("header");
  headerTop = document.querySelector(".header-top");
  headerLinks = document.querySelector(".header-top a");
  shopContacts = document.querySelector(".hmc-numbers");

  header.style.position = "relative";
  header.style.backgroundImage =
    "url(https://jail.fwdcdn.com/frame/img/ny-banner.png)";
  header.style.backgroundRepeat = "no-repeat";
  header.style.backgroundPosition = "top center";

  headerTop.style.background = "none";

  headerLinks.forEach(element => {
    element.style.color = "#fff";
  });

  santa = document.createElement("div");
  santa.className = "santa";
  santa.style.position = "absolute";
  santa.style.top = 0;
  santa.style.left = "10px";
  santa.style.width = "230px";
  santa.style.height = "90px";
  santa.style.backgroundImage =
    "url(https://jail.fwdcdn.com/frame/img/santa-with-gifts.png)";
  header.append(santa);

  nyTree = document.createElement("div");
  nyTree.className = "nyTree";
  nyTree.style.position = "absolute";
  nyTree.style.top = 0;
  nyTree.style.right = "7%";
  nyTree.style.width = "285px";
  nyTree.style.height = "90px";
  nyTree.style.backgroundImage =
    "url(https://jail.fwdcdn.com/frame/img/ny-tree.png)";
  header.append(nyTree);

  shopContacts.forEach(element => {
    element.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
  });
};
