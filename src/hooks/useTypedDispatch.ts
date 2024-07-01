import { useDispatch } from "react-redux";
import { TRootDispatch } from "../redux/store/globalStore";

export const useTypedDispatch = () => useDispatch<TRootDispatch>()