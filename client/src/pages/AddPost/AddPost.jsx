import { Button, Form, Heading, Input, Select } from "components";
import React, { useState } from "react";
import "./add-post.scss";

const AddPost = () => {
  const [select, setSelect] = useState("");
  const [file, setFile] = useState();
  const [data, setData] = useState({
    title: "",
    content: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData({ ...data, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setFile(file);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const newData = {
      title: data.title,
      content: data.content,
      category: select,
      file: file,
    };

    console.log(newData);
  };

  return (
    <div className="add-post">
      <Heading>Добавить Пост</Heading>
      <Form onSubmit={onSubmit}>
        <div className="add-post-file">
          <label htmlFor="file_choose">
            <input
              type="file"
              multiple
              id="file_choose"
              onChange={handleFileChange}
            />
            <div>
              <div></div>
              <span className="fs-14">Выберите файл(ы) </span>
            </div>
          </label>
        </div>

        <div className="form-group">
          <Input
            placeholder="Введите название поста"
            name="title"
            value={data.title}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <Select select={select} setSelect={setSelect} />
        </div>
        <div className="form-group">
          <Input
            placeholder="Введите описание поста"
            name="content"
            value={data.content}
            onChange={handleChange}
            textarea
          />
        </div>
        <div className="form-group">
          <Button>Добавить</Button>
        </div>
      </Form>
    </div>
  );
};

export default AddPost;
