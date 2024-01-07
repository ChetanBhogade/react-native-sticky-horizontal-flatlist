import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  listTitle: {
    fontSize: 28,
  },
  listArea: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: 16,
    borderWidth: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    gap: 10,
  },
  listContainer: {
    marginTop: 10,
    paddingVertical: 10,
    height: 200,
  },
  cardContainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 20,
    borderWidth: 1,
    padding: 10,
    paddingTop: 30,
    width: 175,
    height: 175,
    backgroundColor: '#fff',
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  cardDescription: {
    fontSize: 20,
  },
  cardId: {
    fontSize: 16,
  },
});
