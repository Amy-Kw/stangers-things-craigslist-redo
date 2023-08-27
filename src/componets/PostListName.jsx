import React from "react";
import { useNavigate } from "react-router-dom";

export default function PostListName({ id }) {
  const navigate = useNavigate();
  return (
    <div>
      <h3>{id.title}</h3>
      <button
        onClick={() => {
          navigate(`/${title.id}`);
        }}
      >
        See Details
      </button>
    </div>
  );
}