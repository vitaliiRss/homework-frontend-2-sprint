type ThemeStatetype = {
  themeId: number
}

const initState = {
  themeId: 1
}

export const themeReducer = (state = initState, action: ThemeActionsType): ThemeStatetype => {
  switch (action.type) {
    case "SET_THEME_ID": {
      return { ...state, themeId: action.id }
    }
    default:
      return state
  }
}

type ThemeActionsType = ChangeThemeIdType

type ChangeThemeIdType = ReturnType<typeof changeThemeId>

export const changeThemeId = (id: number) => {
  return {
    type: 'SET_THEME_ID',
    id
  } as const
}
