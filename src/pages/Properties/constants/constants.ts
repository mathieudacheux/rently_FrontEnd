const numberList = [
  { value: 1, label: '1' },
  { value: 2, label: '2' },
  { value: 3, label: '3' },
  { value: 4, label: '4' },
  { value: 5, label: '5' },
]

const actualYear = new Date().getFullYear()
const yearList = [{ value: actualYear, label: String(actualYear) }]

for (let i = actualYear - 1; i >= 1900; i--) {
  yearList.push({ value: i, label: String(i) })
}

const dpeList = [
  { value: 1, label: 'A' },
  { value: 2, label: 'B' },
  { value: 3, label: 'C' },
  { value: 4, label: 'D' },
  { value: 5, label: 'E' },
  { value: 6, label: 'F' },
  { value: 7, label: 'G' },
]

const surfaceList = [
  { value: 200, label: '200m² min' },
  { value: 400, label: '400m² min' },
  { value: 600, label: '600m² min' },
  { value: 800, label: '800m² min' },
  { value: 1000, label: '1000m² min' },
  { value: 1200, label: '1200m² min' },
  { value: 1400, label: '1400m² min' },
]

export { numberList, yearList, dpeList, surfaceList }
