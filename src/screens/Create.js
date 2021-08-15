import React, { useState, useEffect } from "react";

const Create = () => {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();

  useEffect(() => {
    console.log(title);
    console.log(description);
  }, [title, description]);

  const createBlog = (e) => {
    e.preventDefault();
    console.log("working");
  };

  return (
    <div>
      <div className="h-screen bg-gray-100 flex justify-center">
        <div className="h-2/3 py-6 px-8 h-80 my-auto bg-white rounded shadow-xl w-1/3">
          <form action="" onSubmit={(e) => createBlog(e)}>
            <div className="mb-6">
              <label className="block text-gray-800 font-bold">Title:</label>
              <input
                type="text"
                name="Title"
                id="title"
                placeholder="username"
                className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-gray-800 font-bold">
                Desctiption:
              </label>
              <textarea
                id="description"
                placeholder="Write Your Story"
                className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="cursor-pointer py-2 px-4 block mt-6 bg-indigo-500 text-white font-bold w-full text-center rounded"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Create;
