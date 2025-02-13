from fer import FER
import cv2

cap = cv2.VideoCapture(0)
detector = FER()

while True:
    _, frame = cap.read()

    # Analyze the facial expression using FER
    emotion, score = detector.top_emotion(frame)

    # Display the dominant emotion
    try:
        cv2.putText(frame, f"{emotion}: {score:.2f}", (50, 50), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2)
    except TypeError:
        print(frame, emotion, score)
    cv2.imshow("Facial Expression Recognition", frame)

    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

cap.release()
cv2.destroyAllWindows()
