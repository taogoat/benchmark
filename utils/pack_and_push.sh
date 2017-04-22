#!/bin/bash
# Custom taogoat build script
#
echo "Custom taogoat build script"

# copy /server into build directory
cp -R ./src/core/server ./build
# remove webpack
rm ./build/server/webpack.index.js
# rewrite server/index.js
grep -v 'slice' ./src/core/server/index.js > ./build/server/index.js

# copy bundle.js into build directory
node node_modules/webpack/bin/webpack.js --config ./utils/webpack.build.config.js --progress --profile --colors

cd build

git add *
git commit -am "auto built commit"

git push https://git.heroku.com/tgt-benchmark.git master

cd ..
