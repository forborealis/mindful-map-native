import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function ActivityLogs({ navigation }) {
  const handleLogout = () => {
    navigation.navigate('Signin');
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
          <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <Icon name="logout" size={30} color="#292f33" />
          </TouchableOpacity>
        <Text style={styles.title}>How did your day go?</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Activities</Text>
          <View style={styles.imageRow}>
            <TouchableOpacity style={styles.imageContainer}>
              <Image source={require('../../assets/studying.png')} style={styles.image} />
              <Text style={styles.imageText}>Studying</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.imageContainer}>
              <Image source={require('../../assets/exam.png')} style={styles.image} />
              <Text style={styles.imageText}>Exam</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.imageContainer}>
              <Image source={require('../../assets/work.png')} style={styles.image} />
              <Text style={styles.imageText}>Work</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.imageContainer}>
              <Image source={require('../../assets/reading.png')} style={styles.image} />
              <Text style={styles.imageText}>Reading</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.imageRow}>
            <TouchableOpacity style={styles.imageContainer}>
              <Image source={require('../../assets/gaming.png')} style={styles.image} />
              <Text style={styles.imageText}>Gaming</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.imageContainer}>
              <Image source={require('../../assets/music.png')} style={styles.image} />
              <Text style={styles.imageText}>Music</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.imageContainer}>
              <Image source={require('../../assets/movie.png')} style={styles.image} />
              <Text style={styles.imageText}>Movie</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.imageContainer}>
              <Image source={require('../../assets/relax.png')} style={styles.image} />
              <Text style={styles.imageText}>Relax</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Social</Text>
          <View style={styles.imageRow}>
            <TouchableOpacity style={styles.imageContainer}>
              <Image source={require('../../assets/family.png')} style={styles.image} />
              <Text style={styles.imageText}>Family</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.imageContainer}>
              <Image source={require('../../assets/friends.png')} style={styles.image} />
              <Text style={styles.imageText}>Friends</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.imageContainer}>
              <Image source={require('../../assets/relationship.png')} style={styles.image} />
              <Text style={styles.imageText}>Relationship</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.imageContainer}>
              <Image source={require('../../assets/colleagues.png')} style={styles.image} />
              <Text style={styles.imageText}>Colleagues</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.imageContainer}>
              <Image source={require('../../assets/pets.png')} style={styles.image} />
              <Text style={styles.imageText}>Pets</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Health</Text>
          <View style={styles.imageRow}>
            <TouchableOpacity style={styles.imageContainer}>
              <Image source={require('../../assets/exercise.png')} style={styles.image} />
              <Text style={styles.imageText}>Exercise</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.imageContainer}>
              <Image source={require('../../assets/run.png')} style={styles.image} />
              <Text style={styles.imageText}>Run</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.imageContainer}>
              <Image source={require('../../assets/walk.png')} style={styles.image} />
              <Text style={styles.imageText}>Walk</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.imageContainer}>
              <Image source={require('../../assets/eathealthy.png')} style={styles.image} />
              <Text style={styles.imageText}>Eat Healthy</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Sleep Quality</Text>
          <View style={styles.imageRow}>
            <TouchableOpacity style={styles.imageContainer}>
              <Image source={require('../../assets/no-sleep.png')} style={styles.image} />
              <Text style={styles.imageText}>No Sleep</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.imageContainer}>
              <Image source={require('../../assets/poor-sleep.png')} style={styles.image} />
              <Text style={styles.imageText}>Poor Sleep</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.imageContainer}>
              <Image source={require('../../assets/medium-sleep.png')} style={styles.image} />
              <Text style={styles.imageText}>Medium Sleep</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.imageContainer}>
              <Image source={require('../../assets/good-sleep.png')} style={styles.image} />
              <Text style={styles.imageText}>Good Sleep</Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity style={styles.finishButton}>
          <Text style={styles.finishButtonText}>Finish</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eef0ee',
  },
  logoutButton: {
    position: 'absolute',
    top: 22,
    right: 20,
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 100, 
  },
  title: {
    textAlign: 'center',
    color: '#3a3939',
    fontSize: 28,
    fontFamily: 'Nunito-Bold',
    marginBottom: 20,
  },
  section: {
    backgroundColor: 'transparent',
    borderColor: '#b1b1b1',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  sectionTitle: {
    color: '#3a3939',
    fontSize: 16,
    fontFamily: 'Nunito-Bold',
    marginBottom: 10,
  },
  imageRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 10,
    width: '22%',
  },
  image: {
    width: 40,
    height: 40,
  },
  imageText: {
    color: '#3a3939',
    fontSize: 11.5,
    fontFamily: 'Nunito',
    marginTop: 5,
    textAlign: 'center',
  },
  finishButton: {
    backgroundColor: '#6fba94',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
    width: '50%',
  },
  finishButtonText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Nunito-Bold',
    fontWeight: 'bolder',
  },
});