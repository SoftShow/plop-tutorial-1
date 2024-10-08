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

  plop.setGenerator("family members", {
    description: "Family members generator",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Your name",
      },
      {
        type: "input",
        name: "mother",
        message: "Mother's name",
      },
      {
        type: "input",
        name: "father",
        message: "Father's name",
      },
      {
        type: "checkbox",
        name: "optionalRelatives",
        message: "Which relatives do you want to include?",
        choices: [
          {
            name: "Brother",
          },
          {
            name: "Sister",
          },
          {
            name: "Step mother",
            disabled: "Currently not available",
          },
          {
            name: "Cat",
            checked: true,
          },
          {
            name: "Dog",
          },
          {
            name: "Cow",
          },
          {
            name: "Mouse",
            value: "test",
          },
        ],
      },
    ],
    actions: (answers) => {
      const actions = [
        {
          type: "addMany",
          destination: "src/family/{{ name }}",
          base: "plop-templates/my-family",
          templateFiles: "plop-templates/my-family/*.hbs",
        },
        function logChoices(answers) {
          console.debug(answers);
        },
      ];

      if (answers.optionalRelatives.includes("Brother")) {
        console.debug("Pushing brother");
        actions.push({
          type: "add",
          path: "src/family/{{name}}/optional-relatives/brother.txt",
          templateFile:
            "plop-templates/my-family/optional-relatives/brother.txt.hbs",
        });
      }

      if (answers.optionalRelatives.includes("Sister")) {
        actions.push({
          type: "add",
          path: "src/family/{{name}}/optional-relatives/sister.txt",
          templateFile:
            "plop-templates/my-family/optional-relatives/sister.txt.hbs",
        });
      }

      if (answers.optionalRelatives.includes("Cat")) {
        actions.push({
          type: "add",
          path: "src/family/{{name}}/pets/cat.txt",
          templateFile: "plop-templates/my-family/pets/cat.txt.hbs",
        });
      }

      if (answers.optionalRelatives.includes("Dog")) {
        actions.push({
          type: "add",
          path: "src/family/{{name}}/pets/dog.txt",
          templateFile: "plop-templates/my-family/pets/dog.txt.hbs",
        });
      }

      if (answers.optionalRelatives.includes("Cow")) {
        actions.push({
          type: "add",
          path: "src/family/{{name}}/pets/cow.txt",
          templateFile: "plop-templates/my-family/pets/cow.txt.hbs",
        });
      }

      if (answers.optionalRelatives.includes("test")) {
        actions.push({
          type: "add",
          path: "src/family/{{name}}/pets/mouse.txt",
          templateFile: "plop-templates/my-family/pets/mouse.txt.hbs",
        });
      }

      return actions;
    },
  });
};
