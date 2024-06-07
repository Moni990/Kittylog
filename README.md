# Techin510-Final-Kittylog

How might we manage stray cats more effectively and improve the harmonious coexistence between cat lovers and stray cats?

# Technologies used

## Hardware：
Use several sensors to detect stray cats, The camera's function is Live Streaming, users can watch live feeds of stray cats eating through a mobile app. 
The weight sensor can monitor the food remains in the device, and notify the cat-sitters to add more.
The distance sensor was used to detect the stray cat's approach to activate the camera to shooting the cat's picture.
## Software:
Utilizes ML model to identify each cat and track its visits. Managers can update the cat's health condition via their smartphone.

# Problems
In many parks and communities in China, stray cats are a common sight. Managing the stray cats is a significant challenge.Research indicates that there are over 53 million stray cats as of 2022 (iResearch Inc, 2021). They endure difficult living conditions. Without Trap-Neuter-Return (TNR) systematic management, their numbers are increasing annually.

# How to run
1. Setting Up the Hardware
2. Connect the power supply to the Raspberry Pi and sensors.
3. Backend Setup:
Ensure the Azure backend is configured and running.
Deploy the API services to handle data communication between the app and sensors.
4. Running the System

# Reflections
## What I learned?
1. How to effectively integrate multiple code bases and upload the results to the Azure cloud.
2. How to display sensor data in real-time on the app.
3. Collaboration Between Frontend and Backend Development.

## What questions/problems did you face?
1. Developing a secure and scalable backend infrastructure to handle data processing and storage.
2. Implementing real-time video streaming with minimal latency and high-quality resolution.
