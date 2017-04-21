#!/bin/bash
# Custom taogoat build script
#
echo "Custom taogoat build script"

# clear out previous bundle
rm ./build/public/index.js

# copy /server into build directory
cp -R ./src/core/server ./build
# remove webpack dependency
rm ./build/server/webpack.index.js

# copy bundle.js into build directory
node node_modules/webpack/bin/webpack.js --config ./utils/webpack.build.config.js --progress --profile --colors

cd build

git add *
git commit -am "auto built commit"

git push https://git.heroku.com/YOUR_APP_NAME.git master

cd ..
