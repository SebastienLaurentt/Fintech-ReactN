import Colors from "@/constants/Colors";
import { defaultStyles } from "@/constants/Styles";
import { useAssets } from "expo-asset";
import { ResizeMode, Video } from "expo-av";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Page = () => {
  const [assets] = useAssets([require("@/assets/videos/intro.mp4")]);
  return (
    <View style={styles.container}>
      {assets && (
        <Video
          resizeMode={ResizeMode.COVER}
          isMuted
          isLooping
          shouldPlay
          source={{ uri: assets[0].uri }}
          style={styles.video}
        />
      )}

      <View>
        <LinearGradient
          // Background Linear Gradient
          colors={["transparent", "rgba(0,0,0,1)"]}
          style={{ marginTop: 640, padding: 20 }}
        >
          <View style={{ paddingTop: 0 }}>
            <Text style={styles.header}>Change the way</Text>
            <Text style={styles.paragraph}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab,
              perspiciatis?
            </Text>
          </View>

          <View style={styles.buttons}>
            <Link
              href={"/signup"}
              style={[
                defaultStyles.pillButton,
                { flex: 1, backgroundColor: "#0f766e" },
              ]}
              asChild
            >
              <TouchableOpacity>
                <Text
                  style={{ color: "white", fontSize: 18, fontWeight: "500" }}
                >
                  Sign Up
                </Text>
              </TouchableOpacity>
            </Link>
            <Link
              href={"/login"}
              style={[
                defaultStyles.pillButton,
                { flex: 1, backgroundColor: Colors.dark },
              ]}
              asChild
            >
              <TouchableOpacity>
                <Text
                  style={{ color: "white", fontSize: 18, fontWeight: "500" }}
                >
                  Log In
                </Text>
              </TouchableOpacity>
            </Link>
          </View>
        </LinearGradient>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  video: {
    width: "100%",
    height: "100%",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 36,
    fontWeight: "900",
    textTransform: "uppercase",
    color: "white",
  },
  paragraph: {
    fontSize: 20,
    fontWeight: "500",
    color: "white",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    marginBottom: 60,
    paddingVertical: 20,
  },
});

export default Page;
