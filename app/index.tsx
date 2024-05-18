import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useAssets } from "expo-asset";
import { ResizeMode, Video } from "expo-av";
import { Link } from "expo-router";
import { defaultStyles } from "@/constants/Styles";
import Colors from "@/constants/Colors";

const index = () => {
  const [assets] = useAssets([require("@/assets/video/intro.mp4")])
  return (
    <View style={styles.container}>
      {/* <Text>index</Text> */}
      {
        assets && (
          <Video
          resizeMode={ResizeMode.COVER}
            isMuted
            isLooping
            shouldPlay
            source={{ uri: assets[0].uri }}
            style={styles.video}
          />
        )
      }

      <View style={{ marginTop: 80, padding: 20 }}>
        <Text style={styles.header}>Ready to change the way you money?</Text>
      </View>
      <View style={styles.button}>
        <Link href={"/login"} style={[defaultStyles.pillButton, {flex: 1, backgroundColor: Colors.dark }]} asChild>
        <TouchableOpacity>
            <Text style={{color: '#fff', fontSize: 22, fontWeight: '500'}}>Login</Text>
        </TouchableOpacity>
        </Link>
        <Link href={"/signup"} style={[defaultStyles.pillButton, {flex: 1, backgroundColor: "#fff" }]} asChild>
        <TouchableOpacity>
            <Text style={{ fontSize: 22, fontWeight: '500'}}>Sign up</Text>
        </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  video: {
    width: '100%',
    height: '100%',
    position: 'absolute'
  },
  header: {
    fontSize: 36,
    fontWeight: '900',
    textTransform: "uppercase",
    color: '#fff'
  },
  button:{
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    marginBottom: 60,
    paddingHorizontal: 20
  }
});
