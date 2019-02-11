import React from 'react';
import WorkTile from './WorkTile';
import '../styles/work.css';


const gifLinks = [
  "https://onelineplayer.com/player.html?autoplay=true&loop=true&autopause=false&muted=true&url=https%3A%2F%2Fvimeo.com%2F315473826&poster=null&time=false&progressBar=false&playButton=false&overlay=false&muteButton=false&fullscreenButton=false&style=light&logo=false&quality=1080p",
  "https://onelineplayer.com/player.html?autoplay=true&loop=true&autopause=false&muted=true&url=https%3A%2F%2Fvimeo.com%2F315471431&poster=null&time=false&progressBar=false&playButton=false&overlay=false&muteButton=false&fullscreenButton=false&style=light&logo=false&quality=1080p",
  "https://onelineplayer.com/player.html?autoplay=true&loop=true&autopause=false&muted=true&url=https%3A%2F%2Fvimeo.com%2F315476842&poster=null&time=false&progressBar=false&playButton=false&overlay=false&muteButton=false&fullscreenButton=false&style=light&logo=false&quality=720p",
  "https://onelineplayer.com/player.html?autoplay=true&loop=true&autopause=false&muted=true&url=https%3A%2F%2Fvimeo.com%2F315484972&poster=null&time=false&progressBar=false&playButton=false&overlay=false&muteButton=false&fullscreenButton=false&style=light&logo=false&quality=720p",
  "https://onelineplayer.com/player.html?autoplay=true&loop=true&autopause=false&muted=true&url=https%3A%2F%2Fvimeo.com%2F315485658&poster=null&time=false&progressBar=false&playButton=false&overlay=false&muteButton=false&fullscreenButton=false&style=light&logo=false&quality=720p"
];

const Work = (props) => {
  return (
    <div className="workPage">
        <WorkTile
          superTitle="OvationTix"
          title="Reporting Dashboard"
          tech="React Redux HTML CSS"
          gifLink={gifLinks[0]}
          path="/rpt" />
        <WorkTile
          superTitle="OvationTix"
          title="Consumer Interface"
          tech="React Redux HTML CSS"
          gifLink={gifLinks[1]}
          path="/ci" />
        <WorkTile
          superTitle="OvationTix"
          title="Admin Interface"
          tech="Jquery HTML CSS"
          gifLink={gifLinks[2]}
          path="/adm" />
        <WorkTile
          superTitle=""
          title="new2nyc"
          tech="React-Native HTML CSS"
          iphone={true}
          gifLink={gifLinks[4]}
          path="/new" />
        {/*<WorkTile*/}
          {/*superTitle="Your Favorite "*/}
          {/*title="Team Sucks"*/}
          {/*tech="Express Angular Sequelize HTML CSS Gulp"*/}
          {/*gifLink={gifLinks[0]}*/}
          {/*path="/yfts" />*/}
        <WorkTile
          superTitle=""
          title="Grok"
          tech="Express Angular HTML CSS"
          gifLink={gifLinks[3]}
          path="/grok" />
    </div>
  );
}

export default Work;