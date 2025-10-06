import React from "react";
import "./BlogCard.scss";

export default function BlogCard({ post }) {
	return (
		<article className="card">
			<div className="card-media" />
			<div className="card-body">
				<h3>{post.title}</h3>
				<p className="excerpt">{post.excerpt || "Read more..."}</p>
				<a className="read-more" href={`/blog/${post.slug}`}>
					Read
				</a>
			</div>
		</article>
	);
}
