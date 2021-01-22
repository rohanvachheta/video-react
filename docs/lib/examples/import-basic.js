import React from 'react';
import { Player, Shortcut } from 'video-react';

export default props => {
  return (
    <Player
      playsInline
      src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      document={window.document}
      disabledFullscreens
    >
      <Shortcut
        dblclickable
        clickable
        handleFullscreenFun={() => console.log('rohan123')}
      />
    </Player>
  );
};
