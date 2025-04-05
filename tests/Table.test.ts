import { Table } from "../src/models/Table";

describe("Table", () => {
  const sampleData = [
    ["Name", "Age", "City"],
    ["Mary", "20", "New York"],
    ["Anna", "25", "Los Angeles"],
  ];

  test("should create a table correctly", () => {
    const table = new Table(sampleData);

    expect(table.header).toEqual(["Name", "Age", "City"]);
    expect(table.rows).toEqual([
      ["Mary", "20", "New York"],
      ["Anna", "25", "Los Angeles"],
    ]);
    expect(table.rowCount).toBe(2);
    expect(table.columnCount).toBe(3);
  });

  test("should throw error if data is empty", () => {
    expect(() => {
      new Table([]);
    }).toThrow("Invalid data to create table");
  });
});
