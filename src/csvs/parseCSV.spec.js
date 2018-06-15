import parseCSV, {
  removeWrappingQuotes,
  toList,
  headerize,
  camelize,
  capitalize,
} from "./parseCSV"

describe("parseCSV", () => {
  it("converts a csv string to an array of objects with header keys and row values", () => {
    const csv = `a,b,c
1,2,3
4,5,6`
    const actual = parseCSV(csv)
    const expected = [{ a: "1", b: "2", c: "3" }, { a: "4", b: "5", c: "6" }]
    expect(actual).toEqual(expected)
  })

  it("ignores commas in quotes", () => {
    const csv = `a,b,c
1,"hello, world",3
4,hello world,6`
    const actual = parseCSV(csv)
    const expected = [
      { a: "1", b: "hello, world", c: "3" },
      { a: "4", b: "hello world", c: "6" },
    ]
    expect(actual).toEqual(expected)
  })
})

describe("removeWrappingQuotes", () => {
  it("removes wrapping quotes if present", () => {
    const value = `"hello, you"`
    const actual = removeWrappingQuotes(value)
    const expected = "hello, you"
    expect(actual).toEqual(expected)
  })
})

describe("toList", () => {
  it("converts a csv row to an array of values", () => {
    const row = `jest,"react",redux`
    const actual = toList(row)
    const expected = ["jest", "react", "redux"]
    expect(actual).toEqual(expected)
  })
})

describe("headerize", () => {
  it("converts row arrays to objects with header keys", () => {
    const data = [[["a", "b", "c"]], [[1, "2,10", 3], [4, 5, 6]]]
    const actual = headerize(data)
    const expected = [{ a: 1, b: "2,10", c: 3 }, { a: 4, b: 5, c: 6 }]
    expect(actual).toEqual(expected)
  })
})

describe("camelize", () => {
  it("camelizes a snake_case key", () => {
    const key = "created_at"
    const actual = camelize(key)
    const expected = "createdAt"
    expect(actual).toEqual(expected)
  })
})

describe("capitalize", () => {
  it("capitalizes a word", () => {
    const word = "apple"
    const actual = capitalize(word)
    const expected = "Apple"
    expect(actual).toEqual(expected)
  })
})
