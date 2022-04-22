const UPDATE_NEW_COMMENT = "UPDATE_NEW_COMMENT";
const SEND_COMMENT = "SEND-COMMENT";

let initialState = {
  popularPosts: [
    { id: 1, title: "How to make house", viewesCount: 1222 },
    { id: 2, title: "First place in battle", viewesCount: 1121 },
    { id: 3, title: "Top 10 notebooks", viewesCount: 1111 },
    { id: 4, title: "Best service for voicecoding", viewesCount: 1331 }
  ],
  newComment: ""
};

export const sidebarReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_COMMENT: {
      let stateCopy = { ...state };
      stateCopy.newComment = action.comment;
      return stateCopy;
    }
    case SEND_COMMENT: {
      let stateCopy = { ...state };
      let newComment = state.newComment;
      stateCopy.popularPosts.push({ id: 6, title: newComment, viewesCount: 1 });
      stateCopy.newComment = "";
      return stateCopy;
    }
    default:
      return state;
  }
};

export const updateCommentCreator = (comment) => ({
  type: UPDATE_NEW_COMMENT,
  comment: comment
});
export const sendCommentCreator = () => ({ type: SEND_COMMENT });
