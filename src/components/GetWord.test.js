import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import GetWord from './GetWord'

configure({adapter: new Adapter()});

describe('Get Word page', () => {
    it('renders an input bow to enter secret word', () => {
        let getWord = shallow(<GetWord/>)
        expect(getWord.find('input[name="secretWord"]')).toHaveLength(1)
    })
})