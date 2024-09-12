import { WebView } from "react-native-webview";

export default function Tab() {
  return <WebView source={{ uri: "http://192.168.0.215:3000/" }} />;
}
