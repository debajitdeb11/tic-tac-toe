import React, { useState } from 'react';
import Icon from './components/Icon';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Card, CardBody, Container, Button, Col, Row } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';
import { isWinner } from './game-engine/engine';
import BoardFooter from './components/BoardFooter';

/* 3 x 3 Board */
const itemArray = new Array(9).fill('empty');

const App = () => {
	const [winnerMessage, setWinnerMessage] = useState('');
	const [isCircle, setIsCicrle] = useState(false);
	const [gameDraw, setGameDraw] = useState(false);

	/*
	 *   Reload the game
	 */
	const reloadGame = () => {
		setIsCicrle(false);
		setWinnerMessage('');
		setGameDraw(false);
		itemArray.fill('empty', 0, 9);
	};

	/*
	 *   Function to check the winner
	 */
	const checkIsWinner = () => {
		let winner = isWinner(itemArray);

		if (winner !== 'noWinner') {
			setWinnerMessage(`${winner} wins!`);
		}
	};

	/*
	 *	Check if Draw or not
	 */
	const checkIsDraw = () => {
		for (let i = 0; i < itemArray.length; i++) {
			if (itemArray[i] === 'empty') {
				return false;
			}
		}
		return true;
	};

	/*
	 *   Change the state of the selected item and check for the winner
	 */
	const changeItem = (itemNumber) => {
		if (winnerMessage) {
			return toast(winnerMessage, { type: 'success' });
		}

		if (itemArray[itemNumber] === 'empty') {
			itemArray[itemNumber] = isCircle ? 'circle' : 'cross';
			setIsCicrle(!isCircle);
		} else {
			return toast('already filled', { type: 'error' });
		}

		checkIsWinner();
		if (checkIsDraw()) {
			setGameDraw(true);
			setWinnerMessage('Draw!');
		}
	};

	return (
		<Container className="p-5">
			<ToastContainer position="bottom-center" />
			<Row>
				<Col md={6} className="offset-md-3">
					{winnerMessage || gameDraw ? (
						<div className="mb-2 mt-2">
							<h1 className="text-success text-uppercase text-center">
								{winnerMessage}
							</h1>
							<Button color="success" block onClick={reloadGame}>
								Reload Game
							</Button>
						</div>
					) : (
						<h1 className="text-center text-warning">
							{isCircle ? 'Circle Turn' : 'Cross Turn'}
						</h1>
					)}

					<div className="grid">
						{itemArray.map((item, idx) => (
							<Card color="warning" onClick={() => changeItem(idx)} key={idx}>
								<CardBody className="box">
									<Icon name={item} />
								</CardBody>
							</Card>
						))}
					</div>
				</Col>
			</Row>
			<BoardFooter />
		</Container>
	);
};

export default App;
