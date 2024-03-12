import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/RoomReducer";
import RoomsApi from "../our-rooms_api/RoomsApi";

const RoomContext = createContext();

const initialState = {
  roome: [],
  isLoading: "",
  isError: "",
  gridView: true,
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

  useEffect(() => {
    getProduct(RoomsApi);
  }, []);
  return (
    <RoomContext.Provider value={{ ...state }}>{children}</RoomContext.Provider>
  );
};

// CUSTOM_HOOKS
const useRoomContext = () => {
  return useContext(RoomContext);
};

export { RoomContext, RoomProvider, useRoomContext };
