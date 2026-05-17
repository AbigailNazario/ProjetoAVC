export function VideoPlayer({ src, title }: { src: string; title: string }) {
  const isLocal = src.startsWith("/") || src.endsWith(".mp4") || src.endsWith(".webm");

  return (
    <div className="overflow-hidden rounded-2xl border-2 border-border bg-card shadow-sm">
      <div className="aspect-video w-full">
        {isLocal ? (
          <video
            src={src}
            title={title}
            controls
            className="h-full w-full object-cover"
          />
        ) : (
          <iframe
            src={src}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="h-full w-full"
          />
        )}
      </div>
    </div>
  );
}