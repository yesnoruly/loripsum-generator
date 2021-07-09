import {createStore} from "effector";
import {fetchDataFx} from "./effect";

export const $data = createStore([])
	.on(fetchDataFx.doneData, (_, data) => data)

export const $dataJoined = $data.map(arr => arr.join(" "))