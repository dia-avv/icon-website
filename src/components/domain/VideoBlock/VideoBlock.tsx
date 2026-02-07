import YouTube from "react-youtube";
import styles from "./VideoBlock.module.css";

interface VideoBlockProps {
  title: string;
  youtubeId: string;
}

export default function VideoBlock({ title, youtubeId }: VideoBlockProps) {
  return (
    <div className={styles.videoBlock}>
      <h3>{title}</h3>
      <div className={styles.videoWrapper}>
        <YouTube
          videoId={youtubeId}
          opts={{
            width: "100%",
            height: "600",
            playerVars: {
              autoplay: 0,
            },
          }}
        />
      </div>
    </div>
  );
}
