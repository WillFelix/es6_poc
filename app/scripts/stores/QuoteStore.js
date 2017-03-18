import { EventEmitter } from "events";
import dispatcher from "../dispatcher";
import axios from "axios";

class QuoteStore extends EventEmitter {

    constructor() {
        super();
        this.quotes = [];
    }

    all() {
        return this.quotes;
    }

    generate() {
        axios.get(`http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=10`)
        .then((result) => {
            this.quotes = result.data;
            this.emit("change");
        });
    }

    handleActions(action) {
        switch (action.type) {
            case "quotes":
                this.generate();
                break;
        }
    }

}

const store = new QuoteStore;
dispatcher.register(store.handleActions.bind(store));

export default store;
