# OpenUI

OpenUI is a specification for standardizing UI components across different libraries and frameworks. It promotes interoperability and consistent user experiences by defining common properties and behaviors for UI elements.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

OpenUI aims to create a universal language for UI design, similar to how OpenAPI standardizes the description of REST APIs. By defining components and their props in a machine-readable format, OpenUI provides a framework-agnostic approach to documenting UI libraries.

## Features

- Standardized component definitions
- Framework-agnostic specifications
- Support for multiple UI libraries (shadcn/ui, Material UI, Chakra UI, React Spectrum)
- Interactive examples and previews
- Detailed documentation

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository:

   ```
   git clone https://github.com/your-username/openui.git
   cd openui
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Run the development server:

   ```
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

The project is structured as follows:

- `app/`: Contains the Next.js app router pages
- `components/`: React components used throughout the application
- `lib/`: Utility functions and schemas
- `specs/`: OpenUI specifications for various UI libraries
- `public/`: Static assets

Key files:

- `app/layout.tsx`: Root layout component
- `app/page.tsx`: Home page component
- `app/spec/page.tsx`: OpenUI specification page
- `app/examples/page.tsx`: Examples page showcasing different UI libraries
- `components/landing.tsx`: Main landing page component
- `components/preview.tsx`: Component for previewing OpenUI specifications

## Usage

The application provides several pages to explore the OpenUI specification:

1. Home Page: Introduces OpenUI and its goals
2. Spec Page: Detailed explanation of the OpenUI specification structure
3. Examples Page: Showcases OpenUI specifications for various UI libraries

You can navigate between these pages using the header menu.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.
