import librosa
import matplotlib.pyplot as plt
import numpy as np


# Load the audio file
filename = r'audio_test\Eric pt3.wav'
y, sr = librosa.load(filename)

# Set the minimum and maximum frequencies to search for (in Hz)
fmin = librosa.note_to_hz('C2')  # Approx. 65 Hz
fmax = librosa.note_to_hz('C7')  # Approx. 2093 Hz

# Estimate the pitch (fundamental frequency) using librosa.pyin
f0, voiced_flag, voiced_probs = librosa.pyin(y, fmin=fmin, fmax=fmax)

# Get time stamps for the f0 values
times = librosa.times_like(f0)

# Mask invalid values (unvoiced frames)
f0_m = np.ma.masked_where(np.isnan(f0), f0)

# Plot the pitch over time
plt.figure(figsize=(14, 5))
plt.plot(times, f0_m, label='Estimated pitch')
plt.xlabel('Time (s)')
plt.ylabel('Fundamental frequency (Hz)')
plt.title('Pitch Variation Over Time')
plt.legend()
plt.show()
