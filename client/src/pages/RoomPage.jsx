import React from 'react';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

function Roompage() {
  const myMeeting = async (element) => {
    const appID = 1141450940;
    const serverSecret = "da69cb3e49def060a31d3130029dee33";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID, serverSecret, 'ayush', Date.now().toString(), "Ayush"
    );
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    zp.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: 'Copy Link',
          url: `${window.location.origin}/room`
        }
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.OneOnOneCall,
      },
      showScreenSharingButton: false
    });
  };

  return (
    <div>
      <div ref={myMeeting} style={{ width: '100vw', height: '100vh' }} />
    </div>
  );
}

export default Roompage;
