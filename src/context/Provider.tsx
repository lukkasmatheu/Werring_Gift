import { Dispatch, createContext, useReducer } from 'react';
import { ProductActions, StateProps, productReducer } from './Reducer';

type ContextType = {
    state: StateProps
    dispatch: Dispatch<ProductActions>
}

const initialState = {
    acessKey: "",
    id: 0
};

export interface Props {
    children?: React.ReactNode;
}

export const Context = createContext<ContextType>({ state: initialState, dispatch: () => null });
export const { Consumer, Provider } = Context;

const reducer = (state: StateProps, action: ProductActions) => {
    return productReducer(state, action);
}



export default function StoreProvider(props: Props) {
    const [state, dispatch] = useReducer(reducer, initialState);
    return <Provider value={{ state, dispatch }}>{props.children}</Provider>;
}
