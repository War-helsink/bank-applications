import { LoaderContext } from "@/providers/loader";
import { useContext } from "react";

export const useLoader = () => useContext(LoaderContext);
