console.log('it works');

var generateHashBox = function (size) {
	var grid = [];

	for ( var i = 0; i < size; i ++) {
		grid[i] = [];
		for (var j = 0; j < size;j ++) {
			grid[i][j] = "#";
		}
	};
	return grid;
};

var printLabirynth = function (labFile) {

	for ( var i = 0; i < labFile.length; i ++) {
		console.log( i ,labFile[i].join(''));
	}
};

x = generateHashBox(10);


printLabirynth(x);