import { StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';
import { ExternalLink } from '@/components/ExternalLink';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sean's using GitHub iPhone app</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <ExternalLink style={styles.title} href="http://www.seanoreilly.com.au">
        Visit Sean O'Reilly's Website
      </ExternalLink>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
