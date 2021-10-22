#!/bin/bash

echo 'Prepare to compile:'
tsc.cmd -t es6 src/Cam.ts src/Point.ts src/CamList.ts src/CamEvent.ts --module es6 --outDir target;
echo 'ok'
echo 'Prepare to create bundle:'
npm run build;
echo 'ok'
echo 'Starting...'
npm run serve