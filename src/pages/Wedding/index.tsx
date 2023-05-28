import { useEffect, useState } from 'react';
import * as S from './styles';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../../context/Store';
import { Types } from '../../context/Reducer';
import Brind from '../../assets/tintin.svg'

const Wedding: React.FC = () => {
    const { state, dispatch } = useStore();
    const navigate = useNavigate();
    const [inputEnter, setInputEnter] = useState<string>('');
    useEffect(() => {
        console.log(state)
    }, [state]);

    const nextStepKey = (e: any) => {
        if (e.key === 'Enter' && inputEnter.length > 3) {
            dispatch({ type: Types.Create, payload: { id: inputEnter.length, acessKey: inputEnter } })
            navigate(inputEnter === 'Vinicius&Susana' ? "home" : "list");
        }
    }


    return (
        <S.Main>
            <img src={Brind} alt="" />
            <S.Input type="text"
                onKeyDown={nextStepKey}
                placeholder='Digite seu email ou nome' value={inputEnter}
                onChange={(e) => { setInputEnter(e.target.value) }} />
        </S.Main>
    );
};

export default Wedding;
