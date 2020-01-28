import { Film } from "../../api/types";

export interface State {
    film: Film | null
    isError: boolean
    isLoading: boolean
}

export  interface Props {
}