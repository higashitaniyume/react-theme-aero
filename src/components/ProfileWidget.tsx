import { siteConfig } from '../config';

export default function ProfileWidget() {
  return (
    <>
      <div className="widget avatar-widget">
        <div className="avatar-bg">
          <a href={siteConfig.profile.avatar_link}>
            <img src={siteConfig.profile.avatar} className="profile-img" alt="avatar" />
          </a>
        </div>
      </div>
      
      <div className="widget card profile-widget">
        <div className="profile">
          <div>{siteConfig.author}</div>
          <div>
            {siteConfig.profile.social.map((item, index) => (
              <a 
                key={index}
                href={item.link} 
                className="button profile-link" 
                target="_blank" 
                rel="noopener noreferrer"
                title={item.name}
              >
                <img src={item.icon} className="profile-icon" alt={item.name} />
              </a>
            ))}
          </div>
        </div>
        <div className="about" dangerouslySetInnerHTML={{ __html: siteConfig.description }} />
      </div>
    </>
  );
}