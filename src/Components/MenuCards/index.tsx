import React from 'react';
import { Card } from './styles';

export interface MenuCardsProps {
    to?: string;
    title?: string;
    image?: string;
    description?: string;
}

const MenuCards: React.FC<MenuCardsProps> = ({
    to,
    title,
    image,
    description,
}) => {
    return (
        <Card to={to!} title={description} >
            <div>
                <img src={image} alt={description} />
                <p>{title}</p>
            </div>
        </Card>
    );
};
export default MenuCards;
