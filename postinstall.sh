#!/bin/bash

if [[ $$NETLIFY != *true ]]; then
    (cd docs && yarn);
    (cd web && yarn);
fi
