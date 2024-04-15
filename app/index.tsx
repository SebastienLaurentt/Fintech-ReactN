import Colors from "@/constants/Colors";
import { defaultStyles } from "@/constants/Styles";
import { MaterialIcons } from "@expo/vector-icons";
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

      <LinearGradient
        // Background Linear Gradient
        colors={["transparent", "rgba(0,0,0,1)"]}
        style={{
          ...StyleSheet.absoluteFillObject,
          paddingHorizontal: 20,
          paddingBottom: 30,
        }}
      >
        <View style={styles.content}>
          {/* Text */}
          <View>
            <MaterialIcons name="currency-bitcoin" size={40} color="white" />
            <Text style={{ color: "white", fontSize: 40, fontWeight: "800" }}> Be Your Own Bank</Text>
          </View>

          {/* Buttons */}
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
                { flex: 1, backgroundColor: Colors.white },
              ]}
              asChild
            >
              <TouchableOpacity>
                <Text
                  style={{ color: "black", fontSize: 18, fontWeight: "500" }}
                >
                  Log In
                </Text>
              </TouchableOpacity>
            </Link>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  video: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    flex: 1,
    justifyContent: "flex-end",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    marginTop: 10,
  },
});

export default Page;
