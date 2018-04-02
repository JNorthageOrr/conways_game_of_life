Description: 

This is a MVP project of Conway's Game of Life. It is built using React. 

Basics:

Clone the project
npm install 
npm start

Prerequisites:

Node
npm:
   yarn
   serve

Setup commands (yarn and serve):

#add yarn PPA key
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
 1949  echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list

#install yarn
sudo apt-get update && sudo apt-get install yarn

#compile the build folder 
yarn run build

#install serve
yarn global add serve

#launch the application using serve and push it to background (&)
serve -s build &

#package.json orgin api proxy:
  "proxy": {
    "/api": {
      "target": "http://localhost:3001"
    }
  }
}