# CSV to PDF and HTML Converter

A Node.js application that converts CSV files into both HTML and PDF formats.

## Features

- CSV file processing
- HTML generation with table formatting
- PDF generation from HTML
- Timestamp-based file naming
- Error handling and logging

## Tech Stack

- TypeScript
- Node.js
- EJS (for HTML templating)
- html-pdf (for PDF generation)

## Installation

```bash
npm install
```

## Usage

1. Place your CSV file in the `data` directory as `users.csv`
2. Run the application:

```bash
npm run build
npm start
```

Generated files will be available in the `output` directory.

## Development

```bash
npm run dev    # Run with ts-node
npm run lint   # Check code style
npm run test   # Run tests
```

## License

MIT
