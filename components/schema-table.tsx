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
      return "text-gray-400";
    case "object":
      return "text-gray-300";
    case "boolean":
      return "text-gray-200";
    case "array":
      return "text-gray-100";
    case "any":
      return "text-gray-500";
    default:
      return "text-gray-400";
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
        <tr className="border-b border-gray-700 hover:bg-gray-800 transition-colors">
          <td className="py-3 px-4">
            <div
              style={{ paddingLeft: `${indent * 16}px` }}
              className="flex items-center"
            >
              <span className="text-gray-300">{key}</span>
              {value.required && (
                <span className="text-red-400 ml-1 text-xs">*</span>
              )}
            </div>
          </td>
          <td className={`py-3 px-4 ${getTypeColor(value.type)}`}>
            <span className="font-mono text-sm">{value.type}</span>
          </td>
          <td className="py-3 px-4 text-gray-400">{value.description}</td>
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
    <div className="overflow-x-auto bg-gray-900 rounded-lg shadow-xl border border-gray-700">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-800 text-gray-200">
            <th className="py-3 px-4 text-left font-semibold">Property</th>
            <th className="py-3 px-4 text-left font-semibold">Type</th>
            <th className="py-3 px-4 text-left font-semibold">Description</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-700">
          {renderProperties(schema)}
        </tbody>
      </table>
    </div>
  );
};

export default SchemaTable;
