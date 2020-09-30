export type DarkTheme = {
    darkTheme: boolean
    ChangeTheme: () => void
}

export type SideBarAction = {
    visible: boolean
    ChangeVisible: () => void
    darkTheme: boolean
}

export type HeaderPersonalTypes = {
    ChangeVisible: () => void
    darkTheme: boolean
    ChangeTheme: () => void
}