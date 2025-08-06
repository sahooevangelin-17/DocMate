// src/pages/Auth/Patient/Articles.jsx
import React from "react";
import "./Articles.css";

const articlesData = [
  {
    id: 1,
    title: "New Vaccine Research Shows Promising Results",
    summary: "Recent studies indicate a 90% effectiveness rate in the new COVID variant vaccine.",
    author: "Dr. Meera Joshi",
    date: "August 5, 2025",
  },
  {
    id: 2,
    title: "10 Tips for Managing Diabetes",
    summary: "Simple daily habits can help control blood sugar levels and improve quality of life.",
    author: "Health India Team",
    date: "July 30, 2025",
  },
  {
    id: 3,
    title: "Understanding Mental Health in Youth",
    summary: "Rising cases of anxiety and depression require early intervention and awareness.",
    author: "Dr. Sanjay Mehta",
    date: "July 20, 2025",
  },
  {
    id: 4,
    title: "Digital Health Records: A Game Changer",
    summary: "How EHR systems are transforming patient-doctor communication and treatment.",
    author: "TechMed News",
    date: "July 10, 2025",
  },
];

const Articles = () => {
  return (
    <div className="articles-container">
      <h1>Health & Medical Articles</h1>
      <p className="articles-subheading">
        Stay updated with the latest health news, tips, and research updates.
      </p>

      <div className="articles-list">
        {articlesData.map((article) => (
          <div key={article.id} className="article-card">
            <h3>{article.title}</h3>
            <p className="summary">{article.summary}</p>
            <div className="meta">
              <span>{article.author}</span>
              <span>{article.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;
