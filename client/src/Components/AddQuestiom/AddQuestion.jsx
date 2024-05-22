import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./AddQuestion.css";

const AddQuestion = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    goals: "",
    courses: "",
    topics: "",
    difficulty: "1",
    questionType: "MCQ",
    question: "",
    options: [],
    hint: "",
    solution: "",
  });

  const goalsOptions = {
    "": ["Choose a course"],
    "IIT JEE": ["Physics", "Chemistry", "Mathematics"],
    NEET: ["Physics", "Chemistry", "Biology"],
    GMAT: ["Quantitative", "Verbal", "Integrated Reasoning"],
    GRE: ["Quantitative", "Verbal", "Analytical Writing"],
  };

  useEffect(() => {
    setForm({
      ...form,
      courses: "",
    });
  }, [form.goals]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOptionChange = (index, value) => {
    const newOptions = form.options.slice();
    newOptions[index] = value;
    setForm({
      ...form,
      options: newOptions,
    });
  };

  const addOption = () => {
    setForm({
      ...form,
      options: [...form.options, ""],
    });
  };

  const handleSave = () => {
    // Handle the save logic here, for now just logging the form data
    console.log("Saved question:", form);
    navigate("/");
  };

  return (
    <div className="add-question">
      <div className="header">
        <button className="back-button" onClick={() => navigate("/")}>
          Back
        </button>
        <h2>Edit Question</h2>
        <button className="save-button" onClick={handleSave}>
          Save
        </button>
      </div>
      <div className="splitwindow">
        <div>Preview</div>
        <div className="form">
          <div className="form-group">
            <label>Goals</label>
            <select name="goals" value={form.goals} onChange={handleChange}>
              <option value="">Choose</option>
              <option value="IIT JEE">IIT JEE</option>
              <option value="NEET">NEET</option>
              <option value="GMAT">GMAT</option>
              <option value="GRE">GRE</option>
            </select>
          </div>
          <div className="form-group">
            <label>Courses</label>
            <select name="courses" value={form.courses} onChange={handleChange}>
              {goalsOptions[form.goals].map((course, index) => (
                <option key={index} value={course}>
                  {course}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>Topics</label>
            <select name="topics" value={form.topics} onChange={handleChange}>
              <option value="">Choose</option>
              {/* Add more options here */}
            </select>
          </div>
          <div className="form-group">
            <label>Difficulty Level</label>
            <select
              name="difficulty"
              value={form.difficulty}
              onChange={handleChange}
            >
              <option value="1">1</option>
              {/* Add more options here */}
            </select>
          </div>
          <div className="form-group">
            <label>Question Type</label>
            <select
              name="questionType"
              value={form.questionType}
              onChange={handleChange}
            >
              <option value="MCQ">MCQ</option>
              {/* Add more options here */}
            </select>
          </div>
          <div className="form-group">
            <label>Question</label>
            <textarea
              name="question"
              placeholder="Type here..."
              value={form.question}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Options & Answers</label>
            {form.options.map((option, index) => (
              <input
                key={index}
                type="text"
                value={option}
                onChange={(e) => handleOptionChange(index, e.target.value)}
              />
            ))}
            <button type="button" onClick={addOption}>
              Add
            </button>
          </div>
          <div className="form-group">
            <label>Hint</label>
            <textarea
              name="hint"
              placeholder="Type here..."
              value={form.hint}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Solution</label>
            <textarea
              name="solution"
              placeholder="Type here..."
              value={form.solution}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddQuestion;
