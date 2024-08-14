function Sum(...vals: number[]): number {
  if (vals.length === 0) {
    return -1
  } else if (vals.length === 1) {
    return 0
  } else {
    return vals.reduce((t, v) => t + v, 0)
  }
}

test('期望结果是6', () => {
  expect(Sum(1, 2, 3)).toBe(6)
})
