#!/bin/bash
# Custom taogoat build script
#
echo "Custom taogoat prod script"

# clear out previous bundle
rm ./build/public/index.js

# copy /server into build directory
cp -R ./src/core/server ./build
# remove webpack dependency
rm ./build/server/webpack.index.js

# copy index.js into build directory
cp ./src/core/client/index.js ./build/public

cd build

git add *
git commit -am "auto built commit"

git push https://git.heroku.com/tgt-hot.git master

cd ..
