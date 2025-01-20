import React from "react";

interface SchemaProperty {
  type: string;
  description?: string;
  required?: boolean;
  properties?: Record<string, SchemaProperty>;
  patternProperties?: Record<string, SchemaProperty>;
}

interface SchemaTableProps {
  schema: Record<string, SchemaProperty>;
}

const getTypeColor = (type: string): string => {
  switch (type) {
    case "string":
      return "text-green-500";
    case "object":
      return "text-blue-500";
    case "boolean":
      return "text-yellow-500";
    case "array":
      return "text-purple-500";
    case "any":
      return "text-gray-500";
    default:
      return "text-white";
  }
};

const SchemaTable: React.FC<SchemaTableProps> = ({ schema }) => {
  const renderProperties = (
    properties: Record<string, SchemaProperty>,
    indent: number = 0,
    parentKey: string = "",
  ) => {
    return Object.entries(properties).map(([key, value]) => (
      <React.Fragment key={`${parentKey}${key}`}>
        <tr>
          <td className="py-2 px-4 border-b border-gray-700">
            <div style={{ paddingLeft: `${indent * 16}px` }}>
              {key}
              {value.required && <span className="text-red-500 ml-1">*</span>}
            </div>
          </td>
          <td
            className={`py-2 px-4 border-b border-gray-700 ${getTypeColor(value.type)}`}
          >
            {value.type}
          </td>
          <td className="py-2 px-4 border-b border-gray-700">
            {value.description}
          </td>
        </tr>
        {value.properties &&
          renderProperties(value.properties, indent + 1, `${parentKey}${key}.`)}
        {value.patternProperties &&
          renderProperties(
            value.patternProperties,
            indent + 1,
            `${parentKey}${key}.`,
          )}
      </React.Fragment>
    ));
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-800">
            <th className="py-2 px-4 text-left">Property</th>
            <th className="py-2 px-4 text-left">Type</th>
            <th className="py-2 px-4 text-left">Description</th>
          </tr>
        </thead>
        <tbody>{renderProperties(schema)}</tbody>
      </table>
    </div>
  );
};

export default SchemaTable;
