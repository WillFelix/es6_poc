import dispatcher from "../dispatcher";

export function generate() {
    dispatcher.dispatch({
        type: "quotes"
    });
}
