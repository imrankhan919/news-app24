const NewsReducer = (state, action) => {
  switch (action.type) {
    case "GET_NEWS":
      return {
        ...state,
        allNews: action.payload,
      };
  }
};

export default NewsReducer;
