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

      <View style={styles.content}>
        {/* Text */}
        <LinearGradient
          colors={[
            "rgba(0,0,0,0)",
            "rgba(0,0,0,0.9)",
            "rgba(0,0,0,1)",
            "rgba(0,0,0,1)",
            "rgba(0,0,0,1)",
            "rgba(0,0,0,1)",
          ]}
          style={styles.text}
        >
          <View>
            <MaterialIcons name="currency-bitcoin" size={40} color="white" />
            <Text style={{ color: "white", fontSize: 40, fontWeight: "800", paddingLeft:10}}>
            Be Your Own Bank
            </Text>
            <Text style={{ color: "white", fontSize: 20, fontWeight: "800", paddingLeft:10 }}>
              It's time to become financially free
            </Text>
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
        </LinearGradient>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  video: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  content: {
    flex: 1,
    justifyContent: "flex-end",
  },
  text: {
    paddingHorizontal: 20,
    paddingBottom: 10,
    paddingTop: 90,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    marginTop: 20,
  },
});

export default Page;
