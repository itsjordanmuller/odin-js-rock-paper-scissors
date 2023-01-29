# Odin Project Rock Paper Scissors 

# Now you’re all set to work on your new feature! 
Note: You can add files, commit to this branch, and push changes to your repo, just like you would with the main branch. Everything is the same except when you push the changes, you’d use git push origin rps-ui instead of git push origin main, since we’re pushing to our new branch.

In our UI, the player should be able to play the game by clicking on buttons rather than typing their answer in a prompt.

# Goals

- [x] For now, remove the logic that plays exactly five rounds.
- [ ] Create three buttons, one for each selection. Add an event listener to the buttons that call your playRound function with the correct playerSelection every time a button is clicked. (you can keep the console.logs for this step)
- [ ] Add a div for displaying results and change all of your console.logs into DOM methods.
- [ ] Display the running score, and announce a winner of the game once one player reaches 5 points.
- [ ] You will likely have to refactor (rework/rewrite) your original code to make it work for this. That’s OK! Reworking old code is an important part of a programmer’s life.
- [ ] Once you’re all done with your UI and made sure everything’s satisfactory, commit your changes to the rps-ui branch.
- [ ] Now let’s take a look at how we can merge the changes from our rps-ui branch back to our main branch.
- [ ] Checkout the branch we want to merge INTO i.e. main with the command git checkout main.
- [ ] Now let’s merge our rps-ui branch into main, our current branch, with git merge rps-ui.
- [ ] If everything goes fine, our rps-ui branch is now successfully merged with main! Use git log and you’ll see all the commits you’ve made to your feature branch on top of the commits you made to the main branch. Now for our final step!
- [ ] Let’s push our main branch into our remote repo by running git push origin main . Go to your GitHub repo and you’ll see that our main branch will have all the changes and commits you made to the rps-ui branch. Congratulations! You’ve successfully pushed your first feature into your production branch!
- [ ] Now that we have all our code in the main branch, we don’t really need our rps-ui branch anymore. Let’s do some cleanup, both locally and in the remote repo. Delete the branch from our local repo with git branch -d rps-ui and also delete it from the remote repo on GitHub with git push --delete origin rps-ui. Congrats, we’re all done with our cleanup!

Make sure to publish the project on GitHub Pages and add a live preview link in the [project lesson](https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/rock-paper-scissors).