import { describe, expect, test } from 'vitest'
import { loadDataUser } from '~/util/load-data-user'

describe('load-user-data', () => {
  test('load data', () => {
    const user = loadDataUser('Bob')
    expect(user).toEqual({
      name: 'Bob',
      age: 20,
    })
  })
})
