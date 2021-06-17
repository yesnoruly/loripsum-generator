import React from 'react';
//Styles
import './Empty.scss';

export const Empty = ({emptyContent}) => {
	return <div className="empty">{emptyContent}</div> //display in the absence of content
}