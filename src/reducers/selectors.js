import { createSelector } from "reselect";

export const charactersStateSelector = state => state;
export const charactersLoadingSelector = createSelector(charactersStateSelector, state => state.loading);
export const charactersRequestPayloadSelector = createSelector(charactersStateSelector, state => state.requestPayload);
export const charactersPageSelector = createSelector(charactersStateSelector, state => state.filesCharacters)
export const characterItemLoadingSelector = createSelector(charactersStateSelector, state => state.loading);
export const characterItemRequestPayloadSelector = createSelector(charactersStateSelector, state => state.requestPayload);
export const characterItemPageSelector = createSelector(charactersStateSelector, state => state.filesCharacterItem)