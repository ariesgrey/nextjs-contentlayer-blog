import { compareDesc, parseISO } from "date-fns";

/* Helper function for applying classNames */
export const cx = (...classNames) => classNames.filter(Boolean).join(" ");

/* Sorts blogs by 'publishedAt' date - latest to oldest */
export const sortBlogs = (blogs) => {
	return blogs
		.slice()
		.sort((a, b) =>
			compareDesc(parseISO(a.publishedAt), parseISO(b.publishedAt))
		);
};
