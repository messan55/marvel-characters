import { handleActions } from "redux-actions";
import {
    LOAD_CHARACTERS,
    LOAD_CHARACTERS_ERROR,
    LOAD_CHARACTERS_SUCCESS,
    LOAD_CHARACTER_ITEM,
    LOAD_CHARACTER_ITEM_SUCCESS,
    LOAD_CHARACTER_ITEM_ERROR
} from "../types";

const INITIAL_STATE = {
    loading: false,
    requestPayload: {
        id: undefined,
        limit: 20,
        offset: 0
    },
    showNavigation: false,
    filesCharacters: undefined,
    filesCharacterItem: undefined
}

export default handleActions(
    {
        [LOAD_CHARACTERS]: (state, action) => ({
            ...state,
            loading: true,
            requestPayload: action.payload,
            filesCharacters: undefined
        }),
        [LOAD_CHARACTERS_SUCCESS]: (state, action) => ({
            ...state,
            loading: false,
            filesCharacters: { ...action.payload }
        }),
        [LOAD_CHARACTERS_ERROR]: (state) => ({
            ...state,
            loading: false,
            filesCharacters: undefined
        }),
        [LOAD_CHARACTER_ITEM]: (state, action) => ({
            ...state,
            loading: true,
            requestPayload: action.payload,
            filesCharacterItem: undefined
        }),
        [LOAD_CHARACTER_ITEM_SUCCESS]: (state, action) => ({
            ...state,
            loading: false,
            filesCharacterItem: { ...action.payload }
        }),
        [LOAD_CHARACTER_ITEM_ERROR]: (state) => ({
            ...state,
            loading: false,
            filesCharacterItem: undefined
        })
    },
    INITIAL_STATE
)