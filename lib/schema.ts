export const schema = {
  name: { type: "string" },
  version: { type: "string" },
  description: { type: "string" },
  components: {
    type: "object",
    patternProperties: {
      "[ComponentName]": {
        type: "object",
        properties: {
          description: { type: "string" },
          props: {
            type: "object",
            patternProperties: {
              "[propName]": {
                type: "object",
                properties: {
                  type: { type: "string" },
                  description: { type: "string" },
                  required: { type: "boolean" },
                  default: { type: "any" },
                  enum: { type: "array" },
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
