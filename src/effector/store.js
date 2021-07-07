import {createStore} from "effector";
import {fetchLoripsumDataFx} from "./effect";

export const $loripsum = createStore([])
	.on(fetchLoripsumDataFx.doneData, (_, data) => data)

export const $joinedLoripsum = $loripsum.map(arr => arr.join(" "))