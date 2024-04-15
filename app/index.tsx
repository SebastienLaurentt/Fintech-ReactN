import Colors from "@/constants/Colors";
import { defaultStyles } from "@/constants/Styles";
import { useAssets } from "expo-asset";
import { ResizeMode, Video } from "expo-av";
import { Link } from "expo-router";
import { LinearGradient } from 'expo-linear-gradient';
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
      
      <View >
        <LinearGradient
          // Background Linear Gradient
          colors={["rgba(0,0,0,1)", "transparent"]}
          style={{ marginTop: 600, padding: 20 }}
        >
          <View>
            <Text style={styles.header}>
              Ready to change the way you money?
            </Text>
          </View>

          <View style={styles.buttons}>
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
                  style={{ color: "white", fontSize: 22, fontWeight: "500" }}
                >
                  Log In
                </Text>
              </TouchableOpacity>
            </Link>
            <Link
              href={"/signup"}
              style={[
                defaultStyles.pillButton,
                { flex: 1, backgroundColor: "#fff" },
              ]}
              asChild
            >
              <TouchableOpacity>
                <Text
                  style={{ color: "black", fontSize: 22, fontWeight: "500" }}
                >
                  Sign Up
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
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    marginBottom: 60,
    paddingVertical: 20,
  },
});

export default Page;
