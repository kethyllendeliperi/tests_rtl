import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

describe('Teste para comentários no post', () => {
    test('Deve renderizar o primeiro comentário', () => {
        render(<PostComment />)
        fireEvent.change(screen.getByTestId('campo-comentario'), {
            target: {
                value: 'Comentário 1'
            }
        })
        fireEvent.click(screen.getByTestId('btn-comentario'))
        expect(screen.getByText('Comentário 1')).toBeInTheDocument()
    })

    test('Deve renderizar o segundo comentário', () => {
        render(<PostComment />)
        fireEvent.change(screen.getByTestId('campo-comentario'), {
            target: {
                value: 'Comentário 2'
            }
        })
        fireEvent.click(screen.getByTestId('btn-comentario'))
        expect(screen.getByText('Comentário 2')).toBeInTheDocument()
    })
})