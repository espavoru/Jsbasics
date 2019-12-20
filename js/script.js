jQuery(() => {
  let ajax = new Ajax({
    menuItems: {
      home: "Home",
      "about-us": "About Us",
      contacts: "Contacts"
    }
  });

  $("#app").append(ajax.getElem());

  function Ajax(options) {
    let $elem, css, $style, $menu, menuItems, $li, $a, $content;

    function getElem() {
      !$elem ? render() : null;

      return $elem;
    }

    function render() {
      css = "";

      $elem = $("<div>").addClass("hero");

      css += "\n.hero {\n";
      css += "  text-align: center;\n";
      css += "\n}\n";

      $menu = $("<ul>")
        .addClass("hero__menu")
        .on("click", e => {
          menuHandler(e);
        })
        .appendTo($elem);

      css += "\n.hero__menu {\n";
      css += "  display: flex;\n";
      css += "  flex-flow: row wrap;\n";
      css += "  justify-content: center;\n";
      css += "  padding-top: 20px;\n";
      css += "  list-style: none;\n}\n";

      menuItems = options.menuItems || [];

      for (let i in menuItems) {
        $li = $("<li>")
          .addClass("hero__menuItem")
          .hide()
          .fadeIn(1600)
          .appendTo($menu);

        $a = $("<a>")
          .addClass("hero__menuLink")
          .attr({
            href: "#" + i
          })
          .text(menuItems[i])
          .appendTo($li);
      }

      setTimeout(() => {
        $(".hero__menuLink:first").addClass("hero__menuLink--active");
      }, 0);

      css += "\n.hero__menuItem {\n";
      css += "  margin: 0 5%; \n}\n";

      css += "\n.hero__menuLink {\n";
      css += "  padding: 10px 20px;\n";
      css += "  color: inherit;\n";
      css += "  text-decoration: none;\n";
      css += "  border-radius: 5px;\n";
      css += "  background-color: #eee;\n";
      css += "  cursor: pointer;\n";
      css += "  transition: all 200ms;\n}\n";

      css += "\n.hero__menuLink:hover:not(.hero__menuLink--active) {\n";
      css += "  background-color: #333;\n}\n";

      css += "\n.hero__menuLink--active {\n";
      css += "  background-color: #777;\n}\n";

      $content = $("<div>")
        .addClass("hero__content")
        .appendTo($elem);

      $content
        .load("ajax.html " + "#home")
        .hide()
        .fadeIn("slow");

      addCss();
    }

    function addCss() {
      $style = $("<style>")
        .text(css)
        .appendTo("head");
    }

    function menuHandler(e) {
      e.preventDefault();

      setTimeout(() => {
        let $target = $(e.target.closest(".hero__menuLink"));

        if ($target.hasClass("hero__menuLink--active")) return;

        if ($target) {
          $(".hero__menuLink--active").removeClass("hero__menuLink--active");
          $target.addClass("hero__menuLink--active");

          let href = e.target.getAttribute("href");
          $content
            .load("ajax.html " + href)
            .hide()
            .fadeIn("slow");
        }
      }, 0);
    }

    this.getElem = getElem;
  }
});
