import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import MaxiHeader from '../components/MaxiHeader';

export default function () {
  const renderBroadcast = (league, time, teams) => (
    <View style={styles.broadcast}>
      <View style={styles.leagueContainer}>
        <Text style={styles.league}>{league}</Text>
      </View>
      <View style={styles.teamsContainer}>
        <Text style={styles.matchTime}>{time}</Text>
        <Text style={styles.teams}>{teams}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <MaxiHeader />
      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{paddingBottom: 100, marginTop: 15}}>
        {renderBroadcast(
          'LL',
          '08.02 20:00',
          'Real Madrid \n' + 'Atletico Madrid',
        )}
        {renderBroadcast('SA', '18.03 21:00', 'AC Milan \n' + 'Napoli')}
        {renderBroadcast('EPL', '25.04 18:30', 'Chelsea \n' + 'Arsenal')}
        {renderBroadcast(
          'NFL',
          '12.05 19:00',
          'Buffalo Bills \n' + 'New York Jets',
        )}
        {renderBroadcast(
          'NHL',
          '20.06 20:15',
          'Pittsburgh Penguins \n' + 'Philadelphia Flyers',
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height,
    width,
    backgroundColor: COLORS.blue,
  },
  broadcast: {
    width: width * 0.9,
    alignSelf: 'center',
    marginTop: 20,
    backgroundColor: COLORS.blue,
    borderRadius: 8,
    flexDirection: 'row',
  },
  league: {
    fontSize: 40,
    fontFamily: FONTS.bold,
    color: COLORS.black,
    paddingVertical: 8,
  },
  leagueContainer: {
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.main,
    height: 100,
    width: 100,
  },
  teamsContainer: {
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  matchTime: {
    fontSize: 20,
    fontFamily: FONTS.bold,
    color: COLORS.main,
    textAlign: 'left',
  },
  teams: {
    textAlign: 'left',
    fontFamily: FONTS.extraBold,
    fontSize: 17,
    color: COLORS.white,
    marginTop: 5,
  },
});
