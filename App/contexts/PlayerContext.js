import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { AppState } from 'react-native';
import SoundService from '../service/SoundService';

const PlayerContext = createContext(null);

export const PlayerProvider = ({ children }) => {
  const service = SoundService.instance;
  const [queue, setQueueState] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(0);
  const [repeat, setRepeat] = useState('off'); // off | one | all
  const [shuffle, setShuffle] = useState(false);

  const current = queue[currentIndex] ?? null;
  const progressTimerRef = useRef(null);

  // track progress
  useEffect(() => {
    if (isPlaying) {
      if (progressTimerRef.current) clearInterval(progressTimerRef.current);
      progressTimerRef.current = setInterval(() => {
        service.getPosition(pos => setPosition(pos));
      }, 300);
    } else {
      if (progressTimerRef.current) {
        clearInterval(progressTimerRef.current);
        progressTimerRef.current = null;
      }
    }
    return () => {
      if (progressTimerRef.current) clearInterval(progressTimerRef.current);
    };
  }, [isPlaying]);

  // pause on background (optional, remove if you want bg play)
  useEffect(() => {
    const sub = AppState.addEventListener('change', s => {
      if (s !== 'active') pause();
    });
    return () => sub.remove();
  }, []);

  const loadAndPlay = async track => {
    const { duration: d } = await service.load(track.url);
    setDuration(d || 0);
    setPosition(0);
    setIsPlaying(true);
    service.play(handleEnd);
  };

  const handleEnd = () => {
    if (repeat === 'one') {
      seekTo(0);
      play();
      return;
    }

    console.log('Song ended');
  };

  const setQueue = async (tracks, startIndex = 0) => {
    setQueueState(tracks);
    setCurrentIndex(startIndex);
    if (tracks[startIndex]) {
      await loadAndPlay(tracks[startIndex]);
    }
  };

  const playTrack = async track => {
    try {
      // Stop any current audio before playing new
      service.stop();
      setIsPlaying(false);

      let idx = queue.findIndex(t => t.id === track.id);

      // if not in queue, add it
      if (idx < 0) {
        const newQueue = [...queue, track];
        setQueueState(newQueue);
        idx = newQueue.length - 1;
      }

      setCurrentIndex(idx);
      await loadAndPlay(track);
    } catch (err) {
      console.log('Error playing track:', err);
    }
  };

  const play = () => {
    if (!service.isLoaded() && current) {
      loadAndPlay(current);
      return;
    }
    setIsPlaying(true);
    service.play(handleEnd);
  };

  const pause = () => {
    setIsPlaying(false);
    service.pause();
  };

  const togglePlay = () => (isPlaying ? pause() : play());

  const ClosePlayer = () => {
    try {
      service.stop(); // stop playback completely
      setIsPlaying(false); // update playing state
      setCurrentIndex(-1); // reset index
      setQueue([]); // clear the queue
    } catch (err) {
      console.log('Error closing player:', err);
    }
  };

  const previous = () => {
    if (position > 3) {
      seekTo(0);
      return;
    }
    let prevIndex = currentIndex - 1;
    if (prevIndex < 0) prevIndex = 0;
    setCurrentIndex(prevIndex);
    const tr = queue[prevIndex];
    loadAndPlay(tr);
  };

  const seekTo = seconds => {
    service.seekTo(seconds);
    setPosition(seconds);
  };

  useEffect(() => {
    return () => {
      service.release();
    };
  }, []);

  const value = useMemo(
    () => ({
      queue,
      currentIndex,
      current,
      isPlaying,
      position,
      duration,
      repeat,
      shuffle,
      setQueue,
      playTrack,
      togglePlay,
      play,
      pause,
      ClosePlayer,
      previous,
      seekTo,
      setRepeat,
      setShuffle,
    }),
    [
      queue,
      currentIndex,
      current,
      isPlaying,
      position,
      duration,
      repeat,
      shuffle,
    ],
  );

  return (
    <PlayerContext.Provider value={value}>{children}</PlayerContext.Provider>
  );
};

export const usePlayer = () => {
  const ctx = useContext(PlayerContext);
  if (!ctx) throw new Error('usePlayer must be used inside <PlayerProvider>');
  return ctx;
};
