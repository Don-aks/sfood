const tabsWrap = document.querySelector(".tabs");

tabsWrap.addEventListener("click", function(e){
  if (!(
    e.target.classList.contains("tabs__tab") ||
    e.target.parentNode.classList.contains("tabs__tab") ||
    e.target.parentNode.classList.contains("tabs__svg")
  ))
    return;

  console.log(e.target.tagName);
  let activeClass = "tabs__tab--active";
  tabsWrap.querySelector("." + activeClass).classList.remove(activeClass);

  let targetTab;
  if (e.target.tagName === "use")
    targetTab = e.target.parentNode.parentNode;
  else if (e.target.tagName === "svg")
    targetTab = e.target.parentNode;
  else if (e.target.tagName === "BUTTON")
    targetTab = e.target;

  targetTab.classList.add(activeClass);

  activeClass = "products__list--active";
  document.querySelector("." + activeClass).classList.remove(activeClass);

  const listTarget = document.querySelector(
    ".products__list[data-tab=\"" + targetTab.dataset.tab + "\"]"
  );
  if (listTarget)
    listTarget.classList.add(activeClass);
});
