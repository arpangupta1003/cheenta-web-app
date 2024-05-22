import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import QuestionTable from './Components/QuestionTable/QuestionTable.jsx';
import AddQuestion from './Components/AddQuestiom/AddQuestion.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<QuestionTable />} />
        <Route path="/add-question" element={<AddQuestion />} />
      </Routes>
    </Router>
  );
}

export default App;
