import { useLocalStorageValue } from '@react-hookz/web';

function usePartySettings() {
  const currentSubtitleFontColor = useLocalStorageValue('watchparty_settings-subtitle-font_color', {
    defaultValue: 'White',
  });
  const currentSubtitleFontSize = useLocalStorageValue('watchparty_settings-subtitle-font_size', {
    defaultValue: '100%',
  });
  const currentSubtitleBackgroundColor = useLocalStorageValue(
    'watchparty_settings-subtitle-background_color',
    {
      defaultValue: 'Black',
    },
  );
  const currentSubtitleBackgroundOpacity = useLocalStorageValue(
    'watchparty_settings-subtitle-background_opacity',
    {
      defaultValue: '0%',
    },
  );
  const currentSubtitleWindowColor = useLocalStorageValue(
    'watchparty_settings-subtitle-window_color',
    {
      defaultValue: 'Black',
    },
  );
  const currentSubtitleWindowOpacity = useLocalStorageValue(
    'watchparty_settings-subtitle-window_opacity',
    {
      defaultValue: '0%',
    },
  );
  const currentSubtitleTextEffects = useLocalStorageValue(
    'watchparty_settings-subtitle-text_effect',
    {
      defaultValue: 'Outline',
    },
  );
  const autoShowSubtitle = useLocalStorageValue('watchparty_settings-subtitle-auto_show', {
    defaultValue: false,
  });
  // const showFilter = useLocalStorageValue('watchparty_settings-layout-show-filter', {
  //   defaultValue: false,
  //   initializeWithValue: false,
  // });
  const isMutedTrailer = useLocalStorageValue('watchparty_settings-list-mute_trailer', {
    defaultValue: false,
    initializeWithValue: true,
  });
  const isPlayTrailer = useLocalStorageValue('watchparty_settings-list-play_trailer', {
    defaultValue: true,
    initializeWithValue: false,
  });
  const isFetchLogo = useLocalStorageValue('watchparty_settings-list-fetch_logo', {
    defaultValue: false,
  });
  const isShowSpotlight = useLocalStorageValue('watchparty_settings-list-show_spotlight', {
    defaultValue: false,
  });
  const isAutoSize = useLocalStorageValue('watchparty_settings-player-auto_size', {
    defaultValue: false,
  });
  const isPicInPic = useLocalStorageValue('watchparty_settings-player-pic_in_pic', {
    defaultValue: true,
  });
  const isMuted = useLocalStorageValue('watchparty_settings-player-mute', {
    defaultValue: false,
  });
  const isAutoPlay = useLocalStorageValue('watchparty_settings-player-auto_play', {
    defaultValue: false,
  });
  const isAutoMini = useLocalStorageValue('watchparty_settings-player-auto_mini', {
    defaultValue: false,
  });
  const isLoop = useLocalStorageValue('watchparty_settings-player-loop', {
    defaultValue: false,
  });
  const isScreenshot = useLocalStorageValue('watchparty_settings-player-screenshot', {
    defaultValue: true,
  });
  const isMiniProgressBar = useLocalStorageValue('watchparty_settings-player-mini_progress_bar', {
    defaultValue: true,
  });
  const isAutoPlayback = useLocalStorageValue('watchparty_settings-player-auto_playback', {
    defaultValue: true,
  });
  const isAutoPlayNextEpisode = useLocalStorageValue(
    'watchparty_settings-player-auto_play_next_episode',
    {
      defaultValue: true,
    },
  );
  const isShowSkipOpEdButton = useLocalStorageValue(
    'watchparty_settings-player-show_skip_op_ed_button',
    {
      defaultValue: true,
    },
  );
  const isAutoSkipOpEd = useLocalStorageValue('watchparty_settings-player-auto_skip_op_ed', {
    defaultValue: false,
  });
  const isFastForward = useLocalStorageValue('watchparty_settings-player-fast_forward', {
    defaultValue: true,
  });
  // const isSwipeFullscreen = useLocalStorageValue('watchparty_settings_player-gestures_swipe-fullscreen', {
  //   defaultValue: false,
  // });
  const sidebarStyleMode = useLocalStorageValue('watchparty_settings-layout-sidebar-style_mode', {
    defaultValue: 'rounded-all',
  });
  const sidebarMiniMode = useLocalStorageValue('watchparty_settings-layout-sidebar-mini_mode', {
    defaultValue: true,
    initializeWithValue: false,
  });
  const sidebarHoverMode = useLocalStorageValue('watchparty_settings-layout-sidebar-hover_mode', {
    defaultValue: false,
    initializeWithValue: false,
  });
  const sidebarBoxedMode = useLocalStorageValue('watchparty_settings-layout-sidebar-boxed_mode', {
    defaultValue: false,
    initializeWithValue: false,
  });
  const sidebarSheetMode = useLocalStorageValue('watchparty_settings-layout-sidebar-sheet_mode', {
    defaultValue: false,
    initializeWithValue: false,
  });
  const listViewType = useLocalStorageValue<'table' | 'card' | 'detail'>(
    'watchparty_settings-layout-list_view',
    {
      defaultValue: 'card',
      initializeWithValue: false,
    },
  );
  const listLoadingType = useLocalStorageValue('watchparty_settings-layout-list-loading_type', {
    defaultValue: 'pagination',
    initializeWithValue: false,
  });
  const autoSwitchSubtitle = useLocalStorageValue('watchparty_settings-subtitle-auto_switch', {
    defaultValue: true,
  });
  const isShowBreadcrumb = useLocalStorageValue(
    'watchparty_settings-layout-header-show_breadcrumb',
    {
      defaultValue: false,
      initializeWithValue: true,
    },
  );
  const isShowTopPagination = useLocalStorageValue(
    'watchparty_settings-layout-list-show-top-pagination',
    {
      defaultValue: false,
      initializeWithValue: false,
    },
  );
  const isLightDarkThemeOnly = useLocalStorageValue(
    'watchparty_settings-layout-theme-light_dark_only',
    {
      defaultValue: true,
    },
  );
  const currentThemeColor = useLocalStorageValue('watchparty_settings-layout-theme-color', {
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
