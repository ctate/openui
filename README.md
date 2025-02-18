<div align="center">

<a href="https://openuispec.org">
  <img height="120" src="logo.png">
</a>

# OpenUI

AI-Native Specification for UIs

[![License](https://img.shields.io/github/license/ctate/openui.svg?style=flat-square)](https://github.com/ctate/openui/blob/main/LICENSE)

</div>

# The OpenUI Specification

## Table of Contents

0. [Quickstart](#quickstart)
1. [Introduction](#introduction)
2. [Specification Interpretation (RFC 2119)](#specification-interpretation-rfc-2119)
3. [Purpose and Goals](#purpose-and-goals)
4. [Overview and Key Features](#overview-and-key-features)
5. [Similarities and Differences with Other Tools](#similarities-and-differences-with-other-tools)
6. [Why OpenUI?](#why-openui)
7. [Specification Format](#specification-format)
8. [Filename and Discovery](#filename-and-discovery)
9. [Example Specification](#example-specification)
10. [Best Practices](#best-practices)
11. [Future Plans](#future-plans)
12. [Contributing](#contributing)
13. [License](#license)

<a name="quickstart"></a>

## 0. Quickstart

1. **Choose a component library.** Use an existing one or create your own.
2. **Write an OpenUI spec.** Define your UI in an `openui.yaml` file.
3. **Generate code with AI.** Let AI build UI code using your component library and spec.

### Sample OpenUI spec

**openui.yaml**

```yaml file="openui.yaml"
name: "@my-design-system/components"
version: 1.0.0
description: A sample UI library specification
components:
  Button:
    description: A clickable button element
    example: |
      <Button variant="primary">
        Click Me
      </Button>
    props:
      variant:
        type: string
        description: The visual style of the button.
        enum:
          - primary
          - secondary
          - outline
```

<a name="introduction"></a>

## 1. Introduction

**OpenUI** is a specification format for defining User Interface (UI) components in an abstract, implementation-agnostic manner. Inspired by specifications like **OpenAPI**, OpenUI describes UI components, their properties and behaviors in a way that can be used across various UI libraries and frameworks. This approach provides a standardized, machine-readable and human-readable model for UI libraries, facilitating a consistent means of documentation, testing and code generation.

OpenUI is designed to be **AI-native**, making it easier for AI tools and assistants to parse, understand and leverage information about your UI components or design system. By offering a uniform description of components, OpenUI aids in bridging the gap between diverse frameworks, ensuring interoperability and reducing fragmentation.

<a name="specification-interpretation-rfc-2119"></a>

## 2. Specification Interpretation (RFC 2119)

This specification uses key terms from [RFC 2119](https://www.rfc-editor.org/rfc/rfc2119):

- **MUST** indicates an absolute requirement.
- **SHOULD** indicates a recommendation that, while not strictly required, carries significant weight if not implemented.
- **MAY** indicates an option or possibility left to implementer discretion.

These terms are used carefully within this document to clarify how certain aspects of OpenUI **MUST**, **SHOULD**, or **MAY** be interpreted or implemented.

<a name="purpose-and-goals"></a>

## 3. Purpose and Goals

OpenUI addresses the growing need for a common language to describe UI components. It streamlines collaboration among designers, developers, technical writers and AI-based systems. Its key goals are:

1. **Standardizing UI Component Libraries**  
   Provide a consistent schema for describing components and design systems.

2. **Interoperability Across Frameworks**  
   Abstract away implementation details, enabling easier migration or shared usage across React, Vue, Angular and other libraries.

3. **AI-Native**  
   Supply structured data optimized for consumption by AI tools, improving automated documentation, validation and code generation.

4. **Efficiency**  
   Reduce duplication and confusion by having a single, authoritative reference that clarifies how components behave and interact.

5. **Built-In Accessibility and Validation**  
   Promote best practices for accessible design while enabling validation and testing tools to verify component conformance.

6. **Support for Web and Native Platforms**  
   Offer a universal approach that can adapt to both web-based and native environments.

7. **Documentation + Testing + Code Generation**  
   Enable a broad ecosystem of tooling, from auto-generated docs to integrated testing frameworks.

<a name="overview-and-key-features"></a>

## 4. Overview and Key Features

### AI-Native Specification

OpenUI's structured format is particularly well-suited for AI-based analysis and tooling. By adhering to a consistent schema, developers can integrate OpenUI with LLM-based assistants or other AI tools to:

- Generate automated tests and documentation.
- Provide contextual suggestions during development.
- Perform higher-level reasoning about component usage.

### Standardization of UI Components

OpenUI makes it straightforward to define each component's shape, props, events and usage guidelines. This standardization can reduce the learning curve for new developers and makes it easier to share components across teams or projects.

### Efficiency and Universal Application

By referencing a single specification file, organizations can ensure consistent APIs and behaviors across multiple implementations. OpenUI also supports various popular UI libraries and frameworks out of the box.

<a name="similarities-and-differences-with-other-tools"></a>

## 5. Similarities and Differences with Other Tools

1. **Type Definition Files**

   - **Similarities**: Both OpenUI and typical type definition files (e.g., TypeScript `.d.ts`) can define types, enumerations and interfaces in a way that tools can parse.
   - **Differences**:
     - Type definitions often focus on compile-time checks and may include internal or unrelated types across multiple files, without extensive usage or behavioral documentation.
     - OpenUI, by contrast, is designed to be more concise and self-contained. It places all relevant component information (including usage examples, accessibility considerations and enumerated props) into a single, portable file. This provides a broader but more focused view of each component’s intended purpose and functionality.

2. `**llms.txt**`

   - **Similarities**: Can also include structured text or partial metadata for Large Language Models (LLMs).
   - **Differences**: `llms.txt` often contains entire documentation sets or large text blocks, making them unwieldy for direct AI consumption without retrieval augmented generation (RAG). OpenUI, by contrast, is deliberately minimal and structured specifically for UI component definitions, easing both human and machine comprehension.

3. **Storybook**

   - **Similarities**: Provides extensive documentation for UI components and their usage patterns.
   - **Differences**: Storybook offers live previews and interactive exploration, while OpenUI is a static, implementation-agnostic specification.

4. **OpenAPI**

   - **Similarities**: Both define a domain (OpenAPI for HTTP APIs, OpenUI for UI components) using a schema that is machine-readable and human-readable.
   - **Differences**: OpenAPI is dedicated to endpoints and data payloads, whereas OpenUI focuses on user interface components and their properties.

OpenUI **complements** these existing tools by providing a formal specification for UI components, bridging the gap between full interactive environments (e.g., Storybook) and purely type-focused definitions (e.g., TypeScript `.d.ts` files).

<a name="why-openui"></a>

## 6. Why OpenUI?

1. **Consistency**  
   Streamlines how UI components are documented, reducing confusion among teams and projects.

2. **Framework Agnosticism**  
   Fits multiple frameworks (e.g., React, Vue, Angular) by focusing on essential component definitions rather than implementation details.

3. **Standardization**  
   Encourages best practices for design systems and shared UI libraries.

4. **Enhanced Developer Experience**  
   Simplifies onboarding and collaboration, as all information about a component is located in a centralized specification.

5. **AI Readiness**  
   Supplies metadata in a format that AI tools can easily parse, leading to improved automated code insights, error detection and overall development efficiency.

<a name="specification-format"></a>

## 7. Specification Format

OpenUI specifications **MUST** be defined in **YAML** or **JSON**. Below is the general structure required at the top level:

| Property        | Type   | Description                                        |
| --------------- | ------ | -------------------------------------------------- |
| **name**        | string | Name of the UI library or component set.           |
| **version**     | string | Version of the UI library or component set.        |
| **description** | string | Brief overview of the UI library or component set. |
| **components**  | object | Collection of components in the library.           |

Each entry in `components` represents a **component**, defined by:

| Property        | Type          | Description                                                  |
| --------------- | ------------- | ------------------------------------------------------------ |
| **package**     | string (opt.) | (Optional) Package or module where the component is located. |
| **description** | string        | Component overview.                                          |
| **example**     | string (opt.) | (Optional) Example usage of the component.                   |
| **props**       | object        | Map of properties supported by the component.                |

Within `props`, each **prop** can be a string indicating the type or an object containing:

| Property        | Type    | Description                                                             |
| --------------- | ------- | ----------------------------------------------------------------------- |
| **type**        | string  | Data type for the prop (e.g., `string`, `boolean`, `number`).           |
| **description** | string  | Explanation of the prop's purpose and usage.                            |
| **default**     | any     | Default value for the prop, if applicable.                              |
| **enum**        | array   | List of allowable values (if the prop is an enumerated type).           |
| **required**    | boolean | Whether the prop is mandatory (e.g., `true` means it MUST be provided). |

<a name="filename-and-discovery"></a>

## 8. Filename and Discovery

The OpenUI specification file **MUST** be named **`openui.yaml`** or **`openui.json`**. It **SHOULD** reside at the **root** of your GitHub repository or the base path of your website. This approach makes it straightforward for both humans and automated tools to locate and parse the specification.

<a name="example-specification"></a>

## 9. Example Specification

```yaml
name: Example UI Library
version: 1.0.0
description: A sample UI library specification

components:
  Button:
    description: A clickable button element
    example: |
      <Button variant="primary" disabled={false}>
        Click Me
      </Button>
    props:
      variant:
        type: string
        description: The visual style of the button.
        enum:
          - primary
          - secondary
          - outline
      size:
        type: string
        description: The size of the button.
        enum:
          - small
          - medium
          - large
      disabled:
        type: boolean
        description: Disables the button if set to true.
        default: false
```

In this example:

- **`variant`** is a string-based enumerated prop.
- **`size`** is another enumerated prop.
- **`disabled`** is a boolean with a default value.

<a name="best-practices"></a>

## 10. Best Practices

1. **Reflect the Design System Accurately**  
   All components, props and enumerations **SHOULD** accurately match the functionality and constraints in the actual UI library or design system.

2. **Document Events**  
   If a component emits events (e.g., `onClick`), these **SHOULD** be included to ensure completeness.

3. **Emphasize Accessibility**  
   Integrate relevant accessibility attributes or guidelines within your component definitions to promote inclusive design.

4. **Maintain Consistency**  
   Use a uniform style for naming and describing components and props across the specification.

5. **Keep the Specification Updated**  
   Update the specification whenever the codebase evolves to avoid discrepancies.

<a name="future-plans"></a>

## 11. Future Plans

OpenUI is an evolving specification. Planned or potential enhancements include:

1. **Describing Component State and Lifecycle**  
   Support for advanced UI patterns, including transitions and complex state management.

2. **Tooling for Code Generation**  
   Official plugins or libraries to automatically generate documentation, tests and skeleton code.

3. **Library and Framework Integrations**  
   Core support for popular frameworks such as React, Vue, Angular and others.

4. **Complex UI Patterns**  
   Handling dynamic scenarios such as multi-step forms, modals, or asynchronous data loading.

<a name="contributing"></a>

## 12. Contributing

OpenUI is an open-source project and contributions are welcomed. If you wish to propose changes or add new features:

1. **Fork the Repository**  
   Create a personal fork of the OpenUI repository.

2. **Create a Branch**  
   Use a descriptive name (e.g., `feature/add-modal-spec`).

3. **Implement Changes**  
   Follow the established style and schema guidelines when modifying or adding files.

4. **Validate**  
   Confirm your updates are syntactically correct and conform to the schema requirements.

5. **Submit a Pull Request**  
   Propose your changes for review by the maintainers.

For more information, refer to the [OpenUI repository](https://github.com/ctate/openui).

<a name="license"></a>

## 13. License

The OpenUI specification is distributed under the **MIT License**
