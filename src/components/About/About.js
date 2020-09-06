import React from 'react';
import { VscSymbolArray } from 'react-icons/vsc';

import './About.scss';

export default function About() {
  return (
    <div className="about">
      <section>
        <h3>{<VscSymbolArray />} About</h3>
        <p>
          I have recently graduated from Thinkful's Software Engineering
          Immersion program. I have implemented a variety of projects using
          HTML, CSS, Javascript and many of it's widely used libraries and
          frameworks. Having been exposed to internet technologies at a young
          age, as well as being a former sales representative of mobile devices,
          my recent pursuit down this career path just feels natural. The
          ongoing revolution in how humanity interacts and creates is an
          infinite source of inspiration to me and I am devoted to being a part
          of it. Open-source projects are my favorite part of it all! The
          accessibility to all, as well as the sense of community and bonding
          between developers all over the globe that it fosters is a beautiful
          thing. When I'm not writing mark up and scripting, I am travelling the
          country to new cities and nature in immersive concerts and festivals
          with friends I have made from every corner of the country.
        </p>
      </section>
    </div>
  );
}
