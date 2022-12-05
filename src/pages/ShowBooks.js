import React from "react";
import { useSelector } from "react-redux";

const ShowBooks = () => {
  const books = useSelector((state) => state.booksReducer.books);
  return (
    <div>
      <h1 className="text-2xl text-center font-bold my-10">Book Showcase</h1>
      <div className="w-1/2 border rounded mx-auto mt-10 overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Author</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {books &&
              books.map((book, i) => (
                <tr key={book.id}>
                  <th>{i + 1}</th>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>
                    <button className="btn btn-xs btn-danger">Edit</button>
                  </td>
                  <td>
                    <button className="btn btn-xs btn-danger">Delete</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShowBooks;
