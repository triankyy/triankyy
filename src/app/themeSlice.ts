import { createSlice } from "@reduxjs/toolkit";

interface InitState {
    theme: "dark" | "light" | "system";
}

const initialState = {
    theme: "light"
} as InitState;

export const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        toggleTheme: (state, action) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.theme = action.payload.theme;
        }
    }
});

// export type ThemeDispatch = typeof
export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
