import { siteConfig } from '../config';
import ProfileWidget from './ProfileWidget';
import MusicWidget from './MusicWidget';

export default function Sidebar() {
  return (
    <>
      <ProfileWidget />
      {siteConfig.music.songs.length > 0 && <MusicWidget />}
    </>
  );
}