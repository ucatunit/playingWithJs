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


var generateLabirynth = function (hashBox) {
	start = pickStart(hashBox); // specify starting point and start from there

}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pickStart (arr) {
	if ( getRandomInt(0, 1)%2 == 0) {
		// start from row
		
	}
	selected_row = getRandomInt(1, arr.length - 1);
	console.log(selected_row);
}

pickStart(x);