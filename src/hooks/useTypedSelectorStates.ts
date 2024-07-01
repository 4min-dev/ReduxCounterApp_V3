import { TypedUseSelectorHook, useSelector } from "react-redux";
import { TRootTypeState } from "../redux/store/globalStore";

export const useTypedSelectorStates:TypedUseSelectorHook<TRootTypeState> = useSelector