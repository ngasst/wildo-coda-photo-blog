# Instructions for Saturday April, 27th

## Goal
Today's goal is to get the project polished and as completed as possible with, perhaps, the exception of the menu.

## Conflict resolution
Since we all worked on at least one file that is common to us all `assets/style.css`, that
file should be conflicting when you try to push your changes to remote and create a request
to merge into master.

## Steps to resolve conflicts

- sync your remote master with your local
- get back onto your local branch
- rebase your local branch onto master `git rebase master`
- Git should tell you that you have conflicts and also tell you which files are conflicted
- Resolve all conflicts in all conflicting files
- Add your changes to the stage
- Commit your changes
- Push your changes once more
- Now, when there are no more conflicts in your pull request

## Detailed instructions

- Go back to your master branch `$ git checkout master`
- Pull your master branch to sync it with remote `$ git pull origin master`
- Create a new branch called: `[name-of-page]-polish`
- Communicate with your team mates and ensure that you have a consistent design across the board