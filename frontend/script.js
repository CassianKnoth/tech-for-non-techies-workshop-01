// DON'T TOUCH THiS CODE! COMPUTER EXPLODES

console.log('script!');

const fetchPosts = async () => {
	const rawPosts = await fetch(
		'https://cjoeuq75.api.sanity.io/v2023-05-03/data/query/production?query=*%5B_type%20%3D%3D%20%22post%22%5D%7Btitle%2C%20body%2C%20publishedAt%7D',
	);

	const parsedPosts = await rawPosts.json();

	return parsedPosts;
};

const placePosts = async () => {
	const posts = await fetchPosts();

	console.log('posts: ', posts);
};

placePosts();
