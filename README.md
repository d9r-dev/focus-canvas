# Focus Canvas v1
### Video Demo: <URL>
### Description: 

Do you know this situation: You are trying to get in some deep work and for that you just need some background music? But instead opening the first that comes to your mind you are stuck in analysis paralysis searching Youtube or Spotify for exactly the right playlist. The Focus Canvas was build to stop that.

Hosted on your website you can just open the page contained in the index.html. It displays a canvas showing a interactive background and starting one of my favorite youtube radios for music to listen while working. If you just need something calming for a short break you can use the interactive background and its mouse tracking for some meditation.

#### index.html

This file contains the boilerplate for the site. It contains the canvas element where the background is drawn on and the embedded video player. 

#### styles.css

This file contains the basic styling. It also provides that the player gets smaller and transparent when not hovered over. So the player is not distracting your focus. 

#### index.js

This file contains the main javascript logic for the background. It initializes the canvas where the background is drawn on and the mouse tracking. The Circle class contains everything that is needed for a circle to be drawn. The Colors array is providing the colors of the color scheme. You can edit this for some customization. When the script runs circles are drawn at random positions. The circles also move in random directions but cannot go off the canvas. When you move your mouse cursor near a circle it grows in size. If you move your mouse away it shrinks to its original size. 