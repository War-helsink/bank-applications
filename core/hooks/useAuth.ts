import { AuthContext } from "@/core/providers/AuthProvider";
import { useContext } from "react";

export const useAuth = () => useContext(AuthContext);
