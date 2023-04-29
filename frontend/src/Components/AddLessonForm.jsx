import React, { useState } from 'react';
import axios from 'axios';
import "./AddLessonForm.css"
import NavBar from './NavBar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddLessonForm = () => {
  const [formValues, setFormValues] = useState({
    course_id: '',
    topic_name: '',
    description: '',
    duration: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3001/addlesson', formValues)
      .then((response) => {
        console.log(response);
        // Clear form values after successful submission
        setFormValues({
          course_id: '',
          topic_name: '',
          description: '',
          duration: '',
        });
        // Show success notification
        toast.success('Lesson added successfully!', {
          position: toast.POSITION.TOP_RIGHT
        });
      })
      .catch((error) => {
        console.log(error);
        // Show error notification
        toast.error('An error occurred while adding the lesson.', {
          position: toast.POSITION.TOP_RIGHT
        });
      });
  };

  return (
    <div>
      <NavBar/>
      <form onSubmit={handleSubmit} className="add-lesson-form">
        <div className="form-group">
          <label htmlFor="course_id">Course ID:</label>
          <input
            type="text"
            name="course_id"
            id="course_id"
            value={formValues.course_id}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="topic_name">Topic Name:</label>
          <input
            type="text"
            name="topic_name"
            id="topic_name"
            value={formValues.topic_name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            name="description"
            id="description"
            value={formValues.description}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="duration">Duration: </label>
          <input
            type="number"
            name="duration"
            id="duration"
            value={formValues.duration}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className="submit-btn">Add Lesson</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default AddLessonForm;
