import {
	createEffect,
	createStore
} from "effector";

export const fetchLoripsumDataFx = createEffect(async (num = 1) => { //create an API request effect
	const url = `https://mashape-community-skate-ipsum.p.rapidapi.com/${num}/1/JSON`;
	const options = {
		"method": "GET",
		"headers": {
			"x-rapidapi-key": "d0db3facf7msh4bd8b090d719809p1008bdjsn138563af4356",
			"x-rapidapi-host": "mashape-community-skate-ipsum.p.rapidapi.com"
		}
	}

	const req = await fetch(url, options).catch(err => console.log(err))
	return req.json()
})

export const $loripsum = createStore([]) // default state
	.on(fetchLoripsumDataFx.doneData, (_, data) => data) //the store is updated when data is received