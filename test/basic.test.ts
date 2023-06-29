import { describe, expect, it, test } from 'vitest'

// it is alias of test
describe('tests', () => {
  it('should works', () => {
    expect(1 + 1).toEqual(2)
  })
})
// test.extend: version 0.32.3

// test.skip
// If you want to skip running certain tests, but you don't want to delete the code due to any reason, you can use test.skip to avoid running them.
// test.skip('should skip', () => {
//   expect(1 + 1).toEqual(2)
// })

// test.skipIf
// const isDev = process.env.NODE_ENV === 'development'
// test.skipIf(isDev)('prod only test', () => {
//   //this test only runs in production
// })

// test.runIf Opposite of test.skipIf

// test.concurrent: chay dong thoi
// The two tests marked with concurrent will be run in parallel
describe('suite', () => {
  test('serial test', async (context) => {
    // console.log('%c serial test', 'color: red', context)
  })
  test('serial test 2', async () => {
    console.log('%c serial test 2', 'color: red')
  })
  test.concurrent('concurrent test 1', async () => {
    console.log('%c concurrent test 1', 'color: red')
  })
  test.concurrent('concurrent test 2', async () => {
    console.log('%c concurrent test 2', 'color: red')
  })
  test.todo('unimplemented test')
})

function myAsyncFunc() {
  return new Promise(resolve => resolve(1))
}

describe('test fails', () => {
  test.fails('fail test', async () => {
    await expect(myAsyncFunc()).rejects.toBe(1)
  })
})

describe('test each', () => {
  it.each([
    [1, 1, 2],
    [1, 2, 3],
    [2, 1, 3],
  ])('add %i + %i to equal %i', (a, b, expected) => {
    expect(a + b).toBe(expected)
  })
  // You can also access object properties with $ prefix, if you are using objects as arguments:
  test.each([
    { a: 1, b: 1, expected: 2 },
    { a: 1, b: 2, expected: 3 },
    { a: 2, b: 1, expected: 3 },
  ])('add($a, $b) -> $expected', ({ a, b, expected }) => {
    expect(a + b).toBe(expected)
  })
})
// describe('beforeEach and afterEach', () => {
//   beforeEach(async (context) => {
//     // extend context
//     context.foo = 'bar'
//   })
//
//   it('should work', ({ foo }) => {
//     console.log(foo) // 'bar'
//   })
// })
