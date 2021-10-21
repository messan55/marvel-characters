import { actionCreators } from "../../actions";

describe("ACTIONS", () => {
    it("should create an action with correct type LOAD_CHARACTERS", () => {
        const expectedAction = {
            type: "LOAD_CHARACTERS"
        }
        expect(actionCreators.loadCharacters()).toEqual(expectedAction)
    });

    it("should create an action with correct type LOAD_CHARACTERS_SUCCESS", () => {
        const expectedAction = {
            type: "LOAD_CHARACTERS_SUCCESS"
        }
        expect(actionCreators.loadCharactersSuccess()).toEqual(expectedAction)
    });

    it("should create an action with correct type LOAD_CHARACTERS_ERROR", () => {
        const expectedAction = {
            type: "LOAD_CHARACTERS_ERROR"
        }
        expect(actionCreators.loadCharactersError()).toEqual(expectedAction)
    });

    it("should create an action with correct type LOAD_CHARACTER_ITEM", () => {
        const expectedAction = {
            type: "LOAD_CHARACTER_ITEM"
        }
        expect(actionCreators.loadCharacterItem()).toEqual(expectedAction)
    });

    it("should create an action with correct type LOAD_CHARACTER_ITEM_SUCCESS", () => {
        const expectedAction = {
            type: "LOAD_CHARACTER_ITEM_SUCCESS"
        }
        expect(actionCreators.loadCharacterItemSuccess()).toEqual(expectedAction)
    });

    it("should create an action with correct type LOAD_CHARACTER_ITEM_ERROR", () => {
        const expectedAction = {
            type: "LOAD_CHARACTER_ITEM_ERROR"
        }
        expect(actionCreators.loadCharacterItemError()).toEqual(expectedAction)
    });
})