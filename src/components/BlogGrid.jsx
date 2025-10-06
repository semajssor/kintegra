import React from "react";
import BlogCard from "./BlogCard.jsx";
import "./BlogGrid.scss";

export default function BlogGrid({ posts = [] }) {
	return (
		<div className="blog-grid">
			{posts.map((p) => (
				<BlogCard key={p.slug} post={p} />
			))}
		</div>
	);
}
