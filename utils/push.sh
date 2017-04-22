#!/bin/bash
# Custom taogoat build script
#
echo "Custom taogoat build script"

cd build

git add *
git commit -am "auto built commit"

git push https://git.heroku.com/tgt-benchmark.git master

cd ..
