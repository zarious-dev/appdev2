import { View, Text, StyleSheet } from 'react-native';

export default function ProfileDemo() {
  return (
    <View style={styles.container}>
      <View style={styles.profileCard}>
        <Text style={styles.title}>Student Profile</Text>
        
        <Text style={styles.label}>Course & Section:</Text>
        <Text style={styles.info}>BSIS - 3A</Text>

        <Text style={styles.label}>Name:</Text>
        <Text style={styles.info}>Caezarie Enriquez</Text>

        <Text style={styles.label}>Age:</Text>
        <Text style={styles.info}>23 Years Old</Text>

        <Text style={styles.label}>Favorite Hobby:</Text>
        <Text style={styles.info}>Reading, Listening to music, and Watching</Text>

        <Text style={styles.subTitle}>Classroom Pet Peeves</Text>
        <Text style={styles.peeveText}>• Interrupting someone while they are talking</Text>
        <Text style={styles.peeveText}>• Making unnecessary noise</Text>
        <Text style={styles.peeveText}>• Borrowing things without asking permission</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 40,
    justifyContent: 'center',
  },
  profileCard: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 15,
    textAlign: 'center',
  },
  label: {
    fontSize: 12,
    color: '#7f8c8d',
    textTransform: 'uppercase',
    fontWeight: '600',
  },
  info: {
    fontSize: 18,
    color: '#34495e',
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#e74c3c',
    marginTop: 15,
    marginBottom: 5,
  },
  peeveText: {
    fontSize: 12,
    color: '#576574',
    fontStyle: 'bold',
    marginTop: 3,
  },
});
