import { EventEmitter } from "events";
import dispatcher from "../dispatcher";
import axios from "axios";

class ChuckStore extends EventEmitter {

    constructor() {
        super();
        this.phrases = [];
    }

    all() {
        return this.phrases;
    }

    generate() {
		axios.get("http://api.icndb.com/jokes/random/3")
		.then((result) => {
			this.phrases = result.data.value;
            this.emit("change");
		});
    }

    handleActions(action) {
        switch (action.type) {
            case "chuck":
                this.generate();
                break;
        }
    }

}

const store = new ChuckStore;
dispatcher.register(store.handleActions.bind(store));

export default store;
