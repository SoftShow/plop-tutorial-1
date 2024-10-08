module.exports = function (plop) {
  // controller generator
  plop.setGenerator("controller", {
    description: "application controller logic",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "controller name please",
      },
      {
        type: "input",
        name: "dynamicWords",
        message: "Please, type your dynamic words",
      },
      {
        type: "confirm",
        name: "loveDogs",
        message: "Do you love dogs?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/{{camelCase name}}.js",
        templateFile: "plop-templates/controller.hbs",
      },
    ],
  });
};
