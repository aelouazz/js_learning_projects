const DOG_URL = "https://dog.ceo/api/breeds/image/random";

const promise = fetch(DOG_URL);

promise
	.then(response => {
		const processingPromise = response.json();
		return processingPromise;
	})
	.then(processedResponse => 1{
		console.log(processedResponse);
	});

console.log("this will log first");
