// Рефакторинг
// Задачи на работу с чужим кодом.

// Задача №1
// Посмотрите на код:

function func(s, a, b) {
	if (s.match(/^$/)) {
		return -1;
	}
	
	let i = s.length -1;
	let aIndex = -1;
	let bIndex = -1;
	
	while ((aIndex == -1) && (bIndex == -1) && (i > 0)) {
	    if (s.substring(i, i + 1) == a) {
	    	aIndex = i;
    	}
	    if (s.substring(i, i + 1) == b) {
	    	bIndex = i;
    	}
	    i = i - 1;
	}
	
	if (aIndex != -1) {
        return (bIndex == -1) ? aIndex : Math.max(aIndex, bIndex);
	}

    return (bIndex != -1) ? bIndex : -1;
}


// Задача №2

function drawRating(vote) {
    let z = Math.ceil(vote / 20);
    if (vote === 0) z = 1;
    
    return '★'.repeat(z) + '☆'.repeat(5 - z);

}

// Проверка работы результата
console.log(drawRating(0) ); // ★☆☆☆☆
console.log(drawRating(1) ); // ★☆☆☆☆
console.log(drawRating(50)); // ★★★☆☆
console.log(drawRating(99)); // ★★★★★