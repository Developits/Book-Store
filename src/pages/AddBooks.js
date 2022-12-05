import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBook } from "./BooksSlice";

const AddBooks = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const numberOfBooks = useSelector((state) => state.booksReducer.books.length);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const author = form.author.value;
    const book = {
      id: numberOfBooks + 1,
      title,
      author,
    };
    dispatch(addBook(book));
    navigate("/showbooks", { replace: true });
  };
  return (
    <div>
      <h1 className="text-2xl text-center font-bold my-10">Add Book</h1>
      <div className="w-1/2 p-8 rounded mt-6 border mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label className="label">
              <span>Title</span>
            </label>
            <input
              type="text"
              name="title"
              placeholder="Book name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Author</span>
            </label>
            <input
              type="text"
              name="author"
              placeholder="Author name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control mt-2">
            <input className="btn btn-primary" type="submit" value="Add Book" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBooks;
