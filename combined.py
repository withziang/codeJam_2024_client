from GazeTracking.gaze_tracking import GazeTracking  # Import the GazeTracking class
from fer import FER
import cv2

# Initialize the GazeTracking object
gaze = GazeTracking()
detector = FER()
# Start webcam capture
cap = cv2.VideoCapture(0)

while True:
    _, frame = cap.read()
    emotion_conversion = {
        "happy": "Dynamic", "neutral": "Neutral",
        "angry": "Confused", "sad": "Confused",
        "fear": "Confused", "surprise": "Confused"
        
    }
    # Update the gaze tracking with the new frame
    gaze.refresh(frame)
    emotion, score = detector.top_emotion(frame)
    emotion = emotion if emotion not in emotion_conversion else emotion_conversion[emotion.lower()]
    if emotion and score and emotion == "Neutral" and score < 0.3:
        emotion = "Confused"
        score += 0.2
    # Annotate the frame with gaze tracking data
    frame = gaze.annotated_frame()
    # Display the dominant emotion
    try:
        cv2.putText(frame, f"{emotion}: {score:.2f}", (50, 50), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2)
    except TypeError:
        print(frame, emotion, score)

    if gaze.is_center() or gaze.is_blinking():
        cv2.putText(frame, "Eye Contact Detected!!", (50, 250), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2)
    else:
        cv2.putText(frame, "No Eye Contact", (50, 250), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2)

    # Display the frame with annotations
    cv2.imshow("Detector", frame)

    # Exit loop when 'q' is pressed
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

cap.release()
cv2.destroyAllWindows()
