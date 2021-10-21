import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { charactersSaga } from "../sagas";
import reducer from "../reducers";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(charactersSaga)

export default store
