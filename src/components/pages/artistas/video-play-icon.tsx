interface VideoPlayIconProps {
  className?: string;
}

export function VideoPlayIcon(props: VideoPlayIconProps) {
  return (
    <svg className={props.className || 'h-8 w-8'} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}
