var album = [
    { image: 'images/4f86c3073efb1e6aeda192d70d40b7d2.jpg', music: 'music/after hours.mp3', songName: 'After Hours', artistName: 'The Weekend', bgColor: 'background: linear-gradient(to bottom right, #3e4221, #161210)' },
    { image: 'images/ab67616d0000b2738265a736a1eb838ad5a0b921.jpeg', music: 'music/spotifydown.com - Sweater Weather - The Neighbourhood.mp3', songName: 'Sweater Weather', artistName: 'The Neighbourhood', bgColor: 'background: linear-gradient(to bottom right, #b4b4b4, #232323)' },
    { image: 'images/images-3.jpeg', music: 'music/spotifydown.com - BABYDOLL - Ari Abdul.mp3', songName: 'BABYDOLL', artistName: 'Ari Abdul', bgColor: 'background: linear-gradient(to bottom right, #7d2120, #11100e)' },
    { image: 'images/Djo_-_End_of_Beginning_single_cover.png', music: 'music/spotifydown.com - End of Beginning - Djo.mp3', songName: 'End of Beginning', artistName: 'Djo', bgColor: 'background: linear-gradient(to bottom right, #5e6cb0, #151011)' },
    { image: 'images/artworks-000150367541-0e8s5b-t500x500.jpg', music: 'music/house of memories.mp3', songName: 'House of Memories', artistName: 'Panic! At The Disco', bgColor: 'background: linear-gradient(to bottom right, #0d80bb, #05278c)' },
    { image: 'images/0x1900-000000-80-0-0.jpg', music: 'music/spotifydown.com - Beanie - Chezile.mp3', songName: 'Beanie', artistName: 'Chezile', bgColor: 'background: linear-gradient(to bottom right, #b1ad9c, #575757)' },
    { image: 'images/0x1900-000000-80-0-0-2.jpg', music: 'music/spotifydown.com - Dramamine - Flawed Mangoes.mp3', songName: 'Dramamine', artistName: 'Flawed Mangoes', bgColor: 'background: linear-gradient(to bottom right, #eebbdd,rgb(68, 15, 23))' },
    { image: 'images/ab67616d0000b27346f4860442e4e517a55d16bb.jpeg', music: 'music/spotifydown.com - KU LO SA (with Camila Cabello) - Oxlade.mp3', songName: 'Kulosa', artistName: 'Oxlade', bgColor: 'background: linear-gradient(to bottom right, #573224, #161210)' },
    { image: 'images/ab67616d0000b273b0dd6a5cd1dec96c4119c262.jpeg', music: 'music/spotifydown.com - One Of The Girls (with JENNIE, Lily Rose Depp) - The Weeknd.mp3', songName: 'One Of The Girls', artistName: 'The Weekend', bgColor: 'background: linear-gradient(to bottom right,rgb(34, 9, 8),rgb(39, 95, 88))' },
    { image: 'images/ab67616d0000b2735c7afa72c84ca04fdb7a5a4c.jpeg', music: 'music/spotifydown.com - Die With A Smile - Lady Gaga.mp3', songName: 'Die With A Smile', artistName: 'Bruno Mars', bgColor: 'background: linear-gradient(to bottom right, #41a9d2, #c20208)' }
]

var audio = new Audio;

var play = document.querySelector('.play');
var forward = document.querySelector('.forward');
var back = document.querySelector('.back');

function popularSongs() {

    var clutter = '';
    album.forEach(function (obj, idx) {
        clutter += `<div class="album" id="${idx}" style="${obj.bgColor};">
                        <div id="image1" class="album-image">
                        <img src="${obj.image}" />
                        </div>
                        <div id="song1" class="song-name"> ${obj.songName}</div>
                        <div id="artist1" class="artist-name">${obj.artistName}</div>
                    </div>`
    })
    document.querySelector('.popular-songs-albums').innerHTML = clutter;

    var selectedSong = 0;
    document.querySelector('.popular-songs-albums').addEventListener('click', function (dets) {
        selectedSong = dets.target.id;
        audio.src = album[selectedSong].music;
        play.innerHTML = `<i class="ri-pause-mini-line"></i>`
        audio.play();
    })

    var flag = 0;
    play.addEventListener('click', function () {
        if (flag === 1) {
            play.innerHTML = `<i class="ri-pause-mini-line"></i>`
            audio.play();
            flag = 0;
        } else {
            play.innerHTML = `<i class="ri-play-line"></i>`
            audio.pause();
            flag = 1;
        }
    })

    forward.addEventListener('click', function () {
        if (selectedSong < album.length - 1) {
            selectedSong++;
            audio.play()
        } else {
            forward.style.opacity = 0.4
        }
    })
}

popularSongs();

