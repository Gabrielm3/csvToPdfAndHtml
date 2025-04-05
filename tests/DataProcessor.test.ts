import { DataProcessor } from "../src/services/DataProcessor";

describe("DataProcessor", () => {
  test("should process CSV data with Windows line breaks correctly", () => {
    const input = "Name,Age,City\r\nMary,20,New York\r\nAnna,25,Los Angeles";
    const expected = [
      ["Name", "Age", "City"],
      ["Mary", "20", "New York"],
      ["Anna", "25", "Los Angeles"],
    ];

    const result = DataProcessor.process(input);
    expect(result).toEqual(expected);
  });

  test("should process CSV data with Unix line breaks correctly", () => {
    const input = "Name,Age,City\nMary,20,New York\nAnna,25,Los Angeles";
    const expected = [
      ["Name", "Age", "City"],
      ["Mary", "20", "New York"],
      ["Anna", "25", "Los Angeles"],
    ];

    const result = DataProcessor.process(input);
    expect(result).toEqual(expected);
  });

  test("should remove whitespace from cell values", () => {
    const input = "Name, Age, City\nMary, 20, New York\nAnna, 25, Los Angeles";
    const expected = [
      ["Name", "Age", "City"],
      ["Mary", "20", "New York"],
      ["Anna", "25", "Los Angeles"],
    ];

    const result = DataProcessor.process(input);
    expect(result).toEqual(expected);
  });

  test("should throw error for empty input", () => {
    expect(() => {
      DataProcessor.process("");
    }).toThrow("Empty or invalid input data");
  });
});
