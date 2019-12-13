let hotelSeagulf = new Hotel({
  name: "Seagulf",
  roomRate: 240,
  discount: 35,
  daysToExpire: 6
});

let app = document.querySelector("#app");
hotelSeagulf.getElem().classList.add("hotel--seaGulf");
app.insertBefore(hotelSeagulf.getElem(), null);

let hotelJane = new Hotel({
  name: "Jane",
  roomRate: 150,
  discount: 20,
  daysToExpire: 10
});

hotelJane.getElem().classList.add("hotel--jane");
app.appendChild(hotelJane.getElem());

/**
 * Create hotel widget
 */
function Hotel(options) {
  let elem;

  function getElem() {
    if (!elem) render();

    return elem;
  }

  function render() {
    elem = document.createElement("div");
    elem.className = "hotel";

    elem.insertBefore(hotelName(), null);
    elem.insertBefore(roomRate(), null);
    elem.insertBefore(specialRate(), null);
    elem.insertBefore(promo(), null);
  }

  function hotelName() {
    let hotelName = document.createElement("div");
    hotelName.className = "hotel__name";
    hotelName.textContent = options.name;

    return hotelName;
  }

  function roomRate() {
    let roomRate = document.createElement("div");
    roomRate.className = "hotel__roomRate";
    roomRate.textContent = options.roomRate.toFixed(2) + " USD";

    return roomRate;
  }

  function specialRate() {
    let specialRate = document.createElement("div");
    specialRate.className = "hotel__specialRate";
    specialRate.textContent = offerPrice() + " USD";

    return specialRate;
  }

  function offerPrice() {
    let offerRate = options.roomRate * ((100 - options.discount) / 100);
    return offerRate;
  }

  function offerExpires(today) {
    let expiryMsg, weekFromToday, day, date, month, year, dayNames, monthNames;

    /** N days in ms */
    weekFromToday = new Date(
      today.getTime() + options.daysToExpire * 24 * 60 * 60 * 1000
    );

    dayNames = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ];

    monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];

    day = dayNames[weekFromToday.getDay()];
    date = weekFromToday.getDate();
    month = monthNames[weekFromToday.getMonth()];
    year = weekFromToday.getFullYear();

    expiryMsg = "Promotion ends at ";
    expiryMsg += day + "<br>(" + date + " " + month + " " + year + ")";

    return expiryMsg;
  }

  function promo() {
    let today = new Date();
    let elEnds = document.createElement("div");

    elEnds.className = "hotel__promo";
    elEnds.innerHTML = offerExpires(today);

    return elEnds;
  }

  this.getElem = getElem;
}
