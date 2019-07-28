# phaser3-skeleton
phaser 3 skeleton project structure and a summary of the tips I have found for optimising workspace for Phaser.


WORKSPACE
Concencus online is to use Visual Studio Code (VSC) or Sublime Text 3. I have opted to use VSC because it is possible to use intellisense for Phaser on this. (Phaser 2 had a sublime intellisense plugin but Phaser 3 does not yet)

ACTION 	- Install VSC then open VSC
	- Click on extensions button
	- Search for and Install Live Server

TEST	- Open the /phaserproject folder in VSC. (this is effectively your working directory)
	- go to index.html, right click on the editor and click "Open with Live Server". You will see a parallax background moving.

	- Now go back to VSC /src/init.js and within the update function change the cloud speed from 0.02 to 2.
	- Press Ctrl-S to Save.
	- Return to the webpage and you will see that this takes immediate effect in the game window.

	- Now back to the init.js file and check that intellisense is working. Try "game." and see if phaser specific options appear.

NOTES
- in Phaser the game object can be referred to as "this" as it is the global object. when using "this" instead of a variable name or direct Phaser.Game(config) method then intellisense may not work.

	
