from GazeTracking.gaze_tracking import GazeTracking  # Import the GazeTracking class
import cv2

# Initialize the GazeTracking object
gaze = GazeTracking()

# Start webcam capture
cap = cv2.VideoCapture(0)

while True:
    _, frame = cap.read()

    # Update the gaze tracking with the new frame
    gaze.refresh(frame)

    # Annotate the frame with gaze tracking data
    frame = gaze.annotated_frame()

    if gaze.is_center() or gaze.is_blinking():
        print("Eye contact detected!")
    else:
        print("Not Looking")

    # Display the frame with annotations
    cv2.imshow("GazeTracking", frame)

    # Exit loop when 'q' is pressed
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

cap.release()
cv2.destroyAllWindows()
