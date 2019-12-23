window.onload = () => {
  let panel = new Panel({
    content:
      "Maecenas vehicula, nibh eget vehicula dictum, orci turpis tincidunt ligula",
    id: "default"
  });

  document.querySelector("#app").appendChild(panel.getElem());

  let panelW = new Panel({
    content:
      "Donec lobortis malesuada pellentesque. Etiam mattis ac libero a vestibulum",
    id: "warning"
  });
  document.querySelector("#app").appendChild(panelW.getElem());

  /**
   * Create promo panel
   */
  function Panel(options) {
    let elem, show;

    /**
     * Get elem
     */
    function getElem() {
      !elem ? render() : null;

      return elem;
    }

    /**
     * Render element
     */
    function render() {
      show = sessionStorage.getItem("show_" + options.id);
      elem = document.createElement("div");

      if (show !== null) return;

      elem.className = "promoPanel" + " " + "promoPanel__" + options.id;
      elem.textContent = options.content;

      elem.addEventListener("click", () => {
        this.hidden = true;
        sessionStorage.setItem("show_" + options.id, false);
      });
    }

    this.getElem = getElem;
  }
};
