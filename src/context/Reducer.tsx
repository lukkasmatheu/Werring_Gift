type ActionMap<M extends { [index: string]: any }> = {
    [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
    }
    : {
        type: Key;
        payload: M[Key];
    }
};
export interface StateProps {
    id: number
    acessKey: string
}

export enum Types {
    Create = 'CREATE',
    Delete = 'DELETE',
    Add = 'ADD_PRODUCT',
}
type ProductPayload = {
    [Types.Create]: {
        id: number;
        acessKey: string;
    };
    [Types.Delete]: {
        id: number;
    }
}

export type ProductActions = ActionMap<ProductPayload>[keyof ActionMap<ProductPayload>];

export const productReducer = (state: StateProps, action: ProductActions) => {
    console.log(action)
    switch (action.type) {
        case Types.Create:
            return {
                acessKey: action.payload.acessKey,
                id: state.id + 1
            }
        case Types.Delete:
            return {
                acessKey: "",
                id: 0
            }


        default:
            return state;
    }
}
