import { put, takeLatest } from "redux-saga/effects";
import * as actions from "../actions";
import { fetchCharacters, fetchCharacterById } from "../services";
import { LOAD_CHARACTERS, LOAD_CHARACTER_ITEM } from "../types";

function* LoadCharacters(action) {
    try {
        const charactersLoad = yield fetchCharacters(action.payload)
        console.log("[SAGA SUCCESS] values : ", charactersLoad);
        yield put(actions.actionCreators.loadCharactersSuccess(charactersLoad));
    } catch (error) {
        console.log("[SAGA ERROR] values : ", error);
        yield put(actions.actionCreators.loadCharactersError(error));
    }
}

function* LoadCharacterById(action) {
    try {
        const characterLoad = yield fetchCharacterById(action.payload)
        console.log("[SAGA SUCCESS] values : ", characterLoad);
        yield put(actions.actionCreators.loadCharacterItemSuccess(characterLoad));
    } catch (error) {
        console.log("[SAGA ERROR] values : ", error);
        yield put(actions.actionCreators.loadCharacterItemError(error));
    }
}

export default function* sagas() {
    yield takeLatest(LOAD_CHARACTERS, LoadCharacters);
    yield takeLatest(LOAD_CHARACTER_ITEM, LoadCharacterById);
}
