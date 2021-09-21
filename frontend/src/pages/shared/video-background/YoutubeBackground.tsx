
import React, {VFC} from 'react';
import './YoutubeBackground.css';

const VIDEO_WIDTH = 1920;
const VIDEO_HEIGHT = 1080;

const YoutubeBackground: VFC = () => {
    return <div className="video-background">
        <iframe
            width={640}
            height={360}
            src="https://www.youtube.com/embed/9NDqyU_Y0FM?autoplay=1&controls=0&rel=0&showinfo=0&mute=1&modestbranding=1&loop=1&iv_load_policy=3&playsinline=1&enablejsapi=1&origin=http%3A%2F%2Flocalhost%3A3000&widgetid=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; loop"/>
    </div>;
};

export default YoutubeBackground;