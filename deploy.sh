#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# clear website folder
rm -rf website/*
# move all output files into the website directory
mv -v src/.vuepress/dist/* website/

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
git push -f https://github.com/LlamaramaTeam/LlamaramaTeam.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -
