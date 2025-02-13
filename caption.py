import cv2
import speech_recognition as sr
import threading

# Initialize OpenCV video capture
cap = cv2.VideoCapture(0)  # Change to a video file path if needed

# Initialize the recognizer for speech recognition
recognizer = sr.Recognizer()

# This will store the recognized speech
recognized_text = ""

# Function to capture audio and recognize speech
def listen_for_audio():
    global recognized_text
    with sr.Microphone() as source:
        recognizer.adjust_for_ambient_noise(source)  # Adjust for ambient noise
        print("Listening for speech...")
        
        while True:
            try:
                # Listen for audio input
                audio = recognizer.listen(source, timeout=5, phrase_time_limit=5)  # Listen for 5 seconds max
                print("Recognizing...")

                # Transcribe the audio using Google's speech recognition
                recognized_text = recognizer.recognize_google(audio)  # Use other recognizers if needed
                print(f"Recognized Speech: {recognized_text}")
            except sr.UnknownValueError:
                # Handle cases where speech is unintelligible
                print("Sorry, I didn't understand that.")
            except sr.RequestError as e:
                # Handle request errors (e.g., API issues)
                print(f"Error with the API: {e}")

# Start the background thread for speech recognition
audio_thread = threading.Thread(target=listen_for_audio)
audio_thread.daemon = True  # Daemon thread will exit when the main program exits
audio_thread.start()

# Process video frames with OpenCV
while True:
    ret, frame = cap.read()  # Read a frame from the video capture
    if not ret:
        print("Error: Couldn't capture video frame.")
        break

    # Display the current video frame in a window
    cv2.imshow("Live Video", frame)

    # Display the most recent recognized text on the video
    cv2.putText(frame, recognized_text, (50, 50), cv2.FONT_HERSHEY_SIMPLEX, 1, (255, 0, 0), 2)
    cv2.imshow("Live Video with Audio Recognition", frame)

    # Check for 'q' key to exit
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

# Clean up and release resources
cap.release()
cv2.destroyAllWindows()
