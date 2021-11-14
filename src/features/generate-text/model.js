import { createStore, createEffect } from 'effector';
import { mashapeApi } from '@/shared/api';

export const getTextContentFx = createEffect((num = 1) => mashapeApi.getTextContent(num));

export const $textContent = createStore([])
  .on(getTextContentFx.doneData, (_, data) => data);

export const $textContentJoined = $textContent.map((arr) => arr.join(' '));
