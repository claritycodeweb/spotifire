export const initialState = {
  spotify: null,

  user: null,
  playlists: null,
  playing: false,
  item: null,
  topArtists: null,
  discoverWeekly: null,
  topTracks: null,
  recentlyPlayed: null,
  recommendation: null,

  selectedAlbum: null,

  // token:
  //   'BQAA-8FqiXawxDrB6uM5M51V5FiPuF4b1iHssjb14Z2Q1ipCUEKXOF6L1lLI_InmSQ0-N_fpkGv1eLoMl087u3AtvRBvkxYAYD2BcNNaqYu1hmVgieLDiIfnGaje5zhrVUjjafhKNRiAqUVyxhhtL4AWVaqJwhBU-3Atvu_W2Ks67QWv',
};

const reducer = (state, action) => {
  console.log('DISPATCH', action);

  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      };
    case 'SET_PLAYING':
      return {
        ...state,
        playing: action.playing,
      };
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token,
      };
    case 'SET_PLAYLISTS':
      return {
        ...state,
        playlists: action.playlists,
      };
    case 'SET_DISCOVER_WEEKLY':
      return {
        ...state,
        discoverWeekly: action.discoverWeekly,
      };
    case 'SET_SPOTIFY':
      return {
        ...state,
        spotify: action.spotify,
      };
    case 'SET_TOP_ARTISTS':
      return {
        ...state,
        topArtists: action.top_artists,
      };
    case 'SET_ITEM':
      return {
        ...state,
        item: action.item,
      };
    case 'SET_TOPTRACKS':
      return {
        ...state,
        topTracks: action.topTracks,
      };
    case 'SET_RECENTLYPLAYED':
      return {
        ...state,
        recentlyPlayed: action.items.map((i) => i.track),
      };
    case 'SET_RECOMMENDATION':
      return {
        ...state,
        recommendation: action.items,
      };
    case 'SET_SELECTED_ALBUM':
      return {
        ...state,
        selectedAlbum: action.album,
      };
    default:
      return state;
  }
};

export default reducer;
