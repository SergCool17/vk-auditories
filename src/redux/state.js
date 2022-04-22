import { dialogsReducer } from "./dialogs-Reducer";
import { profileReducer } from "./profile-Reducer";
import { sidebarReducer } from "./sidebar-Reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are you?", likesCount: 12 },
        { id: 2, message: "It's my first post", likesCount: 11 },
        { id: 3, message: "Blabla", likesCount: 11 },
        { id: 4, message: "Dada", likesCount: 11 }
      ],
      newPostText: "it-kamasutra.com"
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: "Dimych" },
        { id: 2, name: "Andrew" },
        { id: 3, name: "Sveta" },
        { id: 4, name: "Sasha" },
        { id: 5, name: "Viktor" },
        { id: 6, name: "Valera" }
      ],
      messages: [
        { id: 1, message: "Hi" },
        { id: 2, message: "How is your it-kamasutra?" },
        { id: 3, message: "Yo" },
        { id: 4, message: "Yo" },
        { id: 5, message: "Yo" }
      ],
      newMessageBody: ""
    },
    sidebar: {
      popularPosts: [
        { id: 1, title: "How to make house", viewesCount: 1222 },
        { id: 2, title: "First place in battle", viewesCount: 1121 },
        { id: 3, title: "Top 10 notebooks", viewesCount: 1111 },
        { id: 4, title: "Best service for voicecoding", viewesCount: 1331 }
      ],
      newComment: ""
    }
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log("State changed");
  },

  subscribe(observer) {
    this._callSubscriber = observer; // observer
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  }
};

export default store;
window.store = store;
