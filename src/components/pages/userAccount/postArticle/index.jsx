import React, { useState, useReducer } from "react";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Container, Button, Box } from "./articleStyles";
import { usePostRequest } from "../../../api/api";

import imageIcon from "../../../assets/image.png";

const modules = {
  toolbar: [
    [{ font: [] }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike"],
    [{ color: [] }, { background: [] }],
    [{ script: "sub" }, { script: "super" }],
    ["blockquote", "code-block"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ indent: "-1" }, { indent: "+1" }, { align: [] }],
    ["link", "image", "video"],
    ["clean"],
  ],
};

const Index = () => {
  const [value, setValue] = useState(null);
  const { postRequest } = usePostRequest();

  const formReducer = (state, event) => {
    return {
      ...state,
      [event.name]: event.value,
    };
  };

  const [formData, setFormData] = useReducer(formReducer, {});

  const handleChange = (e) => {
    let event = e.target;
    const fileType = event.type === "file";

    setFormData({
      name: event.name,
      value: fileType ? event.files[0] : event.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const postValues = new FormData();
    postValues.append("text", value);
    postValues.append("title", formData.title);
    postValues.append("photo", formData.photo);
    postValues.append("is_Article", false);

    postRequest("posts/", postValues);
  };

  return (
    <React.Fragment>
      <Container>
        <Box>
          <div className="btnBox">
            <Button
              border="1px solid #29BB89"
              width="140px"
              height="40px"
              bc="white"
              color="#29BB89"
              br="20px"
            >
              Save As Draft
            </Button>
            <Button
              border="none"
              width="140px"
              height="40px"
              bc="#29BB89"
              color="white"
              br="20px"
              onClick={handleSubmit}
            >
              Publish
            </Button>
          </div>

          <div className="photoBox">
            <input
              type="file"
              className="photo"
              name="photo"
              onChange={handleChange}
              id="photo"
            />
            <label for="photo">
              <img
                src={
                  formData.photo
                    ? URL.createObjectURL(formData.photo)
                    : imageIcon
                }
                alt="image icon"
              />
            </label>
          </div>

          <input
            className="title"
            type="text"
            name="title"
            placeholder="Headline"
            onChange={handleChange}
          />

          <select name="" id="" className="select">
            <option value="">---Select Topic---</option>
          </select>

          <div className="richText">
            <ReactQuill
              modules={modules}
              theme="snow"
              onChange={setValue}
              placeholder="Content goes here..."
            />
          </div>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default Index;
