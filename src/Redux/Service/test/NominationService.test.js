import { LOCAL_STORAGE_KEY_NOMINATIONS } from '../../../Assets/Constants';
import { postDeleteNomination, getNominationResults, postNomination } from '../NominationsService';

describe('NominationService', () => {
  beforeEach(() => {
    localStorage.clear();
  });
  test('getNominationResults', () => {
    const nominations = [
      {
        name: 'test',
        value: 'testValue',
      },
    ];
    localStorage.setItem(LOCAL_STORAGE_KEY_NOMINATIONS, JSON.stringify(nominations));

    expect(getNominationResults()).toEqual(nominations);
  });
  test('getNominationResults when no storage has been set', () => {
    const expectedResult = [];

    expect(getNominationResults()).toEqual(expectedResult);
  });
  test('deleteNomination', () => {
    const nominations = [
      {
        imdbID: '1111',
      },
      {
        imdbID: '2222',
      },
    ];
    localStorage.setItem(LOCAL_STORAGE_KEY_NOMINATIONS, JSON.stringify(nominations));
    postDeleteNomination('1111');

    expect(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_NOMINATIONS))).toHaveLength(1);
  });

  test('postNomination', () => {
    const nominations = [
      {
        imdbID: '1111',
      },
      {
        imdbID: '2222',
      },
    ];

    localStorage.setItem(LOCAL_STORAGE_KEY_NOMINATIONS, JSON.stringify(nominations));
    const newNomination = {
      imdb: '3333',
    };

    postNomination(newNomination);

    expect(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_NOMINATIONS))).toHaveLength(3);
  });

  test('postNomination when no nominations exist', () => {
    const newNomination = {
      imdb: '3333',
    };

    postNomination(newNomination);

    expect(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_NOMINATIONS))).toHaveLength(1);
  });
});
