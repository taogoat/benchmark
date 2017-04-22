#!/bin/bash
# Custom taogoat build script
#
echo "Custom taogoat prod script"


# copy /server into build directory
cp -R ./src/core/server ./build
# remove webpack dependency
rm ./build/server/webpack.index.js
# rewrite server/index.js
grep -v 'slice' ./src/core/server/index.js > ./build/server/index.js

# copy index.js into build directory
cp ./src/core/client/index.js ./build/public/app.js

cd build

git add *
git commit -am "auto built commit"

git push https://git.heroku.com/tgt-benchmark.git master

cd ..
