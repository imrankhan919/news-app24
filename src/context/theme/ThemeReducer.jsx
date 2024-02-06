// Reducer Function For Theme

const ThemeReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_THEME":
      return {
        ...state,
        darkMode: state.darkMode ? false : true,
      };
  }
};

export default ThemeReducer;
