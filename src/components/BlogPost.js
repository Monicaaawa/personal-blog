import React from "react";
import { Link } from "gatsby";
import '../styles/posts.css';

export default function BlogPost({
    title,
    date,
    content,
    link,
    language,
}) {
    return (
        <div className="post">
            <Link 
                to={link}
                style={{ fontSize: "35px" }}
            >
                {title}
            </Link>
            <p className="postDate">Posted on {date}, {language}</p>
            <p className="postContent">{content}</p>
        </div>
    );
}