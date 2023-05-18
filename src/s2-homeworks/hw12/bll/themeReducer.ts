const initState = {
    themeId: 1,
}

type InitialStateType = {  //
    themeId: number
}
type ActionsType = changeThemeIdACType  //

export const themeReducer = (state = initState, action: ActionsType): InitialStateType => { // fix any
    switch (action.type) {
        // дописать
            case 'CHANGE_THEME_ID':
                return {
                    ...state, themeId: action.id //
                }

        default:
            return state
    }
}
export type changeThemeIdACType = ReturnType<typeof changeThemeId> //
export const changeThemeId = (id: number) => (
    { type: 'CHANGE_THEME_ID', id } as const //
) // fix any
