// Music Data - Songs, Albums, Playlists, etc.
const musicData = {
    songs: [
        {
            id: 1,
            title: "Tech Corporate",
            artist: "Alex Productions",
            album: "Digital Vibes",
            genre: "Electronic",
            duration: "2:45",
            cover: "https://images.pexels.com/photos/1694900/pexels-photo-1694900.jpeg",
            file: "https://cdn.pixabay.com/download/audio/2023/03/02/audio_d57f0e369a.mp3?filename=tech-corporate-111062.mp3"
        },
        {
            id: 2,
            title: "Ambient Piano",
            artist: "SoundScape",
            album: "Peaceful Moments",
            genre: "Ambient",
            duration: "3:20",
            cover: "https://images.pexels.com/photos/164777/pexels-photo-164777.jpeg",
            file: "https://cdn.pixabay.com/download/audio/2022/11/22/audio_febc508520.mp3?filename=ambient-piano-logo-165357.mp3"
        },
        {
            id: 3,
            title: "Inspiring Cinematic",
            artist: "Music Unlimited",
            album: "Epic Soundtracks",
            genre: "Cinematic",
            duration: "2:58",
            cover: "https://images.pexels.com/photos/167092/pexels-photo-167092.jpeg",
            file: "https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8b8d861d1.mp3?filename=inspiring-cinematic-ambient-116199.mp3"
        },
        {
            id: 4,
            title: "Lofi Study",
            artist: "Chill Beats",
            album: "Focus Sessions",
            genre: "Lofi",
            duration: "2:10",
            cover: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg",
            file: "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=lofi-study-112191.mp3"
        },
        {
            id: 5,
            title: "Stomping Rock",
            artist: "Rock Solid",
            album: "Heavy Hitters",
            genre: "Rock",
            duration: "3:44",
            cover: "https://images.pexels.com/photos/210922/pexels-photo-210922.jpeg",
            file: "https://cdn.pixabay.com/download/audio/2022/10/25/audio_940d9d2ce0.mp3?filename=stomping-rock-four-shots-111444.mp3"
        },
        {
            id: 6,
            title: "Sunset Vibes",
            artist: "Chillout Masters",
            album: "Beach Sessions",
            genre: "Chill",
            duration: "2:37",
            cover: "https://images.pexels.com/photos/1835718/pexels-photo-1835718.jpeg",
            file: "https://cdn.pixabay.com/download/audio/2022/05/16/audio_711dc2772b.mp3?filename=sunset-vibes-lo-fi-hip-hop-music-111554.mp3"
        },
        {
            id: 7,
            title: "Acoustic Folk",
            artist: "String Harmony",
            album: "Woodland Tales",
            genre: "Folk",
            duration: "3:51",
            cover: "https://images.pexels.com/photos/33597/guitar-classical-guitar-acoustic-guitar-electric-guitar.jpg",
            file: "https://cdn.pixabay.com/download/audio/2022/09/02/audio_72250f9280.mp3?filename=acoustic-folk-background-music-122614.mp3"
        },
        {
            id: 8,
            title: "Energetic Sport",
            artist: "Workout Beats",
            album: "Fitness Mix",
            genre: "Electronic",
            duration: "2:22",
            cover: "https://images.pexels.com/photos/260352/pexels-photo-260352.jpeg",
            file: "https://cdn.pixabay.com/download/audio/2022/03/10/audio_270f49b9bf.mp3?filename=energetic-sport-rock-trailer-116346.mp3"
        },
        {
            id: 9,
            title: "Jazzy Coffee",
            artist: "Smooth Jazz Trio",
            album: "Cafe Lounge",
            genre: "Jazz",
            duration: "3:03",
            cover: "https://images.pexels.com/photos/1021876/pexels-photo-1021876.jpeg",
            file: "https://cdn.pixabay.com/download/audio/2022/05/13/audio_4edd56f93c.mp3?filename=jazzy-coffee-112194.mp3"
        },
        {
            id: 10,
            title: "Dreamy Meditation",
            artist: "Zen Masters",
            album: "Inner Peace",
            genre: "Ambient",
            duration: "4:12",
            cover: "https://images.pexels.com/photos/3560044/pexels-photo-3560044.jpeg",
            file: "https://cdn.pixabay.com/download/audio/2022/04/27/audio_2449b4ecec.mp3?filename=dreamy-meditation-114566.mp3"
        },
        {
            id: 11,
            title: "Epic Trailer",
            artist: "Cinematic Sound",
            album: "Movie Scores",
            genre: "Cinematic",
            duration: "2:28",
            cover: "https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg",
            file: "https://cdn.pixabay.com/download/audio/2021/11/25/audio_5ce9d6e44d.mp3?filename=epic-trailer-109605.mp3"
        },
        {
            id: 12,
            title: "Tropical House",
            artist: "Beach Vibes",
            album: "Summer Hits",
            genre: "Electronic",
            duration: "2:35",
            cover: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg",
            file: "https://cdn.pixabay.com/download/audio/2022/05/23/audio_c8d7bca9c2.mp3?filename=tropical-house-112360.mp3"
        }
    ],
    
    albums: [
        {
            id: 1,
            title: "Digital Vibes",
            artist: "Alex Productions",
            cover: "https://images.pexels.com/photos/1694900/pexels-photo-1694900.jpeg",
            songs: [1, 8, 12] // Song IDs
        },
        {
            id: 2,
            title: "Peaceful Moments",
            artist: "SoundScape",
            cover: "https://images.pexels.com/photos/164777/pexels-photo-164777.jpeg",
            songs: [2, 10] // Song IDs
        },
        {
            id: 3,
            title: "Epic Soundtracks",
            artist: "Music Unlimited",
            cover: "https://images.pexels.com/photos/167092/pexels-photo-167092.jpeg",
            songs: [3, 11] // Song IDs
        },
        {
            id: 4,
            title: "Focus Sessions",
            artist: "Chill Beats",
            cover: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg",
            songs: [4, 6] // Song IDs
        },
        {
            id: 5,
            title: "Heavy Hitters",
            artist: "Rock Solid",
            cover: "https://images.pexels.com/photos/210922/pexels-photo-210922.jpeg",
            songs: [5] // Song IDs
        },
        {
            id: 6,
            title: "Woodland Tales",
            artist: "String Harmony",
            cover: "https://images.pexels.com/photos/33597/guitar-classical-guitar-acoustic-guitar-electric-guitar.jpg",
            songs: [7] // Song IDs
        },
        {
            id: 7,
            title: "Cafe Lounge",
            artist: "Smooth Jazz Trio",
            cover: "https://images.pexels.com/photos/1021876/pexels-photo-1021876.jpeg",
            songs: [9] // Song IDs
        }
    ],
    
    playlists: [
        {
            id: 1,
            title: "Top Picks",
            description: "Most popular tracks",
            cover: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg",
            songs: [1, 3, 5, 8, 11] // Song IDs
        },
        {
            id: 2,
            title: "Focus",
            description: "Music to help you concentrate",
            cover: "https://images.pexels.com/photos/733856/pexels-photo-733856.jpeg",
            songs: [2, 4, 6, 10] // Song IDs
        },
        {
            id: 3,
            title: "Workout",
            description: "Energetic beats for your exercise",
            cover: "https://images.pexels.com/photos/791763/pexels-photo-791763.jpeg",
            songs: [5, 8, 12] // Song IDs
        },
        {
            id: 4,
            title: "Chill Vibes",
            description: "Relaxing tunes to unwind",
            cover: "https://images.pexels.com/photos/1295138/pexels-photo-1295138.jpeg",
            songs: [2, 6, 9, 10] // Song IDs
        }
    ],
    
    genres: [
        "All", "Electronic", "Ambient", "Cinematic", "Lofi", "Rock", "Chill", "Folk", "Jazz"
    ]
};

// DOM Elements
const audioPlayer = document.getElementById('audio-player');
const playBtn = document.getElementById('play-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const shuffleBtn = document.getElementById('shuffle-btn');
const repeatBtn = document.getElementById('repeat-btn');
const progressBar = document.querySelector('.progress');
const progressContainer = document.querySelector('.progress-bar');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');
const volumeIcon = document.getElementById('volume-icon');
const volumeProgress = document.querySelector('.volume-progress');
const volumeSlider = document.querySelector('.volume-slider');
const currentSongCover = document.getElementById('current-song-cover');
const currentSongTitle = document.getElementById('current-song-title');
const currentSongArtist = document.getElementById('current-song-artist');
const searchInput = document.getElementById('search-input');
const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('.section');

// App State
let currentSong = null;
let isPlaying = false;
let isShuffling = false;
let isRepeating = false;
let queue = [];
let queueIndex = 0;

// Initialize App
document.addEventListener('DOMContentLoaded', initializeApp);

function initializeApp() {
    // Load initial content
    loadHomePage();
    loadAlbums();
    loadGenres();
    loadPlaylists();
    
    // Set up event listeners
    setupEventListeners();
    
    // Set initial volume
    audioPlayer.volume = 0.7;
}

function setupEventListeners() {
    // Navigation
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            showSection(targetId);
            
            // Update active nav link
            document.querySelector('.nav-links li.active').classList.remove('active');
            this.parentElement.classList.add('active');
        });
    });
    
    // Player Controls
    playBtn.addEventListener('click', togglePlay);
    prevBtn.addEventListener('click', playPrevious);
    nextBtn.addEventListener('click', playNext);
    shuffleBtn.addEventListener('click', toggleShuffle);
    repeatBtn.addEventListener('click', toggleRepeat);
    
    // Progress Bar
    progressContainer.addEventListener('click', setProgress);
    audioPlayer.addEventListener('timeupdate', updateProgress);
    audioPlayer.addEventListener('ended', handleSongEnd);
    
    // Volume Control
    volumeSlider.addEventListener('click', setVolume);
    volumeIcon.addEventListener('click', toggleMute);
    
    // Search
    searchInput.addEventListener('input', handleSearch);
}

// Navigation Functions
function showSection(sectionId) {
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    document.getElementById(sectionId).classList.add('active');
}

// Content Loading Functions
function loadHomePage() {
    // Load Featured Playlists
    const playlistGrid = document.querySelector('#home .playlist-grid');
    playlistGrid.innerHTML = '';
    
    musicData.playlists.forEach(playlist => {
        const playlistCard = createPlaylistCard(playlist);
        playlistGrid.appendChild(playlistCard);
    });
    
    // Load Recently Added Songs
    const songsContainer = document.querySelector('#home .songs-container');
    songsContainer.innerHTML = '';
    
    // Get the last 5 songs (assuming they're the most recent)
    const recentSongs = musicData.songs.slice(-5).reverse();
    
    recentSongs.forEach(song => {
        const songItem = createSongItem(song);
        songsContainer.appendChild(songItem);
    });
}

function loadAlbums() {
    const albumsGrid = document.querySelector('#albums .albums-grid');
    albumsGrid.innerHTML = '';
    
    musicData.albums.forEach(album => {
        const albumCard = document.createElement('div');
        albumCard.className = 'album-card';
        albumCard.innerHTML = `
            <img src="${album.cover}" alt="${album.title}" class="card-img">
            <div class="card-title">${album.title}</div>
            <div class="card-subtitle">${album.artist}</div>
        `;
        
        albumCard.addEventListener('click', () => showAlbumDetail(album.id));
        albumsGrid.appendChild(albumCard);
    });
}

function loadGenres() {
    const genresContainer = document.querySelector('#genres .genres-container');
    genresContainer.innerHTML = '';
    
    musicData.genres.forEach(genre => {
        const genreTag = document.createElement('div');
        genreTag.className = 'genre-tag';
        if (genre === 'All') genreTag.classList.add('active');
        genreTag.textContent = genre;
        
        genreTag.addEventListener('click', () => filterByGenre(genre));
        genresContainer.appendChild(genreTag);
    });
    
    // Initially load all songs
    filterByGenre('All');
}

function loadPlaylists() {
    const playlistsGrid = document.querySelector('#playlists .playlists-grid');
    playlistsGrid.innerHTML = '';
    
    musicData.playlists.forEach(playlist => {
        const playlistCard = createPlaylistCard(playlist);
        playlistsGrid.appendChild(playlistCard);
    });
}

function createPlaylistCard(playlist) {
    const playlistCard = document.createElement('div');
    playlistCard.className = 'playlist-item';
    playlistCard.innerHTML = `
        <img src="${playlist.cover}" alt="${playlist.title}" class="card-img">
        <div class="card-title">${playlist.title}</div>
        <div class="card-subtitle">${playlist.description}</div>
    `;
    
    playlistCard.addEventListener('click', () => showPlaylistDetail(playlist.id));
    return playlistCard;
}

function createSongItem(song) {
    const songItem = document.createElement('div');
    songItem.className = 'song-item';
    songItem.innerHTML = `
        <img src="${song.cover}" alt="${song.title}">
        <div class="song-details">
            <div class="song-title">${song.title}</div>
            <div class="song-artist">${song.artist}</div>
        </div>
        <div class="song-duration">${song.duration}</div>
    `;
    
    songItem.addEventListener('click', () => playSong(song.id));
    return songItem;
}

// Detail View Functions
function showAlbumDetail(albumId) {
    const album = musicData.albums.find(a => a.id === albumId);
    if (!album) return;
    
    // Update album info
    const albumInfo = document.querySelector('#album-detail .album-info');
    albumInfo.innerHTML = `
        <img src="${album.cover}" alt="${album.title}" class="album-cover">
        <div class="album-details">
            <h2>${album.title}</h2>
            <p>${album.artist}</p>
            <p>${album.songs.length} songs</p>
        </div>
    `;
    
    // Load album tracks
    const albumTracks = document.querySelector('#album-detail .album-tracks');
    albumTracks.innerHTML = '';
    
    album.songs.forEach(songId => {
        const song = musicData.songs.find(s => s.id === songId);
        if (song) {
            const songItem = createSongItem(song);
            albumTracks.appendChild(songItem);
        }
    });
    
    // Show album detail section
    showSection('album-detail');
    
    // Set up back button
    document.querySelector('#album-detail .back-button').addEventListener('click', () => {
        showSection('albums');
    });
}

function showPlaylistDetail(playlistId) {
    const playlist = musicData.playlists.find(p => p.id === playlistId);
    if (!playlist) return;
    
    // Update playlist info
    const playlistInfo = document.querySelector('#playlist-detail .playlist-info');
    playlistInfo.innerHTML = `
        <img src="${playlist.cover}" alt="${playlist.title}" class="playlist-cover">
        <div class="playlist-details">
            <h2>${playlist.title}</h2>
            <p>${playlist.description}</p>
            <p>${playlist.songs.length} songs</p>
        </div>
    `;
    
    // Load playlist tracks
    const playlistTracks = document.querySelector('#playlist-detail .playlist-tracks');
    playlistTracks.innerHTML = '';
    
    playlist.songs.forEach(songId => {
        const song = musicData.songs.find(s => s.id === songId);
        if (song) {
            const songItem = createSongItem(song);
            playlistTracks.appendChild(songItem);
        }
    });
    
    // Show playlist detail section
    showSection('playlist-detail');
    
    // Set up back button
    document.querySelector('#playlist-detail .back-button').addEventListener('click', () => {
        showSection('playlists');
    });
}

// Filter Functions
function filterByGenre(genre) {
    // Update active genre tag
    document.querySelectorAll('.genre-tag').forEach(tag => {
        tag.classList.remove('active');
        if (tag.textContent === genre) tag.classList.add('active');
    });
    
    // Filter songs by genre
    const genreSongs = document.querySelector('#genres .genre-songs');
    genreSongs.innerHTML = '';
    
    const filteredSongs = genre === 'All' 
        ? musicData.songs 
        : musicData.songs.filter(song => song.genre === genre);
    
    filteredSongs.forEach(song => {
        const songItem = createSongItem(song);
        genreSongs.appendChild(songItem);
    });
}

function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    const searchResults = document.querySelector('#search .search-results');
    searchResults.innerHTML = '';
    
    if (searchTerm === '') {
        showSection('home');
        return;
    }
    
    // Show search section
    showSection('search');
    
    // Filter songs by search term
    const filteredSongs = musicData.songs.filter(song => 
        song.title.toLowerCase().includes(searchTerm) || 
        song.artist.toLowerCase().includes(searchTerm) || 
        song.album.toLowerCase().includes(searchTerm) ||
        song.genre.toLowerCase().includes(searchTerm)
    );
    
    if (filteredSongs.length === 0) {
        searchResults.innerHTML = '<p>No results found.</p>';
        return;
    }
    
    // Display search results
    filteredSongs.forEach(song => {
        const songItem = createSongItem(song);
        searchResults.appendChild(songItem);
    });
}

// Player Functions
function playSong(songId) {
    const song = musicData.songs.find(s => s.id === songId);
    if (!song) return;
    
    // Update current song
    currentSong = song;
    
    // Update audio source
    audioPlayer.src = song.file;
    
    // Update player UI
    currentSongCover.src = song.cover;
    currentSongTitle.textContent = song.title;
    currentSongArtist.textContent = song.artist;
    
    // Play the song
    audioPlayer.play();
    isPlaying = true;
    updatePlayButton();
    
    // Create queue based on current context
    createQueue(songId);
}

function createQueue(currentSongId) {
    // This is a simple implementation - in a real app, you'd create the queue
    // based on the current context (album, playlist, search results, etc.)
    queue = musicData.songs.map(song => song.id);
    queueIndex = queue.indexOf(currentSongId);
}

function togglePlay() {
    if (!currentSong) {
        // If no song is selected, play the first song
        playSong(musicData.songs[0].id);
        return;
    }
    
    if (isPlaying) {
        audioPlayer.pause();
    } else {
        audioPlayer.play();
    }
    
    isPlaying = !isPlaying;
    updatePlayButton();
}

function updatePlayButton() {
    playBtn.innerHTML = isPlaying ? '<i class="fas fa-pause"></i>' : '<i class="fas fa-play"></i>';
}

function playNext() {
    if (queue.length === 0) return;
    
    if (isShuffling) {
        // Play a random song from the queue
        const randomIndex = Math.floor(Math.random() * queue.length);
        queueIndex = randomIndex;
    } else {
        // Play the next song in the queue
        queueIndex = (queueIndex + 1) % queue.length;
    }
    
    playSong(queue[queueIndex]);
}

function playPrevious() {
    if (queue.length === 0) return;
    
    // If the current time is more than 3 seconds, restart the song
    if (audioPlayer.currentTime > 3) {
        audioPlayer.currentTime = 0;
        return;
    }
    
    if (isShuffling) {
        // Play a random song from the queue
        const randomIndex = Math.floor(Math.random() * queue.length);
        queueIndex = randomIndex;
    } else {
        // Play the previous song in the queue
        queueIndex = (queueIndex - 1 + queue.length) % queue.length;
    }
    
    playSong(queue[queueIndex]);
}

function toggleShuffle() {
    isShuffling = !isShuffling;
    shuffleBtn.classList.toggle('active');
    if (isShuffling) {
        shuffleBtn.style.color = 'var(--primary-color)';
    } else {
        shuffleBtn.style.color = '';
    }
}

function toggleRepeat() {
    isRepeating = !isRepeating;
    repeatBtn.classList.toggle('active');
    if (isRepeating) {
        repeatBtn.style.color = 'var(--primary-color)';
    } else {
        repeatBtn.style.color = '';
    }
}

function handleSongEnd() {
    if (isRepeating) {
        // Replay the current song
        audioPlayer.currentTime = 0;
        audioPlayer.play();
    } else {
        // Play the next song
        playNext();
    }
}

function updateProgress() {
    const { currentTime, duration } = audioPlayer;
    
    if (isNaN(duration)) return;
    
    // Update progress bar
    const progressPercent = (currentTime / duration) * 100;
    progressBar.style.width = `${progressPercent}%`;
    
    // Update time displays
    currentTimeEl.textContent = formatTime(currentTime);
    durationEl.textContent = formatTime(duration);
}

function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audioPlayer.duration;
    
    audioPlayer.currentTime = (clickX / width) * duration;
}

function setVolume(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const volume = clickX / width;
    
    // Update volume
    audioPlayer.volume = volume;
    volumeProgress.style.width = `${volume * 100}%`;
    
    // Update volume icon
    updateVolumeIcon(volume);
}

function toggleMute() {
    if (audioPlayer.volume > 0) {
        // Store the current volume
        audioPlayer.dataset.volume = audioPlayer.volume;
        audioPlayer.volume = 0;
        volumeProgress.style.width = '0%';
    } else {
        // Restore the previous volume
        const previousVolume = audioPlayer.dataset.volume || 0.7;
        audioPlayer.volume = previousVolume;
        volumeProgress.style.width = `${previousVolume * 100}%`;
    }
    
    updateVolumeIcon(audioPlayer.volume);
}

function updateVolumeIcon(volume) {
    if (volume > 0.5) {
        volumeIcon.className = 'fas fa-volume-up';
    } else if (volume > 0) {
        volumeIcon.className = 'fas fa-volume-down';
    } else {
        volumeIcon.className = 'fas fa-volume-mute';
    }
}

// Utility Functions
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}