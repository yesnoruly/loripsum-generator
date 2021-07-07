import {createEffect} from "effector";

export const fetchLoripsumDataFx = createEffect((num = 1) => {
	const url = `https://mashape-community-skate-ipsum.p.rapidapi.com/${num}/0/JSON`;
	const options = {
		"method": "GET",
		"headers": {
			"x-rapidapi-key": "d0db3facf7msh4bd8b090d719809p1008bdjsn138563af4356",
			"x-rapidapi-host": "mashape-community-skate-ipsum.p.rapidapi.com"
		}
	}

	return fetch(url, options)
		.then(req => req.json())
		.catch(err => console.log(err))
})