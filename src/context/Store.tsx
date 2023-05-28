import { useContext } from 'react';
import { Context } from './Provider';

export function useStore() {
    return useContext(Context);
}
