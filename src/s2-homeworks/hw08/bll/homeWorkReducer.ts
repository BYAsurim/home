import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            // sort() создаёт новый массив? или нужно в ручную?...
            if(action.payload === 'up') {
                let  stateCopy = state.sort((a, b) =>
                    a.name < b.name ? -1 : 1 )
                return stateCopy
            }
            if(action.payload === 'down') {
                let stateCopy = state.sort((a, b) =>
                    a.name > b.name ? -1 : 1 )
                return stateCopy
            }
            return state
            // need to fix
        }
        case 'check': {
            // filter() создаёт новый массив? или нужно в ручную?...
            return state.filter(u => u.age >= 18 ? u : '').reverse() // need to fix
        }
        default:
            return state
    }
}
