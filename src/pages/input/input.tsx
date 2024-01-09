import { useState } from "react";

import { ValidationResult } from "../../components/validate-Form";
import { Wrapper } from "./style";
import { FormContainer, Input, Button, Textarea } from "./style";

import { ListBooks } from "../../components/list-books";

export interface Book {
  id: number;
  title: string;
  author: string;
  gender: string;
  description: string;
  registerDate: string;
  publishYear: string;
}
const emptyBook: Book = {
  id: 0,
  title: "",
  author: "",
  description: "",
  gender: "",
  publishYear: "",
  registerDate: "",
};

export function Inputs() {
  const [book, setBook] = useState<Book>(emptyBook);
  const [books, setBooks] = useState<Book[]>([]);
  const [validationResult, setValidationResult] = useState<ValidationResult>({
    errors: {},
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setBook((prevState) => ({ ...prevState, [name]: value }));
  }

  function validate() {
    const errors = {} as ValidationResult["errors"];
    if (!book.title) {
      errors.title = "*preencha com um nome válido";
    }

    return errors;
  }

  function saveBook(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setValidationResult({ errors: validate() });
    if (book.id !== 0) {
      // Atualizar
      const newBooks = [...books];
      const bookIdx = books.findIndex((b) => b.id === book.id);
      newBooks[bookIdx] = book;
      setBooks(newBooks);
    } else {
      // Criar novo
      setBooks((prevState) => [
        ...prevState,
        {
          ...book,
          registerDate: new Date().toISOString().split("T")[0],
          id: Date.now(),
        },
      ]);
    }

    setBook(emptyBook);
  }

  function handleDelete(id: number) {
    const filteredBooks = books.filter((b) => b.id !== id);
    setBooks(filteredBooks);
  }

  return (
    <Wrapper>
      <form onSubmit={saveBook}>
        <FormContainer>
          <Input
            placeholder="Digite o Título"
            onChange={handleChange}
            name="title"
            value={book.title}
            required
          />

          <Input
            placeholder="Digite o Autor"
            onChange={handleChange}
            name="author"
            value={book.author}
            required
          />

          <label>
            Ano de publicação
            <Input
              placeholder="Digite o Ano da Publicação"
              onChange={handleChange}
              name="yearPublication"
              type="date"
              value={book.publishYear}
              max={new Date().toISOString().split("T")[0]}
            />
          </label>

          <Input
            placeholder="Gênero"
            onChange={handleChange}
            name="gender"
            value={book.gender}
            required
          />

          <Textarea
            placeholder="Digite uma breve Descrição."
            onChange={handleChange}
            name="description"
            value={book.description}
            required
          />

          {validationResult.errors.description && (
            <div style={{ color: "red" }}>
              {validationResult.errors.description}
            </div>
          )}

          <Button type="submit">
            {book.id === 0 ? "Cadastrar" : "Atualizar"}
          </Button>
        </FormContainer>
      </form>

      <div>
        <ListBooks books={books} onUpdate={setBook} onDelete={handleDelete} />
      </div>
    </Wrapper>
  );
}
