import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../style/Courses.css"

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('/api/courses');
        setCourses(response.data);
      } catch (error) {
        console.error('Error fetching courses', error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div style={{textAlign:"center", padding:"10px"}}>
      <h2>Welcome to freeCodeCamp.org</h2>
      <blockquote>
        "I have not failed. I've just found 10,000 ways that won't work."
        <span>– Thomas A. Edison</span>
      </blockquote>
      <div>
        {courses.map((course, index) => (
          <div className='tittle-duration' key={index}>
            <p>{course.title}</p>
            <p>{`(${course.duration} hours)`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
