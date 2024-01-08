import { useState } from "react";

import { Wrapper } from "./style";
import { FormContainer, Input, Button } from "./style";

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
  const [validationResult, setValidationResult] = useState<{
    isValid: boolean;
    errors: { [key: string]: string };
  }>({ isValid: true, errors: {} });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setBook((prevState) => ({ ...prevState, [name]: value }));
  }

  function validateForm() {
    const errors: { [key: string]: string } = {};

    if (!book.title.trim()) {
      errors.title = "O campo Título é obrigatório.";
    }

    if (!book.author.trim()) {
      errors.author = "O campo Autor é obrigatório.";
    }

    if (!book.publishYear) {
      errors.publishYear = "O campo Ano da Publicação é obrigatório.";
    }

    if (!book.gender.trim()) {
      errors.gender = "O campo Gênero é obrigatório.";
    }

    if (!book.description.trim()) {
      errors.description = "O campo Descrição é obrigatório.";
    }

    setValidationResult({
      isValid: Object.keys(errors).length === 0,
      errors,
    });

    return Object.keys(errors).length === 0;
  }

  function saveBook(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

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
          />

          {validationResult.errors.title && (
            <div style={{ color: "red" }}>{validationResult.errors.title}</div>
          )}

          <Input
            placeholder="Digite o Autor"
            onChange={handleChange}
            name="author"
            value={book.author}
          />

          {validationResult.errors.author && (
            <div style={{ color: "red" }}>{validationResult.errors.author}</div>
          )}

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
          />

          {validationResult.errors.gender && (
            <div style={{ color: "red" }}>{validationResult.errors.gender}</div>
          )}

          <Input
            placeholder="Digite uma breve Descrição."
            onChange={handleChange}
            name="description"
            value={book.description}
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
