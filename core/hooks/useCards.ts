import { CardsContext } from "@/core/providers/CardsProvider";
import { useContext } from "react";

export const useCards = () => useContext(CardsContext);
