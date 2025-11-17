import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import * as SystemUI from "expo-system-ui";
import { useEffect } from "react";

export default function Layout() {
  useEffect(() => {
    SystemUI.setBackgroundColorAsync("#a020f0"); // purple
  }, []);

  return (
    <>
      <StatusBar style="light" backgroundColor="#a020f0" />
      <Stack screenOptions={{ headerShown: false }} />
    </>
  );
}