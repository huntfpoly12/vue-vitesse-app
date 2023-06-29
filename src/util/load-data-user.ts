interface User {
  name: string
  age: number
}
function loadData(name: string): User {
  const users = [
    {
      name: 'Bob',
      age: 20,
    },
    {
      name: 'Alice',
      age: 18,
    },
  ]
  return users.find(user => user.name === name) || {
    name: '',
    age: 0,
  }
}

export function loadDataUser(name: string): User {
  return loadData(name)
}
