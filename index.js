module.exports = (text, chars) => {
	let dots = String(text).slice(0, Number(chars - 1)).trim();
	let lastChar = dots.charAt(dots.length - 1)
	if (dots.length + 5 < Number(chars)) return dots;
	else if (lastMark(dots)) return dots + ' …'
	else return dots + '…'
}
function lastMark(text) {
	if (text == '.' || text == ',' || text == ';' || text == '!' || text == '?') return true;
	return false;
}
