import React from 'react';
import Board from '../board';
import {shallow} from 'enzyme';
import Square from '../square';

describe('Board', () => {
    it('Should display the current player', () => {
        const board = shallow(<Board player="X"/>)

        expect(board.find('div.status').text()).toBe(`Player: X`)
    })
})