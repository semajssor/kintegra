import React from "react";
import "../styles/BlogCard.scss";

function BlogCard({ post }) {
	const { title, excerpt, slug, image } = post;

	return (
		<article className="card">
			<div
				className="card-media"
				style={image ? { backgroundImage: `url(${image})` } : undefined}
				aria-label={title}
				role="img"
			/>
			<div className="card-body">
				<h3>{title}</h3>
				<p className="excerpt">{excerpt ?? "Read more..."}</p>
				<a className="read-more" href={`/blog/${slug}`}>
					Read
				</a>
			</div>
		</article>
	);
}

export default BlogCard;