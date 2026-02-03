import { createContext } from "react";
import { useContext } from "react";

export const BloggingContext = createContext();

export const useBloggingContext = () => useContext(BloggingContext);
