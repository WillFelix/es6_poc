import { EventEmitter } from "events";
import dispatcher from "../dispatcher";
import axios from "axios";

class MovieStore extends EventEmitter {

    constructor() {
        super();
        this.movies = [];
        this.hasError = false;
    }

    all() {
        return this.movies;
    }

    hasError() {
        return this.hasError;
    }

    findByActor(name) {
        axios.get(`http://netflixroulette.net/api/api.php?actor=${name}`)
        .then((result) => {
            if (result.message) {
                this.hasError = true;
            } else {
                this.movies = result.data;
                this.hasError = false;
            }

            this.emit("change");
        });
    }

    handleActions(action) {
        console.info("Action Dispatcher: ", action);

        switch (action.type) {
            case "actor":
                this.findByActor(action.text);
                break;
        }
    }

}

const store = new MovieStore;
dispatcher.register(store.handleActions.bind(store));

export default store;
