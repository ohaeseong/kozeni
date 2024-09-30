import { StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { WebView } from "react-native-webview";

export default function Tab() {
  return (
    <SafeAreaView className="flex-1">
      <WebView source={{ uri: "http://192.168.0.215:3000/review" }} />
    </SafeAreaView>
  );
}
