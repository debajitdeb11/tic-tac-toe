/*
 * @itemArray: Accepts marked array as parameter
 *
 */
export const isWinner = ({ ...itemArray }) => {
	if (
		itemArray[0] === itemArray[1] &&
		itemArray[0] === itemArray[2] &&
		itemArray[0] !== 'empty'
	) {
		return `${itemArray[0]} won`;
	} else if (
		itemArray[0] === itemArray[3] &&
		itemArray[0] === itemArray[6] &&
		itemArray[0] !== 'empty'
	) {
		return `${itemArray[0]} won`;
	} else if (
		itemArray[0] === itemArray[4] &&
		itemArray[0] === itemArray[8] &&
		itemArray[0] !== 'empty'
	) {
		return `${itemArray[0]} won`;
	} else if (
		itemArray[2] === itemArray[5] &&
		itemArray[5] === itemArray[8] &&
		itemArray[2] !== 'empty'
	) {
		return `${itemArray[2]} won`;
	} else if (
		itemArray[3] === itemArray[4] &&
		itemArray[3] === itemArray[5] &&
		itemArray[3] !== 'empty'
	) {
		return `${itemArray[3]} won`;
	} else if (
		itemArray[2] === itemArray[4] &&
		itemArray[2] === itemArray[6] &&
		itemArray[2] !== 'empty'
	) {
		return `${itemArray[2]} won`;
	} else if (
		itemArray[1] === itemArray[4] &&
		itemArray[1] === itemArray[7] &&
		itemArray[1] !== 'empty'
	) {
		return `${itemArray[1]} won`;
	} else if (
		itemArray[6] === itemArray[7] &&
		itemArray[6] === itemArray[8] &&
		itemArray[6] !== 'empty'
	) {
		return `${itemArray[6]} won`;
	} else {
		return 'noWinner';
	}
};
