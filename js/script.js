// https://gist.github.com/espavoru/8900fb619c83d6ea6a72beb3d118532e
jQuery(() => {
  let grid = new Grid({
    header: "Header",
    menu: "Menu",
    "promo-1": "Promo 1",
    "promo-2": "Promo 2"
  });

  $("#app").append(grid.getElem());

  function Grid(options) {
    let $elem,
      $header,
      $container,
      $topHeader,
      colorMain,
      colorSuccess,
      colorWarning,
      $midHeader,
      $promoHeader,
      $promoHeaderRight,
      $clearfix,
      $main,
      $contentColumn,
      $contentColumnMid,
      $contentColumnRight,
      $footer,
      $style;

    colorWarning = "#ca3838";
    colorMain = "#389dca";

    function getElem() {
      !$elem ? render() : null;

      return $elem;
    }

    function render() {
      $elem = $("<div>").addClass("floatGrid");

      $style = $(
        "<style>.floatGrid > * > * {cursor: pointer;} \n\n" +
          " * {box-sizing: border-box;}</style>"
      ).appendTo($elem);

      $clearfix = $("<div>")
        .addClass("clearfix")
        .css({
          clear: "both"
        });

      $header = $("<header>")
        .addClass("mainHeader")
        .css({
          paddingTop: "10px",
          paddingBottom: "10px",
          backgroundColor: "#333"
        })
        .appendTo($elem);

      $container = $("<div>")
        .addClass("container")
        .css({
          maxWidth: "90%",
          margin: "0 auto"
        })
        .appendTo($header);

      $topHeader = $("<div>")
        .addClass("mainHeader__topHeader")
        .text(options.header || "Top header example")
        .css({
          minHeight: "50px",
          marginBottom: "10px",
          padding: "10px",
          backgroundColor: colorWarning
        })
        .appendTo($container);

      $midHeader = $("<div>")
        .addClass("mainHeader__midHeader")
        .css({
          minHeight: "50px",
          marginBottom: "10px",
          backgroundColor: colorMain
        })
        .text(options.menu)
        .appendTo($header);

      $container
        .clone()
        .empty()
        .css({
          padding: "10px"
        })
        .appendTo($midHeader);

      $promoHeader = $("<div>")
        .addClass("mainHeader__promo")
        .css({
          float: "left",
          width: "46,5%",
          minHeight: "100px",
          marginRight: "2%",
          padding: "10px",
          backgroundColor: colorWarning
        })
        .text(options["promo-1"] || "Some promo 1 example");
    }
  }
});
