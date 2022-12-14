import { Button, Form, Heading, Input, Select } from "components";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { articleAdd } from "redux/actions/articleAction";
import "./add-post.scss";

const AddPost = () => {
  const [select, setSelect] = useState("");
  const [files, setFiles] = useState([]);
  const [data, setData] = useState({
    title: "",
    content: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData({ ...data, [name]: value });
  };

  const handleFileChange = (e) => {
    const newfiles = [...e.target.files];

    if (newfiles.length) {
      setFiles([...files, ...newfiles]);
    }
  };

  const handleRemoveImage = (idx) => {
    const newImages = [...files];
    newImages.splice(idx, 1);
    setFiles(newImages);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const newData = {
      title: data.title,
      content: data.content,
      category: select,
    };
    const { title, content, category } = newData;

    if ((!title && !content && !category) || files.length === 0) return;

    dispatch(articleAdd(newData, files, navigate));
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

        {files && (
          <div className="file_images">
            {files.map((file, index) => (
              <img
                src={URL.createObjectURL(file)}
                alt=""
                onClick={() => handleRemoveImage(index)}
              />
            ))}
          </div>
        )}

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
