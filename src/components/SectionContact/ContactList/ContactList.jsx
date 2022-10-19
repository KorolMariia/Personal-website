import React from 'react';
import './ContactList.scss';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';
import SectionContactLink from './SectionContanctLink';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function ContactList() {
  return (
    <ul className="section-contact-list">
      <h2 className="section-title">
        Get <span className="color">In Touch</span>
      </h2>
      <li className="contact-item">
        <PhoneAndroidIcon />
        <SectionContactLink
          link={'tel:+380938292340'}
          content={+380938292340}
        />
      </li>
      <li className="contact-item">
        <EmailIcon />
        <SectionContactLink
          link={'mailto:marie.korol1991@gmail.com'}
          content={'marie.korol1991@gmail.com'}
        />
      </li>
      <li className="contact-item">
        <img className="skype" src="/images/skype.png" alt="Logo-skype" />
        <SectionContactLink
          link={'skype:@Mariia_Korol?userinfo'}
          content={'@Mariia_Korol'}
        />
      </li>
      <li className="contact-item">
        <LinkedInIcon />
        <SectionContactLink
          link={'https://www.linkedin.com/in/mariia-korol-842893229'}
          content={'Linkedin'}
        />
      </li>
      <li className="contact-item">
        <GitHubIcon />
        <SectionContactLink
          link={'https://github.com/KorolMariia'}
          content={'Github'}
        />
      </li>
      <li className="contact-item">
        <TelegramIcon />
        <SectionContactLink
          link={'https://t.me/korol_mariia'}
          content={'@korol_mariia'}
        />
      </li>
      <li className="contact-item">
        <LocationOnIcon />
        <SectionContactLink
          link={'https://goo.gl/maps/nYJg6F7gnnaJXKxr6'}
          content={'Odessa, Ukraine'}
        />
      </li>
    </ul>
  );
}
