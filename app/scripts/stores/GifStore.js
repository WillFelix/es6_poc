import { EventEmitter } from "events";
import dispatcher from "../dispatcher";
import axios from "axios";

class GifStore extends EventEmitter {

    constructor() {
        super();
        this.image = null;
    }

    gif() {
        return this.image;
    }

    generate() {
        axios.get(`http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC`)
        .then((result) => {
            this.image = result.data.data.image_original_url;
            this.emit("change");
        });
    }

    handleActions(action) {
        switch (action.type) {
            case "gif":
                this.generate();
                break;
        }
    }

}

const store = new GifStore;
dispatcher.register(store.handleActions.bind(store));

export default store;
