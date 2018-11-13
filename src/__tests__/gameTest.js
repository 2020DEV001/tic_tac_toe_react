import React from 'react';
import Game from '../game';
import Board from '../board';
import {shallow} from 'enzyme';

describe('Game', () => {
    it('first turn should be an X', () => {
        const game = shallow(<Game />);

        expect(game.state().player).toBe("X");
    });
    it('should have a Board with the player of the game', () => {
        const game = shallow(<Game />);

       expect(game.find(Board).props().player).toBe(game.state().player); 
    });
});