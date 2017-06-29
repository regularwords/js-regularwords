module.exports = function startsWith(searchString, position) {
	position = position || 0;
	return this.substr(position, searchString.length) === searchString;
};

if (!String.prototype.startsWith) {
	String.prototype.startsWith = startsWith;
}
