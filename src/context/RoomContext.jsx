import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/RoomReducer";
import RoomsApi from "../our-rooms_api/RoomsApi";

const RoomContext = createContext();

const initialState = {
  roome: [],
  isLoading: "",
  isError: "",
  gridView: true,
  filters: {
    text: "",
  },
};

const RoomProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProduct = (API) => {
    dispatch({ type: "ROOM_LOADING" });
    try {
      const roomes = API;
      dispatch({ type: "ROOMS_VIEW", payload: roomes });
    } catch (error) {
      dispatch({ type: "ROOM_ERROR" });
    }
  };

  // SORT_FILE_SET_GRIDVIEW_&_SET_LIST_VIEW
  const setGridView = () => {
    dispatch({ type: "SET_GRID_VIEW" });
  };
  const setListView = () => {
    dispatch({ type: "SET_LIST_VIEW" });
  };

  // SEARCH_ROOM_SORT_FILE
  const searchRoom = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    return dispatch({ type: "SEARCH_ROOM", payload: { name, value } });
  };

  useEffect(() => {
    dispatch({ type: "FILTER_ROOM" });
  }, [state.filters]);

  useEffect(() => {
    getProduct(RoomsApi);
  }, []);

  return (
    <RoomContext.Provider
      value={{ ...state, setGridView, setListView, searchRoom }}
    >
      {children}
    </RoomContext.Provider>
  );
};

// CUSTOM_HOOKS
const useRoomContext = () => {
  return useContext(RoomContext);
};

export { RoomContext, RoomProvider, useRoomContext };
