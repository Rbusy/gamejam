#!/bin/sh

git add assets/$1
git commit -m "$USER"
git push
