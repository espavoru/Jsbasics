window.onload = () => {
  /**
   * Create object
   * @param {string} fullName
   * @returns {object}
   */
  function User(fullName) {
    this.fullName = fullName;

    Object.defineProperties(this, {
      firstName: {
        get: function() {
          return this.fullName.split(" ")[0];
        },
        set: function(newFirstName) {
          this.fullName = newFirstName + " " + this.lastName;
        }
      },
      lastName: {
        get: function() {
          return this.fullName.split(" ")[1];
        },
        set: function(newLastName) {
          this.fullName = this.firstName + " " + newLastName;
        }
      }
    });
  }

  /** @type object */
  let johny = new User("John Smart");
  // read firstName & lastName
  alert(johny.firstName);
  alert(johny.lastName);

  // rewrite lastName
  johny.lastName = "Gray";

  alert("Full name is " + johny.fullName);
};
