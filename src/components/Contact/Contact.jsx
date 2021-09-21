import React from "react";
import { VscCommentDiscussion } from "react-icons/vsc";
import { GrLinkedin } from "react-icons/gr";
import { FiGithub } from "react-icons/fi";

import { useRequest } from "../../hooks/useRequest";
import "./Contact.scss";

function Contact() {
	// const [profile, setProfile] = useState({});
	// const [loading, setLoading] = useState(false);
	// const [error, setError] = useState(null);

	// useEffect(() => {
	// 	let ignore = false;
	// 	const fetchData = async () => {
	// 		setLoading(true);
	// 		try {
	// 			const req = {
	// 				Authorization: `Bearer ${API_TOKEN}`,
	// 			};
	// 			const res = await fetch(API_URL, req);
	// 			const data = await res.json();
	// 			if (!ignore) setProfile(data);
	// 		} catch {
	// 			setError(true);
	// 		} finally {
	// 			setLoading(false);
	// 		}
	// 	};

	// 	fetchData();
	// 	return () => {
	// 		ignore = true;
	// 	};
	// }, []);

	const state = useRequest();

	return (
		<div className="contact">
			<header>
				<h4>{<VscCommentDiscussion />} Contact</h4>
				<p>
					Whether you're about to make me an offer I can't refuse, thinking
					about becoming a developer, or somewhere in between: I'd love to
					connect if you're taking the time to read this! Please reach out on
					LinkedIn or GitHub.
				</p>
			</header>
			<section className="linkedin">
				<h4>{<GrLinkedin />} LinkedIn</h4>
				<a
					id="my-linkedin"
					href="https://www.linkedin.com/in/brandon-leek-4031891a4/"
					target="_blank"
					rel="noopener noreferrer"
				>
					Click here to view my LinkedIn!
				</a>
			</section>
			<section className="github">
				<h4>{<FiGithub />} Github</h4>
				<a
					id="my-github"
					href="https://github.com/bleek42"
					target="_blank"
					rel="noopener noreferrer"
				>
					Click here to view my GitHub!
				</a>
				{state.loading && <p>Loading profile data...</p>}
				{state.profile && (
					<ul>
						<li>Total Repos: {state.profile.public_repos}</li>
						<li>Total Followers: {state.profile.followers}</li>
						<li>Total Followiing: {state.profile.following}</li>
					</ul>
				)}
				{state.error && <p>Error fetching profile data!</p>}
			</section>
		</div>
	);
}

export default Contact;
