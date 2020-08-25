#!/bin/bash
export PROJECTROOT="~/Projects/KeyboardFriend"

vim $(find ~/Projects/KeyboardFriend/js/app | fzf -m)
