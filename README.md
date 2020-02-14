# legacy-web-ui-master-files

## This is pre-design system La Trobe Public website CSS

## Usage

### Requirements

Dart SASS - https:/https://sass-lang.com/install

### Workflow

### Edit and publish to GitHub

1. Clone this repo to your desktop
2. Run ./sass-watch.sh **Note**: this file must be executable - chmod 755 sass-watch.sh
3. Make changes to SCSS and or JavaScript - you can create html samples in the samples folder to test your changes
4. Commit changes
5. Push changes to GitHub
7. Squiz Matrix is connected to the GitHub repo via Git bridge in Matrix CMS
/Media Folder/La Trobe API/Design Files
DEV (wwwdev.latrobe.edu.au): asset #1013205
QAS (wwwqas.latrobe.edu.au): asset #1041198
PRD (www.latrobe.edu.au): asset #1041198
Use the Update Now button at the bottom of the Details page of these assets to deploy updated CSS from the GitHub repo to each environment
**Remember to TEST changes on DEV and/or QAS before updating PRD**
8. Conduct testing

### Major changes

If you are making a major change:
1. Create a new branch of the repo, connect this branch to Squiz DEV or QAS and deploy and test your changes
2. Once changes have been validated, goto GitHub, create a pull request to merge your branch into master and then deloy master to PRD
3. Delete your branch and reconnect DEV/QAS to master
