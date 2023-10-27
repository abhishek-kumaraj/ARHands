// Get the XRSession object.
const session = await navigator.xr.requestSession('immersive-ar');

// Create a XRReferenceSpace object for the real world.
const referenceSpace = await session.requestReferenceSpace('local');

// Create a XRFrame object.
const frame = await session.requestAnimationFrame(referenceSpace);

// Get the pose of the camera and the hands.
const cameraPose = frame.getPose(referenceSpace, 'viewer');
const handPoses = handTrackingEntity.handPoses;

// Update the position and rotation of the camera and the hands in the scene.
const camera = document.querySelector('#camera');
camera.setAttribute('position', cameraPose.position);
camera.setAttribute('rotation', cameraPose.orientation);

const handsEntity = document.querySelector('#hands');
handsEntity.setAttribute('position', handPoses[0].position);
handsEntity.setAttribute('rotation', handPoses[0].orientation);

// Set the color of the hands entity.
handsEntity.setAttribute('material', 'color: #ff0000');
