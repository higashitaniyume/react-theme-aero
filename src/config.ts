// src/config.ts
export const siteConfig = {
  title: "ShinN's Blog",
  subtitle: "live happily.",
  author: "ShinN",
  description: "The brain is wider than the sky...",
  profile: {
    avatar: "/image/avatar.jpg", // 记得把图片放到 public 目录下
    avatar_link: "https://github.com/yourname",
    social:[
      { name: "Github", link: "...", icon: "/image/icon/github.png" },
    ]
  },
  music: {
    autoplay: false,
    songs:[
      { title: "Song 1", artist: "Artist 1", cover: "/image/cover1.jpg", url: "/music/1.mp3" },
      // ...
    ]
  }
};