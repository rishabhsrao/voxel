define(["jquery", "components/drawer"],
function($,        Drawer) {
  "use strict";

  var Voxel = {
    defaults: {
      name: "Voxel",

      elements: {
      },

      classnames: {}
    },

    elements: {},

    constants: {},

    components: {},

    create: function(options) {
      this.options = $.extend(true, {}, this.defaults, options);

      this.init();

      return this;
    },

    init: function(options) {

      this.fetch();
      this.attach();
      this.setup();

      return this;
    },

    fetch: function() {
      console.log(this.options.name, "fetch()", "Fetching elements");

      console.log(this.options.name, "fetch()", "Fetched", {
        elements: this.elements
      });

      return this;
    },

    attach: function() {
      console.log(this.options.name, "attach()", "Attaching events");

      return this;
    },

    setup: function() {
      console.log(this.options.name, "setup()", "Setting up components");

      this.components.drawer = Drawer.create({
        name: "Voxel.Drawer",
        closeOnPageTouch: false
      });

      console.log(this.options.name, "setup()", "Set up components", { components: this.components });

      return this;
    },

    destroy: function() {
      // TODO Destroy component gracefully.
    },

    greet: function() {
      return "Hello world!";
    }
  };

  return Object.create(Voxel);
});
