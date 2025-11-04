import CustomHeader from "@/componeents/CustomHeader";
import { AuthProvider, useAuth } from "@/contexts/auth-context";
import { router, Stack, useSegments } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";

function RootLayoutContent() {
  const { user, loading } = useAuth();
  const segments = useSegments();

  useEffect(() => {
    if (loading) return;

    const inAuthGroup = segments[0] === "(auth)";

    if (!user && !inAuthGroup) {
      router.replace("/(auth)/signin");
    } else if (user && inAuthGroup) {
      router.replace("/(tabs)");
    }
  }, [user, loading, segments]);

  const withCustomHeader = (title: any, backText = "Back") => ({
    header: () => <CustomHeader title={title} backText={backText} />,
  });

  return (
    <>
      <StatusBar style="light" />
      <Stack>
        {/* AUTH SCREENS */}
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />

        {/* TABS SCREENS */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

        {/* OTHER SCREENS WITH CUSTOM HEADER */}
        <Stack.Screen
          name="factory/index"
          options={withCustomHeader("Manage Factory")}
        />
        <Stack.Screen
          name="factory/workers/index"
          options={withCustomHeader("Workers")}
        />
        <Stack.Screen
          name="factory/workers/add"
          options={withCustomHeader("Add Worker", "")}
        />
        <Stack.Screen
          name="factory/supervisors/index"
          options={withCustomHeader("Supervisors")}
        />
        <Stack.Screen
          name="factory/supervisors/add"
          options={withCustomHeader("Add Supervisor", "")}
        />
        <Stack.Screen
          name="factory/departments/index"
          options={withCustomHeader("Departments")}
        />
        <Stack.Screen
          name="factory/departments/add"
          options={withCustomHeader("Add Department", "")}
        />
        <Stack.Screen
          name="projects/index"
          options={withCustomHeader("Projects")}
        />
        <Stack.Screen name="tasks/index" options={withCustomHeader("Tasks")} />
        <Stack.Screen
          name="projects/add"
          options={withCustomHeader("New Project", "")}
        />
      </Stack>
    </>
  );
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <RootLayoutContent />
    </AuthProvider>
  );
}
