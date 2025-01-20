export const schema = {
  name: {
    type: "string",
    description: "UI library or component set name",
  },
  version: {
    type: "string",
    description: "Version of the UI library or component set",
  },
  description: {
    type: "string",
    description: "Brief overview of the UI library or component set",
  },
  components: {
    type: "object",
    description: "All components in the UI library",
    patternProperties: {
      "[component]": {
        type: "object",
        description: "Single component definition",
        properties: {
          description: {
            type: "string",
            description: "Component overview",
          },
          props: {
            type: "object",
            description: "Component props",
            patternProperties: {
              "[prop]": {
                type: "object",
                description: "Single prop definition",
                properties: {
                  default: {
                    type: "any",
                    description: "Default prop value",
                  },
                  description: {
                    type: "string",
                    description: "Prop purpose and usage",
                  },
                  enum: {
                    type: "array",
                    description: "Possible prop values for enumerated types",
                  },
                  required: {
                    type: "boolean",
                    description: "Prop requirement status",
                  },
                  type: {
                    type: "string",
                    description: "Prop data type",
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};
