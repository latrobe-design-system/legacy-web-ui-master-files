#!/bin/bash

echo -e "\033[0;32mStarting sass watch...\033[0m"

sass --watch --style=compressed _sass:css
