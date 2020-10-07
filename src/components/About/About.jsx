import React from "react";
import { VscSymbolArray } from "react-icons/vsc";

import "./About.scss";

export default function About() {
  return (
    <div className="about">
      <section>
        <h3>{<VscSymbolArray />} About</h3>
        <p>
          My name is Brandon Leek and I'm Junior Full-Stack Web Developer,
          experienced salesman and avid live music fan!
        </p>
        <p>
          I graduated from Thinkful's Full-Stack Engineering Immersion course in
          the Summer of 2020, and found an exciting new passion in programming.
          I've been furthering my learning by contributing to personal and
          open-source projects almost daily since, as I search for my place in
          the tech industry. Looking forward to picking up a second programming
          language one day: leaning towards something closer to the hardware,
          like C++ or Rust, but remaining open to where I go next in my journey!
        </p>
        <p>
          Until then, my area of focus is React web applications & Node.js
          server applications, alongside various libraries & frameworks, such as
          TypeScript, Material UI, GraphQL, Puppeteer.js, and numerous others.
          I'm always learning something new and very active in helping others in
          my Slack & Discord groups.
        </p>
        <p>
          I've been using computers since I was in single-digits: from modding
          computer games, tinkering with HTML in the days of MySpace.com,
          installing custom OS's on my android phones, and now testing +
          deploying fully functional web clients & servers. Prior experience in
          my professional & personal life have given me a vested interest in the
          direction information technology takes, having been in client-facing
          technology sales and of course being a client myself!
        </p>
        <p>
          In my leisure time, I love to travel the country to large scale
          events, particularly music festivals! I've been all over the country
          and have even volunteered my time at a few, ensuring attendees and
          friends alike have the time of time of their lives and remain safe.
          It's a fun, collaborative culture that I am proud to call myself a
          part of.
        </p>
      </section>
    </div>
  );
}
