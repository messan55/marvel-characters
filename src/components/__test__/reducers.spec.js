import reducer from "../../reducers";

const mockCharacter = {
    "filesCharacterItem": undefined,
    "filesCharacters": undefined,
    "loading": false,
    "requestPayload": {
        "id": undefined,
        "limit": 20,
        "offset": 0,
    },
};

describe('REDUCER', () => {
    it('should return the initial state', () =>
        expect(reducer(undefined, {})).toEqual(mockCharacter)
    );

    it('should handle "LOAD_CHARACTERS" action', () => {
        expect(reducer({}, { type: 'LOAD_CHARACTERS' }))
            .toEqual({ loading: true })
    });

    it('should handle "LOAD_CHARACTERS_SUCCESS" action', () => {
        expect(reducer({}, { type: "LOAD_CHARACTERS_SUCCESS", json: mockCharacter }))
            .toEqual({ filesCharacters: {}, loading: false })
    });

    it('should handle "LOAD_CHARACTERS_ERROR" action', () => {
        expect(reducer({}, { type: "LOAD_CHARACTERS_ERROR", json: mockCharacter }))
          .toEqual({ filesCharacters: undefined, loading: false })
    });

    it('should handle "LOAD_CHARACTER_ITEM" action', () => {
        expect(reducer({}, { type: 'LOAD_CHARACTER_ITEM' }))
            .toEqual({ loading: true })
    });

    it('should handle "LOAD_CHARACTER_ITEM_SUCCESS" action', () => {
        expect(reducer({}, { type: "LOAD_CHARACTER_ITEM_SUCCESS", json: mockCharacter }))
            .toEqual({ filesCharacterItem: {}, loading: false })
    });

    it('should handle "LOAD_CHARACTER_ITEM_ERROR" action', () => {
        expect(reducer({}, { type: "LOAD_CHARACTERS_ERROR", json: mockCharacter }))
          .toEqual({ filesCharacterItem: undefined, loading: false })
    });
});
