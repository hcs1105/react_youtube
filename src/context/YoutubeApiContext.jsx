import { createContext, useContext } from "react";
import Youtube from "../API/youtube";
import YoutubeClient from "../API/youtubeClient";
// import FakeYoutubeClient from "../API/fakeYoubeClient";

export const YoutubeApiContext = createContext();

// const client = new FakeYoutubeClient();
const client = new YoutubeClient();
const youtube = new Youtube(client)

export function YoutubeApiProvider({ children }) {
  return <YoutubeApiContext.Provider value={{youtube}}>{children}</YoutubeApiContext.Provider>;
}

export function useYoutubeApi() {
  return useContext(YoutubeApiContext);
}