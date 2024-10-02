import { LoaderContext } from "@/core/providers/LoaderProvider";
import { useContext } from "react";

export const useLoader = () => useContext(LoaderContext);
