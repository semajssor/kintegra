import React from "react";
import BlogCard from "./BlogCard.jsx";
import "./BlogGrid.scss";

/**
 * @typedef {object} Post
 * @property {string} title - The title of the blog post.
 * @property {string} slug - The URL slug for the post.
 * @property {string} excerpt - A short summary of the post.
 */

/**
 * @param {{ posts: Post[] }} props
 */
export default function BlogGrid({ posts = [] }) {
	return (
		<div className="blog-grid">
			{/* @ts-ignore: We use JSDoc for typing, but ts-ignore can prevent lingering errors if types are complex. */}
			{posts.map((p) => (
				<BlogCard key={p.slug} post={p} />
			))}
		</div>
	);
}
