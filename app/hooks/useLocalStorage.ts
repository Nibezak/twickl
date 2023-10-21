import { useLocalStorageValue } from '@react-hookz/web';

function usePartySettings() {
  const currentSubtitleFontColor = useLocalStorageValue('twinkl_settings-subtitle-font_color', {
    defaultValue: 'White',
  });
  const currentSubtitleFontSize = useLocalStorageValue('twinkl_settings-subtitle-font_size', {
    defaultValue: '100%',
  });
  const currentSubtitleBackgroundColor = useLocalStorageValue(
    'twinkl_settings-subtitle-background_color',
    {
      defaultValue: 'Black',
    },
  );
  const currentSubtitleBackgroundOpacity = useLocalStorageValue(
    'twinkl_settings-subtitle-background_opacity',
    {
      defaultValue: '0%',
    },
  );
  const currentSubtitleWindowColor = useLocalStorageValue('twinkl_settings-subtitle-window_color', {
    defaultValue: 'Black',
  });
  const currentSubtitleWindowOpacity = useLocalStorageValue(
    'twinkl_settings-subtitle-window_opacity',
    {
      defaultValue: '0%',
    },
  );
  const currentSubtitleTextEffects = useLocalStorageValue('twinkl_settings-subtitle-text_effect', {
    defaultValue: 'Outline',
  });
  const autoShowSubtitle = useLocalStorageValue('twinkl_settings-subtitle-auto_show', {
    defaultValue: false,
  });
  // const showFilter = useLocalStorageValue('twinkl_settings-layout-show-filter', {
  //   defaultValue: false,
  //   initializeWithValue: false,
  // });
  const isMutedTrailer = useLocalStorageValue('twinkl_settings-list-mute_trailer', {
    defaultValue: false,
    initializeWithValue: true,
  });
  const isPlayTrailer = useLocalStorageValue('twinkl_settings-list-play_trailer', {
    defaultValue: true,
    initializeWithValue: false,
  });
  const isFetchLogo = useLocalStorageValue('twinkl_settings-list-fetch_logo', {
    defaultValue: false,
  });
  const isShowSpotlight = useLocalStorageValue('twinkl_settings-list-show_spotlight', {
    defaultValue: false,
  });
  const isAutoSize = useLocalStorageValue('twinkl_settings-player-auto_size', {
    defaultValue: false,
  });
  const isPicInPic = useLocalStorageValue('twinkl_settings-player-pic_in_pic', {
    defaultValue: true,
  });
  const isMuted = useLocalStorageValue('twinkl_settings-player-mute', {
    defaultValue: false,
  });
  const isAutoPlay = useLocalStorageValue('twinkl_settings-player-auto_play', {
    defaultValue: false,
  });
  const isAutoMini = useLocalStorageValue('twinkl_settings-player-auto_mini', {
    defaultValue: false,
  });
  const isLoop = useLocalStorageValue('twinkl_settings-player-loop', {
    defaultValue: false,
  });
  const isScreenshot = useLocalStorageValue('twinkl_settings-player-screenshot', {
    defaultValue: true,
  });
  const isMiniProgressBar = useLocalStorageValue('twinkl_settings-player-mini_progress_bar', {
    defaultValue: true,
  });
  const isAutoPlayback = useLocalStorageValue('twinkl_settings-player-auto_playback', {
    defaultValue: true,
  });
  const isAutoPlayNextEpisode = useLocalStorageValue(
    'twinkl_settings-player-auto_play_next_episode',
    {
      defaultValue: true,
    },
  );
  const isShowSkipOpEdButton = useLocalStorageValue(
    'twinkl_settings-player-show_skip_op_ed_button',
    {
      defaultValue: true,
    },
  );
  const isAutoSkipOpEd = useLocalStorageValue('twinkl_settings-player-auto_skip_op_ed', {
    defaultValue: false,
  });
  const isFastForward = useLocalStorageValue('twinkl_settings-player-fast_forward', {
    defaultValue: true,
  });
  // const isSwipeFullscreen = useLocalStorageValue('twinkl_settings_player-gestures_swipe-fullscreen', {
  //   defaultValue: false,
  // });
  const sidebarStyleMode = useLocalStorageValue('twinkl_settings-layout-sidebar-style_mode', {
    defaultValue: 'rounded-all',
  });
  const sidebarMiniMode = useLocalStorageValue('twinkl_settings-layout-sidebar-mini_mode', {
    defaultValue: false,
    initializeWithValue: false,
  });
  const sidebarHoverMode = useLocalStorageValue('twinkl_settings-layout-sidebar-hover_mode', {
    defaultValue: false,
    initializeWithValue: false,
  });
  const sidebarBoxedMode = useLocalStorageValue('twinkl_settings-layout-sidebar-boxed_mode', {
    defaultValue: false,
    initializeWithValue: false,
  });
  const sidebarSheetMode = useLocalStorageValue('twinkl_settings-layout-sidebar-sheet_mode', {
    defaultValue: false,
    initializeWithValue: false,
  });
  const listViewType = useLocalStorageValue<'table' | 'card' | 'detail'>(
    'twinkl_settings-layout-list_view',
    {
      defaultValue: 'card',
      initializeWithValue: false,
    },
  );
  const listLoadingType = useLocalStorageValue('twinkl_settings-layout-list-loading_type', {
    defaultValue: 'infinite-scroll',
    initializeWithValue: false,
  });
  const autoSwitchSubtitle = useLocalStorageValue('twinkl_settings-subtitle-auto_switch', {
    defaultValue: true,
  });
  const isShowBreadcrumb = useLocalStorageValue('twinkl_settings-layout-header-show_breadcrumb', {
    defaultValue: false,
    initializeWithValue: true,
  });
  const isShowTopPagination = useLocalStorageValue(
    'twinkl_settings-layout-list-show-top-pagination',
    {
      defaultValue: false,
      initializeWithValue: false,
    },
  );
  const isLightDarkThemeOnly = useLocalStorageValue(
    'twinkl_settings-layout-theme-light_dark_only',
    {
      defaultValue: true,
    },
  );
  const currentThemeColor = useLocalStorageValue('twinkl_settings-layout-theme-color', {
    defaultValue: 'blue',
    initializeWithValue: false,
  });

  return {
    currentSubtitleFontColor,
    currentSubtitleFontSize,
    currentSubtitleBackgroundColor,
    currentSubtitleBackgroundOpacity,
    currentSubtitleWindowColor,
    currentSubtitleWindowOpacity,
    autoShowSubtitle,
    // showFilter,
    isMutedTrailer,
    isPlayTrailer,
    isAutoSize,
    isPicInPic,
    isMuted,
    isAutoPlay,
    isAutoMini,
    isLoop,
    isScreenshot,
    isMiniProgressBar,
    isAutoPlayback,
    isAutoPlayNextEpisode,
    isShowSkipOpEdButton,
    isAutoSkipOpEd,
    isFastForward,
    // isSwipeFullscreen,
    currentSubtitleTextEffects,
    sidebarStyleMode,
    sidebarMiniMode,
    sidebarHoverMode,
    sidebarBoxedMode,
    sidebarSheetMode,
    listViewType,
    listLoadingType,
    autoSwitchSubtitle,
    isShowBreadcrumb,
    isShowTopPagination,
    isLightDarkThemeOnly,
    currentThemeColor,
    isFetchLogo,
    isShowSpotlight,
  };
}

export { usePartySettings };
