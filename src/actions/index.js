import { createAction } from "redux-actions";
import {
    LOAD_CHARACTERS,
    LOAD_CHARACTERS_SUCCESS,
    LOAD_CHARACTERS_ERROR,
    LOAD_CHARACTER_ITEM,
    LOAD_CHARACTER_ITEM_SUCCESS,
    LOAD_CHARACTER_ITEM_ERROR
} from "../types";

export const actionCreators = {
    loadCharacters: createAction(LOAD_CHARACTERS, (payload) => payload),
    loadCharactersSuccess: createAction(LOAD_CHARACTERS_SUCCESS, (character) => character),
    loadCharactersError: createAction(LOAD_CHARACTERS_ERROR),
    loadCharacterItem: createAction(LOAD_CHARACTER_ITEM, (payload) => payload),
    loadCharacterItemSuccess: createAction(LOAD_CHARACTER_ITEM_SUCCESS, (character) => character),
    loadCharacterItemError: createAction(LOAD_CHARACTER_ITEM_ERROR),
}