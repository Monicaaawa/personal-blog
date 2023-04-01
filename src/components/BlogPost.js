import React from "react";
import { Link } from "gatsby";
import '../styles/posts.css';

export default function BlogPost({
    title,
    date,
    content,
    link,
}) {
    return (
        <div className="post">
            <Link 
                to={link}
                style={{ fontSize: "32px" }}
            >
                {title}
            </Link>
            <p className="postDate">Posted on {date}</p>
            <p className="postContent">{content}</p>
        </div>
    );
}