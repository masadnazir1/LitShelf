import Sound from 'react-native-sound';

Sound.setCategory('Playback'); // iOS: allow background/lock playback

class SoundService {
  static instance = new SoundService();
  _sound = null;

  async load(url) {
    return new Promise((resolve, reject) => {
      if (this._sound) {
        this._sound.release();
        this._sound = null;
      }

      const s = new Sound(url, undefined, error => {
        if (error) return reject(error);
        this._sound = s;
        resolve({ duration: s.getDuration() || 0 });
      });
    });
  }

  play(onEnd) {
    if (!this._sound) return;
    this._sound.play(success => {
      if (!success) {
        this._sound?.stop();
      }
      if (onEnd) onEnd();
    });
  }

  pause() {
    this._sound?.pause();
  }

  stop() {
    this._sound?.stop();
  }

  release() {
    this._sound?.release();
    this._sound = null;
  }

  seekTo(seconds) {
    if (!this._sound) return;
    this._sound.setCurrentTime(seconds);
  }

  getPosition(callback) {
    if (!this._sound) return callback(0);
    this._sound.getCurrentTime(s => callback(s));
  }

  getDuration() {
    return this._sound?.getDuration() || 0;
  }

  isLoaded() {
    return !!this._sound;
  }
}

export default SoundService;
