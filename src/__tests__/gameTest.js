import React from 'react';
import Game from '../game';
import Board from '../board';
import {shallow} from 'enzyme';

describe('Game', () => {
    it('should have a Board', () => {
        const game = shallow(<Game />);

        expect(game.find(Board).length).toBe(1);
    });
    it('first turn should be an X', () => {
        const game = shallow(<Game />);

        expect(game.state().player).toBe("X");
    });
    it('should have a Board with a player', () => {
        const game = shallow(<Game />);

       expect(game.find(Board).props().player).toBe('X'); 
    });
});