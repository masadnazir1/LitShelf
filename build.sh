#!/bin/bash



device_count=$(adb devices | grep -w "device" | wc -l)

if [ "$device_count" -gt 0 ]; then
  echo "✅ $device_count device(s) connected"
  #
  #

cd android || exit
./gradlew assembleRelease --info

if [ $? -ne 0 ]; then
  echo "❌ Build failed. Aborting."
  exit 1
fi

APK_PATH="./app/build/outputs/apk/release/app-release.apk"

if [ -f "$APK_PATH" ]; then
  echo "✅ APK built successfully. Installing..."
  adb install "$APK_PATH"
else
  echo "❌ APK not found at $APK_PATH"
  exit 1
fi

#
#
#
else
  echo "❌ No devices connected"
fi








