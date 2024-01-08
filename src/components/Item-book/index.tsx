import { Book } from "../../pages/input/input";
import { ButtoUpdate, ButtonDel, Wrapper, ButtonContainer } from "./style";

import { Pencil, Trash2 } from "lucide-react";

interface ItemBookProps {
  book: Book;
  handleDelete: (id: number) => void;
  handleUpdate: (Book: Book) => void;
}

export function ItemBook({ book, handleDelete, handleUpdate }: ItemBookProps) {
  return (
    <Wrapper>
      <div>
        <h4>Título: {book.title}</h4>
        <div>
          <span>Autor: {book.author}</span>
        </div>

        <div>
          <span>Gênero: {book.gender}</span>
        </div>

        <div>
          <span>Ano de publicação: {book.publishYear}</span>
        </div>
      </div>

      <div>
        <span>Descrição</span>
        <p>{book.description}</p>
      </div>

      <div>
        <span>Data de Registro: {book.registerDate}</span>
      </div>

      <ButtonContainer>
        <div>
          <ButtonDel onClick={() => handleDelete(book.id)}>
            <Trash2 />
          </ButtonDel>
        </div>

        <div>
          <ButtoUpdate onClick={() => handleUpdate(book)}>
            <Pencil />
          </ButtoUpdate>
        </div>
      </ButtonContainer>
    </Wrapper>
  );
}
