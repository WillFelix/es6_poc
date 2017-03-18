import dispatcher from "../dispatcher";

export function findByActor(name) {
    dispatcher.dispatch({
        type: "actor",
        text: name
    });
}
