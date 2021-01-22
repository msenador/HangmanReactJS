import StartPage from './StartPage'
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});

describe('Start Page', () => {
    it('Should render a "Start Game" button', () => {
        let startPage = shallow(<StartPage/>)
        expect(startPage.find('button[name="startGame"]')).toHaveLength(1)
    })
})