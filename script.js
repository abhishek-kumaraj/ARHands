// Function to update hand positions and rotations
function updateHandTracking() {
    const frame = session.requestAnimationFrame(referenceSpace);
  
    frame.then((frame) => {
      const handPose = frame.getHandPose("left"); // or "right" depending on the hand you want to track
  
      if (handPose) {
        const handEntity = document.querySelector('#hands');
  
        handEntity.setAttribute('position', handPose.transform.position);
        handEntity.setAttribute('rotation', handPose.transform.orientation);
      }
  
      updateHandTracking(); // Continuously update hand positions
    });
  }
  
  // Main function to set up the AR scene
  async function setupARScene() {
    // Get the XRSession object.
    const session = await navigator.xr.requestSession('immersive-ar');
  
    // Create a XRReferenceSpace object for the real world.
    const referenceSpace = await session.requestReferenceSpace('local');
  
    // Start tracking hands
    updateHandTracking();
  
    // Rest of your AR scene setup code
    // ...
  
  }
  
  setupARScene(); // Start the AR scene setup
  