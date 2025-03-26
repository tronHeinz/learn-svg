#!/bin/bash
# checkout develop
echo "### checkout to deploy-pages"
git checkout deploy-pages

echo "### merge develop in deploy-pages"
git merge develop

echo "### create a buid"
npm run build

echo "### copy all dist files ti root"
cp -r ./dist .