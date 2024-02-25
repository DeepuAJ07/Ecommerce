import {render,screen} from '@testing-library/react'
import Header from './Header'
test('check component loaded', () => { 
    render(<Header/>);
expect(screen.queryByText(/Ecommerce/)).toBeInTheDocument()
 })