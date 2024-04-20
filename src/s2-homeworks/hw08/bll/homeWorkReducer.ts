import { UserType } from '../HW8'

type ActionType =
  | { type: 'sort'; payload: 'up' | 'down' }
  | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
  switch (action.type) {
    case 'sort': { // by name
      if (action.payload === "up") {
        return [...state].sort((user1, user2) => user1.name > user2.name ? 1 : -1) // need to fix
      } else {
        return [...state].sort((user1, user2) => user1.name < user2.name ? 1 : -1) // need to fix
      }
    }
    case 'check': {
      return state.filter(user => user.age > action.payload) // need to fix
    }
    default:
      return state
  }
}
