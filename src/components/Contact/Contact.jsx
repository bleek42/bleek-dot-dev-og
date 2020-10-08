import React, { useState, useEffect } from 'react';
import { VscCommentDiscussion } from 'react-icons/vsc';
import { GrLinkedin } from 'react-icons/gr';
import { HiOutlineMail } from 'react-icons/hi';
import { FiGithub } from 'react-icons/fi';

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
				setProfile(data);
			} catch (error) {
				console.error(error);
			}
		};
		fetchData();
	}, [profile]);

	return (
		<div className="contact">
			<header>
				<h4>{<VscCommentDiscussion />} Contact</h4>
				<p>
					Whether you're about to make me an offer I can't refuse, thinking
					about becoming a developer, or somewhere in between: I'd love to
					connect if you're taking the time to read this!
				</p>
			</header>
			<section className="email">
				<h4>{<HiOutlineMail />} Email</h4>
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
				<h4>{<GrLinkedin />} LinkedIn</h4>
				<a
					id="my-linkedin"
					href="https://www.linkedin.com/in/brandon-leek-4031891a4/"
					target="_blank"
					rel="noopener noreferrer"
				>
					Click here to view my profile!
				</a>
			</section>
			<section className="github">
				<h4>{<FiGithub />} Github</h4>
				<a
					id="my-github"
					key={profile.html_url}
					href={profile.html_url}
					target="_blank"
					rel="noopener noreferrer"
				>
					Click here to view my profile!
				</a>
				<p key={profile.public_repos}>Total Repos: {profile.public_repos}</p>
				<p key={profile.followers}>Total Followers: {profile.followers}</p>
				<p key={profile.following}>Total Followiing: {profile.following}</p>
			</section>
		</div>
	);
}

export default Contact;
