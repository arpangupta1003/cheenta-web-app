import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './QuestionTable.css';

const QuestionTable = () => {
  const navigate = useNavigate();
  const [questions] = useState([
    {
      question: 'If \\( \\sqrt{2} + \\sqrt{2} + \\sqrt{2} + \\cdots + \\sqrt{2} = 2^{10} \\), then find the number of \\( \\sqrt{2} \\)s needed to get the answer \\( 2^{10} \\).',
      author: 'uslevel2@cheenta.com',
      created: 'Mar 4, 2021',
      topic: 'Square Roots',
      approved: true
    },
    {
      question: 'The sum of all natural numbers a such that \\( a^2 - 16a + 67 \\) is a perfect square is:',
      author: 'isicmi@cheenta.com',
      created: 'Mar 23, 2021',
      topic: 'Roots of Polynomials',
      approved: false
    },
    {
      question: 'Let z be a complex number such that \\( \\sum_{i=1}^{n} z_i = 0 \\) is purely imaginary. Then the minimum value of \\( |z - (2 + 2i)| \\) is:',
      author: 'isicmi@cheenta.com',
      created: 'Mar 15, 2021',
      topic: 'Geometry of Complex Numbers',
      approved: false
    },
    {
      question: 'Let S be the set of all points z in the complex plane such that \\( \\left(1 + \\frac{1}{z}\\right)^4 = 1 \\). Then, the points of S are:',
      author: 'isicmi@cheenta.com',
      created: 'Mar 17, 2021',
      topic: 'Nth Roots of Unity',
      approved: true
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const filteredQuestions = questions.filter(q =>
    q.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="question-table">
      <div className="header">
        <button className="tab">Published (2)</button>
        <button className="tab">Draft (12)</button>
        <h2>ALGEBRA III</h2>
        <input 
          type="text" 
          placeholder="Search by question" 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <button className="add-button" onClick={() => navigate('/add-question')}>ADD A QUESTION</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Question</th>
            <th>Author</th>
            <th>Topics</th>
          </tr>
        </thead>
        <tbody>
          {filteredQuestions.map((q, index) => (
            <tr key={index} className={q.approved ? 'approved' : 'not-approved'}>
              <td>{q.question}</td>
              <td>{q.author}</td>
              <td>{q.topic}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default QuestionTable;
