
// //factory function for individual objects
const songObject =  {
    title: ['levitating', 'blinding lights', 'peaches'],
    artist: ['dua lipa', 'the weeknd', 'justin bieber'],
    youtubeVideo: ['https://www.youtube.com/watch?v=TUVcZfQe-Kw', 'https://www.youtube.com/watch?v=fHI8X4OXluQ', 'https://www.youtube.com/watch?v=tQ0yjYUFKAE']
}

//function to createRandomNumber
const getRandomNum = (array) => {
    const randomNumber = Math.floor(Math.random() * array.length);
    //console.log(randomNumber);
    //console.log(array[randomNumber]);
    return randomNumber
}

//function that uses random number created to print out the song object's properties at that index in array
const printSongObject = () => {
    let index = getRandomNum(songObject.title);
    console.log(`You selected a random song object. The song name is ${songObject.title[index]}.The song artist is ${songObject.artist[index]}. The youtube video is ${songObject.youtubeVideo[index]}.`)
}
printSongObject(songObject)