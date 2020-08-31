import React, { useState, useEffect } from 'react';
import { API_TOKEN, API_URL } from '../../api-config';
import './Contact.scss';

function Contact() {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const req = {
          Authorization: `Bearer ${API_TOKEN}`,
        };
        const res = await fetch(API_URL, req);
        const data = await res.json();
        console.table(data);
        setProfile(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="contact">
      <header>
        <h2>Contact Me!</h2>
        <p>
          Whether you're about to make me an offer I can't refuse, thinking
          about becoming a developer, or somewhere in between: I'd love to
          connect if you're taking the time to read this!
        </p>
      </header>
      <section className="email">
        <h4>Email</h4>
        <a
          id="my-email"
          href="mailto:brandonleek42@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          brandonleek42@gmail.com
        </a>
      </section>
      <section className="linkedin">
        <h4>LinkedIn</h4>
        <a
          id="my-linkedin"
          href="https://www.linkedin.com/in/brandon-leek-4031891a4/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click here!
        </a>
      </section>
      <section className="github">
        <h4>Github</h4>
        <a
          key={profile.html_url}
          href={profile.html_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          View my GitHub!
        </a>
        <p className="repos" key={profile.public_repos}>
          Total Repos: {profile.public_repos}
        </p>
        <p className="followers" key={profile.followers}>
          Total Followers: {profile.followers}
        </p>
        <p className="following" key={profile.following}>
          Total Followiing: {profile.following}
        </p>
      </section>
    </div>
  );
}

export default Contact;
