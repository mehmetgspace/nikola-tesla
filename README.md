# Nikola Tesla

A versatile collection of JavaScript/TypeScript helper functions for web development projects.

![Project Logo](https://raw.githubusercontent.com/mehmetgspace/nikola-tesla/main/nikola-tesla.png)

![npm](https://img.shields.io/npm/v/nikola-tesla)

## Installation

Using npm:

```
npm install nikola-tesla
```

## Functions

### truncateString.ts

Truncates a string to a specified length and adds a suffix.

```
truncateString(text: string, length: number, suffix?: string): string
```

### getDaysBetweenDates.ts

Calculates the number of days between two dates.

```
getDaysBetweenDates(startDate: Date, endDate: Date): number
```

### mergeObjects.ts

Merges multiple objects into one.

```
mergeObjects(...objects: Object[]): Object
```

### findAndReplace.ts

Searches for a string within another string and replaces it with a specified replacement string.

```
findAndReplace(text: string, search: string, replacement: string): string
```

## Contributing

Contributions are always welcome. Here's how you can contribute:

1. Fork the project.
2. Create your feature branch: `git checkout -b feature/YourFeatureName`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature/YourFeatureName`.
5. Open a pull request.