const LogoIcon = ({ size }) => {
  return (
    <svg role="img" viewBox="0 0 16 16" height={size} width={size}>
      <path
        d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.669 11.539a.498.498 0 0 1-.686.166c-1.878-1.148-4.243-1.408-7.028-.772a.499.499 0 0 1-.222-.972c3.048-.696 5.662-.396 7.77.892a.5.5 0 0 1 .166.686zm.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.322-5.428-1.705-7.972-.932a.624.624 0 1 1-.362-1.194c2.905-.882 6.517-.455 8.987 1.063a.624.624 0 0 1 .205.858zm.084-2.269C10.153 5.561 5.9 5.42 3.438 6.167a.748.748 0 1 1-.434-1.432c2.826-.857 7.523-.692 10.492 1.07a.748.748 0 0 1-.764 1.287z"
        fill="currentColor"
      />
    </svg>
  );
};

const HomeIcon = ({ size }) => {
  return (
    <svg role="img" viewBox="0 0 24 24" height={size} width={size}>
      <path
        d="M12.5 3.247a1 1 0 00-1 0L4 7.577V20h4.5v-6a1 1 0 011-1h5a1 1 0 011 1v6H20V7.577l-7.5-4.33zm-2-1.732a3 3 0 013 0l7.5 4.33a2 2 0 011 1.732V21a1 1 0 01-1 1h-6.5a1 1 0 01-1-1v-6h-3v6a1 1 0 01-1 1H3a1 1 0 01-1-1V7.577a2 2 0 011-1.732l7.5-4.33z"
        fill="currentColor"
      />
    </svg>
  );
};

const SearchIcon = ({ size }) => {
  return (
    <svg role="img" viewBox="0 0 24 24" height={size} width={size}>
      <path
        d="M10.533 1.279c-5.18 0-9.407 4.14-9.407 9.279s4.226 9.279 9.407 9.279c2.234 0 4.29-.77 5.907-2.058l4.353 4.353a1 1 0 101.414-1.414l-4.344-4.344a9.157 9.157 0 002.077-5.816c0-5.14-4.226-9.28-9.407-9.28zm-7.407 9.279c0-4.006 3.302-7.28 7.407-7.28s7.407 3.274 7.407 7.28-3.302 7.279-7.407 7.279-7.407-3.273-7.407-7.28z"
        fill="currentColor"
      />
    </svg>
  );
};

const CollectionIcon = ({ size }) => {
  return (
    <svg role="img" viewBox="0 0 24 24" height={size} width={size}>
      <path
        d="M14.5 2.134a1 1 0 011 0l6 3.464a1 1 0 01.5.866V21a1 1 0 01-1 1h-6a1 1 0 01-1-1V3a1 1 0 01.5-.866zM16 4.732V20h4V7.041l-4-2.309zM3 22a1 1 0 01-1-1V3a1 1 0 012 0v18a1 1 0 01-1 1zm6 0a1 1 0 01-1-1V3a1 1 0 012 0v18a1 1 0 01-1 1z"
        fill="currentColor"
      />
    </svg>
  );
};

const PlusIcon = ({ size }) => {
  return (
    <svg role="img" viewBox="0 0 16 16" height={size} width={size}>
      <path d="M15.25 8a.75.75 0 01-.75.75H8.75v5.75a.75.75 0 01-1.5 0V8.75H1.5a.75.75 0 010-1.5h5.75V1.5a.75.75 0 011.5 0v5.75h5.75a.75.75 0 01.75.75z" fill="currentColor" />
    </svg>
  );
};

const HeartFilledIcon = ({ size }) => {
  return (
    <svg role="img" viewBox="0 0 16 16" height={size} width={size}>
      <path
        d="M15.724 4.22A4.313 4.313 0 0012.192.814a4.269 4.269 0 00-3.622 1.13.837.837 0 01-1.14 0 4.272 4.272 0 00-6.21 5.855l5.916 7.05a1.128 1.128 0 001.727 0l5.916-7.05a4.228 4.228 0 00.945-3.577z"
        fill="currentColor"
      />
    </svg>
  );
};

const DownloadIcon = ({ size }) => {
  return (
    <svg role="img" viewBox="0 0 24 24" height={size} width={size}>
      <path d="M12 3a9 9 0 100 18 9 9 0 000-18zM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12z" fill="currentColor" />
      <path d="M12 6.05a1 1 0 011 1v7.486l1.793-1.793a1 1 0 111.414 1.414L12 18.364l-4.207-4.207a1 1 0 111.414-1.414L11 14.536V7.05a1 1 0 011-1z" fill="currentColor" />
    </svg>
  );
};

const PrevIcon = ({ size }) => {
  return (
    <svg role="img" viewBox="0 0 24 24" height={size} width={size}>
      <path d="M15.957 2.793a1 1 0 010 1.414L8.164 12l7.793 7.793a1 1 0 11-1.414 1.414L5.336 12l9.207-9.207a1 1 0 011.414 0z" fill="currentColor" />
    </svg>
  );
};

const NextIcon = ({ size }) => {
  return (
    <svg role="img" viewBox="0 0 24 24" height={size} width={size}>
      <path d="M8.043 2.793a1 1 0 000 1.414L15.836 12l-7.793 7.793a1 1 0 101.414 1.414L18.664 12 9.457 2.793a1 1 0 00-1.414 0z" fill="currentColor" />
    </svg>
  );
};

const DownDirIcon = ({ size }) => {
  return (
    <svg role="img" height={size} width={size} viewBox="0 0 16 16">
      <path d="M14 6l-6 6-6-6h12z" fill="#fff" />
    </svg>
  );
};

const ExternalIcon = ({ size }) => {
  return (
    <svg role="img" height={size} width={size} viewBox="0 0 16 16">
      <path d="M1 2.75A.75.75 0 011.75 2H7v1.5H2.5v11h10.219V9h1.5v6.25a.75.75 0 01-.75.75H1.75a.75.75 0 01-.75-.75V2.75z" fill="#fff" />
      <path d="M15 1v4.993a.75.75 0 11-1.5 0V3.56L8.78 8.28a.75.75 0 01-1.06-1.06l4.72-4.72h-2.433a.75.75 0 010-1.5H15z" fill="#fff" />
    </svg>
  );
};

const PlayIcon = ({ size }) => {
  return (
    <svg role="img" height={size} width={size} viewBox="0 0 24 24">
      <path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z" fill="currentColor" />
    </svg>
  );
};

const PauseIcon = ({ size }) => {
  return (
    <svg role="img" height={size} width={size} viewBox="0 0 16 16">
      <path
        d="M2.7 1a.7.7 0 00-.7.7v12.6a.7.7 0 00.7.7h2.6a.7.7 0 00.7-.7V1.7a.7.7 0 00-.7-.7H2.7zm8 0a.7.7 0 00-.7.7v12.6a.7.7 0 00.7.7h2.6a.7.7 0 00.7-.7V1.7a.7.7 0 00-.7-.7h-2.6z"
        fill="currentColor"
      />
    </svg>
  );
};

const HeartIcon = ({ size }) => {
  return (
    <svg role="img" height={size} width={size} viewBox="0 0 16 16">
      <path
        d="M1.69 2A4.582 4.582 0 018 2.023 4.583 4.583 0 0111.88.817h.002a4.618 4.618 0 013.782 3.65v.003a4.543 4.543 0 01-1.011 3.84L9.35 14.629a1.765 1.765 0 01-2.093.464 1.762 1.762 0 01-.605-.463L1.348 8.309A4.582 4.582 0 011.689 2zm3.158.252A3.082 3.082 0 002.49 7.337l.005.005L7.8 13.664a.264.264 0 00.311.069.262.262 0 00.09-.069l5.312-6.33a3.043 3.043 0 00.68-2.573 3.118 3.118 0 00-2.551-2.463 3.079 3.079 0 00-2.612.816l-.007.007a1.501 1.501 0 01-2.045 0l-.009-.008a3.082 3.082 0 00-2.121-.861z"
        fill="currentColor"
      />
    </svg>
  );
};

const OutIcon = ({ size }) => {
  return (
    <svg role="img" height={size} width={size} viewBox="0 0 16 16">
      <path d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8z" fill="currentColor" />
      <path d="M12 8.75H4v-1.5h8v1.5z" />
    </svg>
  );
};

const PictureInPictureIcon = ({ size }) => {
  return (
    <svg role="img" height={size} width={size} viewBox="0 0 16 16">
      <g fill="currentColor" fillRule="evenodd">
        <path d="M1 3v9h14V3H1zm0-1h14a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z" fillRule="nonzero" />
        <path d="M10 8h4v3h-4z" />
      </g>
    </svg>
  );
};

const ShuffleIcon = ({ size }) => {
  return (
    <svg role="img" height={size} width={size} viewBox="0 0 16 16">
      <path
        d="M13.151.922a.75.75 0 10-1.06 1.06L13.109 3H11.16a3.75 3.75 0 00-2.873 1.34l-6.173 7.356A2.25 2.25 0 01.39 12.5H0V14h.391a3.75 3.75 0 002.873-1.34l6.173-7.356a2.25 2.25 0 011.724-.804h1.947l-1.017 1.018a.75.75 0 001.06 1.06L15.98 3.75 13.15.922zM.391 3.5H0V2h.391c1.109 0 2.16.49 2.873 1.34L4.89 5.277l-.979 1.167-1.796-2.14A2.25 2.25 0 00.39 3.5z"
        fill="currentColor"
      />
      <path
        d="M7.5 10.723l.98-1.167.957 1.14a2.25 2.25 0 001.724.804h1.947l-1.017-1.018a.75.75 0 111.06-1.06l2.829 2.828-2.829 2.828a.75.75 0 11-1.06-1.06L13.109 13H11.16a3.75 3.75 0 01-2.873-1.34l-.787-.938z"
        fill="currentColor"
      />
    </svg>
  );
};

const PlayerPrevIcon = ({ size }) => {
  return (
    <svg role="img" height={size} width={size} viewBox="0 0 16 16">
      <path d="M3.3 1a.7.7 0 01.7.7v5.15l9.95-5.744a.7.7 0 011.05.606v12.575a.7.7 0 01-1.05.607L4 9.149V14.3a.7.7 0 01-.7.7H1.7a.7.7 0 01-.7-.7V1.7a.7.7 0 01.7-.7h1.6z" fill="currentColor" />
    </svg>
  );
};

const PlayerNextIcon = ({ size }) => {
  return (
    <svg role="img" height={size} width={size} viewBox="0 0 16 16">
      <path d="M12.7 1a.7.7 0 00-.7.7v5.15L2.05 1.107A.7.7 0 001 1.712v12.575a.7.7 0 001.05.607L12 9.149V14.3a.7.7 0 00.7.7h1.6a.7.7 0 00.7-.7V1.7a.7.7 0 00-.7-.7h-1.6z" fill="currentColor" />
    </svg>
  );
};

const RepeatIcon = ({ size }) => {
  return (
    <svg role="img" height={size} width={size} viewBox="0 0 16 16">
      <path
        d="M0 4.75A3.75 3.75 0 013.75 1h8.5A3.75 3.75 0 0116 4.75v5a3.75 3.75 0 01-3.75 3.75H9.81l1.018 1.018a.75.75 0 11-1.06 1.06L6.939 12.75l2.829-2.828a.75.75 0 111.06 1.06L9.811 12h2.439a2.25 2.25 0 002.25-2.25v-5a2.25 2.25 0 00-2.25-2.25h-8.5A2.25 2.25 0 001.5 4.75v5A2.25 2.25 0 003.75 12H5v1.5H3.75A3.75 3.75 0 010 9.75v-5z"
        fill="currentColor"
      />
    </svg>
  );
};

const LyricsIcon = ({ size }) => {
  return (
    <svg role="img" height={size} width={size} viewBox="0 0 16 16">
      <path
        d="M13.426 2.574a2.831 2.831 0 00-4.797 1.55l3.247 3.247a2.831 2.831 0 001.55-4.797zM10.5 8.118l-2.619-2.62A63303.13 63303.13 0 004.74 9.075L2.065 12.12a1.287 1.287 0 001.816 1.816l3.06-2.688 3.56-3.129zM7.12 4.094a4.331 4.331 0 114.786 4.786l-3.974 3.493-3.06 2.689a2.787 2.787 0 01-3.933-3.933l2.676-3.045 3.505-3.99z"
        fill="currentColor"
      />
    </svg>
  );
};

const QueueIcon = ({ size }) => {
  return (
    <svg role="img" height={size} width={size} viewBox="0 0 16 16">
      <path d="M15 15H1v-1.5h14V15zm0-4.5H1V9h14v1.5zm-14-7A2.5 2.5 0 013.5 1h9a2.5 2.5 0 010 5h-9A2.5 2.5 0 011 3.5zm2.5-1a1 1 0 000 2h9a1 1 0 100-2h-9z" fill="currentColor" />
    </svg>
  );
};

const DeviceIcon = ({ size }) => {
  return (
    <svg role="img" height={size} width={size} viewBox="0 0 16 16">
      <path
        d="M6 2.75C6 1.784 6.784 1 7.75 1h6.5c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0114.25 15h-6.5A1.75 1.75 0 016 13.25V2.75zm1.75-.25a.25.25 0 00-.25.25v10.5c0 .138.112.25.25.25h6.5a.25.25 0 00.25-.25V2.75a.25.25 0 00-.25-.25h-6.5zm-6 0a.25.25 0 00-.25.25v6.5c0 .138.112.25.25.25H4V11H1.75A1.75 1.75 0 010 9.25v-6.5C0 1.784.784 1 1.75 1H4v1.5H1.75zM4 15H2v-1.5h2V15z"
        fill="currentColor"
      />
      <path d="M13 10a2 2 0 11-4 0 2 2 0 014 0zm-1-5a1 1 0 11-2 0 1 1 0 012 0z" fill="currentColor" />
    </svg>
  );
};

const VolumeMutedIcon = ({ size }) => {
  return (
    <svg role="img" height={size} width={size} viewBox="0 0 16 16">
      <path
        d="M13.86 5.47a.75.75 0 00-1.061 0l-1.47 1.47-1.47-1.47A.75.75 0 008.8 6.53L10.269 8l-1.47 1.47a.75.75 0 101.06 1.06l1.47-1.47 1.47 1.47a.75.75 0 001.06-1.06L12.39 8l1.47-1.47a.75.75 0 000-1.06z"
        fill="currentColor"
      />
      <path
        d="M10.116 1.5A.75.75 0 008.991.85l-6.925 4a3.642 3.642 0 00-1.33 4.967 3.639 3.639 0 001.33 1.332l6.925 4a.75.75 0 001.125-.649v-1.906a4.73 4.73 0 01-1.5-.694v1.3L2.817 9.852a2.141 2.141 0 01-.781-2.92c.187-.324.456-.594.78-.782l5.8-3.35v1.3c.45-.313.956-.55 1.5-.694V1.5z"
        fill="currentColor"
      />
    </svg>
  );
};

const VolumeLowIcon = ({ size }) => {
  return (
    <svg role="img" height={size} width={size} viewBox="0 0 16 16">
      <path
        d="M9.741.85a.75.75 0 01.375.65v13a.75.75 0 01-1.125.65l-6.925-4a3.642 3.642 0 01-1.33-4.967 3.639 3.639 0 011.33-1.332l6.925-4a.75.75 0 01.75 0zm-6.924 5.3a2.139 2.139 0 000 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 010 4.88z"
        fill="currentColor"
      />
    </svg>
  );
};

const VolumeMediumIcon = ({ size }) => {
  return (
    <svg role="img" height={size} width={size} viewBox="0 0 16 16">
      <path
        d="M9.741.85a.75.75 0 01.375.65v13a.75.75 0 01-1.125.65l-6.925-4a3.642 3.642 0 01-1.33-4.967 3.639 3.639 0 011.33-1.332l6.925-4a.75.75 0 01.75 0zm-6.924 5.3a2.139 2.139 0 000 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 6.087a4.502 4.502 0 000-8.474v1.65a2.999 2.999 0 010 5.175v1.649z"
        fill="currentColor"
      />
    </svg>
  );
};

const VolumeHighIcon = ({ size }) => {
  return (
    <svg role="img" height={size} width={size} viewBox="0 0 16 16">
      <path
        d="M9.741.85a.75.75 0 01.375.65v13a.75.75 0 01-1.125.65l-6.925-4a3.642 3.642 0 01-1.33-4.967 3.639 3.639 0 011.33-1.332l6.925-4a.75.75 0 01.75 0zm-6.924 5.3a2.139 2.139 0 000 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 010 4.88z"
        fill="currentColor"
      />
      <path d="M11.5 13.614a5.752 5.752 0 000-11.228v1.55a4.252 4.252 0 010 8.127v1.55z" fill="currentColor" />
    </svg>
  );
};

const FullScreenIcon = ({ size }) => {
  return (
    <svg role="img" height={size} width={size} viewBox="0 0 16 16">
      <path
        d="M6.53 9.47a.75.75 0 010 1.06l-2.72 2.72h1.018a.75.75 0 010 1.5H1.25v-3.579a.75.75 0 011.5 0v1.018l2.72-2.72a.75.75 0 011.06 0zm2.94-2.94a.75.75 0 010-1.06l2.72-2.72h-1.018a.75.75 0 110-1.5h3.578v3.579a.75.75 0 01-1.5 0V3.81l-2.72 2.72a.75.75 0 01-1.06 0z"
        fill="currentColor"
      />
    </svg>
  );
};

const FullScreenOffIcon = ({ size }) => {
  return (
    <svg role="img" height={size} width={size} viewBox="0 0 24 24">
      <path
        d="M21.707 2.293a1 1 0 010 1.414L17.414 8h1.829a1 1 0 010 2H14V4.757a1 1 0 112 0v1.829l4.293-4.293a1 1 0 011.414 0zM2.293 21.707a1 1 0 010-1.414L6.586 16H4.757a1 1 0 010-2H10v5.243a1 1 0 01-2 0v-1.829l-4.293 4.293a1 1 0 01-1.414 0z"
        fill="currentColor"
      />
    </svg>
  );
};

const ArrowUpIcon = ({ size }) => {
  return (
    <svg role="img" height={size} width={size} viewBox="0 0 16 16">
      <path d="M.47 11.03a.75.75 0 001.06 0L8 4.56l6.47 6.47a.75.75 0 101.06-1.06L8 2.44.47 9.97a.75.75 0 000 1.06z" fill="currentColor" />
    </svg>
  );
};

const Icon = ({ name, size = 24 }) => {
  const icons = {
    logo: LogoIcon,
    home: HomeIcon,
    search: SearchIcon,
    collection: CollectionIcon,
    plus: PlusIcon,
    heartFilled: HeartFilledIcon,
    download: DownloadIcon,
    prev: PrevIcon,
    next: NextIcon,
    downDir: DownDirIcon,
    external: ExternalIcon,
    play: PlayIcon,
    pause: PauseIcon,
    heart: HeartIcon,
    out: OutIcon,
    pictureInPicture: PictureInPictureIcon,
    shuffle: ShuffleIcon,
    playerPrev: PlayerPrevIcon,
    playerNext: PlayerNextIcon,
    repeat: RepeatIcon,
    lyrics: LyricsIcon,
    queue: QueueIcon,
    device: DeviceIcon,
    volumeMuted: VolumeMutedIcon,
    volumeLow: VolumeLowIcon,
    volumeMedium: VolumeMediumIcon,
    volumeHigh: VolumeHighIcon,
    fullScreen: FullScreenIcon,
    fullScreenOff: FullScreenOffIcon,
    arrowUp: ArrowUpIcon,
  };

  const Component = icons[name];
  return <Component size={size} />;
};

export { Icon };
