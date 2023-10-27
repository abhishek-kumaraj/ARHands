// Get the XRSession object.
const session = await navigator.xr.requestSession('immersive-ar');

// Create a XRReferenceSpace object for the real world.
const referenceSpace = await session.requestReferenceSpace('local');

// Create a XRFrame object.
const frame = await session.requestAnimationFrame(referenceSpace);

// Get the pose of the camera and the hands.
const cameraPose = frame.getPose(referenceSpace, 'viewer');
const handPoses = frame.getHandPoses();

// Get the pose of the right hand.
const rightHandPose = handPoses[1];

// If the right hand is trigger down, create a new sphere at the position of the right hand.
if (rightHandPose.triggerDown) {
  const sphereEntity = document.querySelector('#sphere');
  sphereEntity.setAttribute('position', rightHandPose.position);
}

// Update the position and rotation of the sphere in the scene.
sphereEntity.setAttribute('rotation', rightHandPose.orientation);
