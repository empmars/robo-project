import React from 'react';
import Cards from './Cards';



const CardsList = ({robots}) => {

	return (
		robots.map((robot, i) => {
			return <Cards id={robot.id} name={robot.name} email={robot.email}/>
		})
		);
};

export default CardsList;