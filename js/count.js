function timeit(fn) {
	const t = () => new Date().getTime();

	return function (...args) {
		const start = t();

		return new Promise((res, rej) => {
			Promise.resolve(fn(...args))
				.then((value) => {
					res({ value, time: t() - start });
				})
				.catch((err) => rej(err));
		});
	};
}