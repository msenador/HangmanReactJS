import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('Home Page', () => {
    beforeEach(() => {
        render(<Home/>)
    })
    test('renders a header with "Start a new game!".', () => {
        const startHeader = screen.getByTestId('startHeader')
        expect(startHeader).toHaveTextContent('Start a new game!')
    })
})