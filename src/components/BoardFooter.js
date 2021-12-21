import React, { useEffect, useState } from 'react';
import { Card, CardBody, CardText } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../style.css';

const BoardFooter = () => {
	const [time, setTime] = useState({
		hr: '00',
		min: '00',
		sec: '00',
	});

	const setCurrentTime = () => {
		const currentTime = new Date();
		const hours = currentTime.getHours();
		const minutes = currentTime.getMinutes();
		const seconds = currentTime.getSeconds();
		setTime({
			hr: hours < 10 ? '0' + hours.toString() : hours.toString(),
			min: minutes < 10 ? '0' + minutes.toString() : minutes.toString(),
			sec: seconds < 10 ? '0' + seconds.toString() : seconds.toString(),
		});
	};

	useEffect(() => {
		let one = setInterval(() => setCurrentTime(), 1000);
		console.log('Triggered!!!');
		return () => {
			clearInterval(one);
		};
	});

	return (
		<div>
			<Card className="text-center board-footer">
				<CardBody>
					<CardText>Debajit Deb &copy; {new Date().getFullYear()}</CardText>
					<span className="text-muted">
						{time.hr} : {time.min} : {time.sec}
					</span>
				</CardBody>
			</Card>
		</div>
	);
};

export default BoardFooter;
