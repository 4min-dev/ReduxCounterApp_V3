import { TypedUseSelectorHook } from "react-redux";
import { select } from "redux-saga/effects";
import { TRootTypeState } from "../redux/store/globalStore";

export const useTypedSelectorStatesSaga:TypedUseSelectorHook<TRootTypeState> = select