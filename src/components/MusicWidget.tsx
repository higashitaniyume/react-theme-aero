import { useState, useRef, useEffect } from 'react';
import { siteConfig } from '../config';

interface Song {
  title: string;
  artist: string;
  cover: string;
  url: string;
}

export default function MusicWidget() {
  const playlist = siteConfig.music.songs as Song[];
  const audioRef = useRef<HTMLAudioElement>(null);
  
  const[currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const currentSong = playlist[currentIndex];

  // 监听歌曲播放进度
  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const { currentTime, duration } = audioRef.current;
      if (!isNaN(duration)) {
        setProgress((currentTime / duration) * 100);
      }
    }
  };

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => console.error("Play prevented", e));
    }
    setIsPlaying(!isPlaying);
  };

  const playNext = () => {
    setCurrentIndex((prev) => (prev + 1) % playlist.length);
    setIsPlaying(true);
  };

  const playPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + playlist.length) % playlist.length);
    setIsPlaying(true);
  };

  // 切换歌曲时自动播放（如果不在此起彼伏的 useEffect 里处理，可以用这种方式）
  useEffect(() => {
    if (isPlaying && audioRef.current) {
      audioRef.current.play();
    }
  }, [currentIndex, isPlaying]);

  if (!playlist || playlist.length === 0) return null;

  return (
    <div className={`widget music-widget ${isPlaying ? 'playing' : ''}`}>
      <div className="player-content">
        <div className="song-info">
          <div 
            className="info-bg album-art" 
            style={{ backgroundImage: `url(${currentSong.cover})` }}
          ></div>
          <div className="info-bg title-bar">
            <span className="song-title">
              {currentSong.title} - {currentSong.artist}
            </span>
          </div>
        </div>

        <div className="info-bg progress-container">
          <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        </div>

        <div className="controls">
          <button className="button play-btn" onClick={togglePlay}>
            <span className={isPlaying ? "ri-pause-large-fill" : "ri-play-large-fill"}></span>
          </button>
          <button className="button ctrl-btn" onClick={playPrev}>
            <span className="ri-skip-back-fill"></span>
          </button>
          <button className="button ctrl-btn" onClick={playNext}>
            <span className="ri-skip-forward-fill"></span>
          </button>
        </div>
      </div>
      <audio 
        ref={audioRef} 
        src={currentSong.url} 
        onTimeUpdate={handleTimeUpdate}
        onEnded={playNext}
      />
    </div>
  );
}