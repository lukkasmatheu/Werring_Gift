import React from 'react';
import {Content, Bar, Main} from './styles';

const Loading: React.FC = () => {
    return (
        <Main>
            <Content>
                <Bar id="cool-1"></Bar>
                <Bar id="cool-2"></Bar>
                <Bar id="cool-3"></Bar>
            </Content>
            <div className={'load'}>Loading...</div>
        </Main>
    );
};

export default Loading;
