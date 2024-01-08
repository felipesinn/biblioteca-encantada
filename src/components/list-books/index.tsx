import { Book } from '../../pages/input/input'
import { ItemBook } from '../Item-book'
import { Wrapper } from './style'

interface ListBookProps {
  books: Book[]
  onDelete: (id: number) => void
  onUpdate: (book: Book) => void
}

export function ListBooks({ books, onDelete, onUpdate }: ListBookProps) {
  function handleDelete(id: number) {
    if (confirm('Deseja realmente excluir?')) {
      onDelete(id)
    }
  }

  return (
    <Wrapper>
      {books.map((book) => (
        <ItemBook
          key={book.id}
          book={book}
          handleUpdate={onUpdate}
          handleDelete={handleDelete}
        />
      ))}
    </Wrapper>
  )
}