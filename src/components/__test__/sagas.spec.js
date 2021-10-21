import { put, takeLatest } from "redux-saga/effects";
import { charactersSaga, LoadCharacters, LoadCharacterById } from "../../sagas";

describe("SAGAS", () => {
    it('should dispatch action "LOAD_CHARACTERS"', () => {
        const generator = charactersSaga();
        expect(generator.next().value)
            .toEqual(takeLatest("LOAD_CHARACTERS", LoadCharacters));
        expect(generator.next().done).toBeTruthy();
   });
   
   it('should dispatch action "LOAD_CHARACTER_ITEM"', () => {
    const generator = charactersSaga();
    expect(generator.next().value)
        .toEqual(takeLatest("LOAD_CHARACTER_ITEM", LoadCharacterById));
    expect(generator.next().done).toBeTruthy();
});

   it('should dispatch action "LOAD_CHARACTERS" with result from fetch News API', () => {
      const mockResponse = { "articles": "Some content" }; 
      const generator = LoadCharacters();
      generator.next();
      expect(generator.next(mockResponse).value)
       .toEqual(put({type:"LOAD_CHARACTERS", json:"Some content"}))
      expect(generator.next().done).toBeTruthy();
   })
})