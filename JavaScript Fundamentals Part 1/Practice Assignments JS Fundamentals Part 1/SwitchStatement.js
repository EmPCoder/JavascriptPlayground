// 1. Use a switch statement to log the following string for the given 'language':
// chinese or mandarin: 'MOST number of native speakers!'
// spanish: '2nd place in number of native speakers'
// english: '3rd place'
// hindi: 'Number 4'
// arabic: '5th most spoken language'
// for all other simply log 'Great language too :D'

const language = 'English'

switch(language) {
    case 'Chinese':
    case 'Mandarin':
        console.log(`${language} has the most number of native speakers`);
        break;
    case 'Spanish':
        console.log(`${language} has the 2nd Most number of native speakers`);
        break;
    case 'English':
        console.log(`${language} has the 3rd most number of native speakers`);
        break;
    case 'Hindi':
        console.log(`${language} has the 4th most number of native speakers`);
        break;
    case 'Arabic':
        console.log(`${language} has the 5th most number of native speakers`);
        break;
    default:
        console.log(`${language} is a Great Language too!`);
}