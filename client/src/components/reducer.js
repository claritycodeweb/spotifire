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
};

const reducer = (state, action) => {
  // console.log('DISPATCH', action);

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
        recentlyPlayed: action.items.map((i, index) => ({
          ...i.track,
          id: index,
        })),
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
    case 'SET_SELECTED_PLAYLIST':
      return {
        ...state,
        selectedPlaylist: action.playlist,
      };
    case 'SET_SEARCH_DATA':
      return {
        ...state,
        searchData: action.search,
      };
    default:
      return state;
  }
};

export default reducer;
