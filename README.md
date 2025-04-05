# CSV to PDF & HTML Converter

A TypeScript-based utility for converting CSV datasets into structured HTML tables and high-quality PDF outputs.

## Overview

This tool provides a streamlined way to convert tabular data from CSV format into presentation-ready HTML and PDF files. Perfect for report generation, data visualization, or creating shareable documents from raw data.

## Key Features

- **Robust CSV Parsing**: Handles different line endings and properly formats cell data
- **Clean HTML Generation**: Uses EJS templates for customizable table styling
- **High-Quality PDF Export**: Leverages Puppeteer for pixel-perfect PDF generation
- **Automatic File Management**: Creates timestamped output files for easy versioning
- **Comprehensive Logging**: Detailed execution logs for monitoring and debugging
- **Strong Error Handling**: Graceful error recovery with meaningful messages

## Tech Stack

- **Language**: TypeScript
- **Runtime**: Node.js
- **Templating**: EJS
- **PDF Generation**: Puppeteer (Chrome headless)
- **Testing**: Jest
- **Linting**: ESLint

## Getting Started

### Prerequisites

- Node.js 14+ installed
- NPM or Yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/gabrielm3/csvToPdfAndHtml.git
cd csvToPdfAndHtml

# Install dependencies
npm install
```

### Basic Usage

1. Add your CSV file to the `data` directory (default filename: `users.csv`)
2. Build and run the application:

```bash
# Build TypeScript
npm run build

# Run the application
npm start
```

3. Find your generated files in the `output` directory

### Configuration

The application uses a simple folder structure:

- `data/` - Place your source CSV files here
- `templates/` - EJS templates for HTML generation
- `output/` - Generated HTML and PDF files appear here

## Development

```bash
# Run in development mode (with hot reloading)
npm run dev

# Run tests
npm test

# Check code quality
npm run lint

# Fix linting issues
npm run lint:fix
```

## Project Structure

```
csvToPdfAndHtml/
├── src/
│   ├── models/      # Data structures
│   ├── services/    # Core business logic
│   ├── utils/       # Helper functions
│   └── app.ts       # Application entry point
├── templates/       # EJS templates
├── data/            # Input CSV files
├── output/          # Generated files
└── tests/           # Unit and integration tests
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License. Refer to the LICENSE file for details.
