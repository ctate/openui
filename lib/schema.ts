export const schema = {
  name: {
    type: "string",
    description: "The name of the UI library or component set",
  },
  version: {
    type: "string",
    description: "The version of the UI library or component set",
  },
  description: {
    type: "string",
    description: "A brief description of the UI library or component set",
  },
  components: {
    type: "object",
    description: "An object containing all the components in the UI library",
    patternProperties: {
      "[ComponentName]": {
        type: "object",
        description: "Definition of a single component",
        properties: {
          description: {
            type: "string",
            description: "A brief description of the component",
          },
          props: {
            type: "object",
            description: "An object containing all the props for the component",
            patternProperties: {
              "[propName]": {
                type: "object",
                description: "Definition of a single prop",
                properties: {
                  type: {
                    type: "string",
                    description:
                      "The data type of the prop (e.g., string, number, boolean)",
                  },
                  description: {
                    type: "string",
                    description:
                      "A brief description of the prop and its purpose",
                  },
                  required: {
                    type: "boolean",
                    description:
                      "Indicates whether the prop is required or optional",
                  },
                  default: {
                    type: "any",
                    description: "The default value of the prop, if any",
                  },
                  enum: {
                    type: "array",
                    description:
                      "An array of possible values for the prop, if it's an enumerated type",
                  },
                },
                required: ["type", "description"],
              },
            },
          },
        },
        required: ["description", "props"],
      },
    },
  },
};
