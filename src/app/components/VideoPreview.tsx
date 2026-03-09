import { useState, useEffect } from "react";
import { Video, VideoOff } from "lucide-react";
// import { ImageWithFallback } from "./FallBack/ImageWithFallback";

interface Face {
  id: number;
  x: number;
  y: number;
  width: number;
  height: number;
  emotion: string;
  attention: number;
}

interface VideoPreviewProps {
  isLive: boolean;
}

export function VideoPreview({ isLive }: VideoPreviewProps) {
  const [faces, setFaces] = useState<Face[]>([]);

  // Simulate face detection
  useEffect(() => {
    if (!isLive) {
      setFaces([]);
      return;
    }

    const updateFaces = () => {
      const numFaces = Math.floor(Math.random() * 3) + 3;
      const newFaces: Face[] = [];

      for (let i = 0; i < numFaces; i++) {
        newFaces.push({
          id: i,
          x: Math.random() * 70 + 5,
          y: Math.random() * 70 + 5,
          width: Math.random() * 10 + 12,
          height: Math.random() * 13 + 15,
          emotion: ["attentive", "neutral", "confused"][
            Math.floor(Math.random() * 3)
          ],
          attention: Math.random() * 40 + 60,
        });
      }

      setFaces(newFaces);
    };

    updateFaces();
    const interval = setInterval(updateFaces, 2000);

    return () => clearInterval(interval);
  }, [isLive]);

  const getBoxColor = (emotion: string) => {
    switch (emotion) {
      case "attentive":
        return "border-green-500";
      case "confused":
        return "border-red-500";
      default:
        return "border-yellow-500";
    }
  };

  return (
    <div className="bg-white rounded-lg p-6 border border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg text-gray-900 flex items-center gap-2">
          {isLive ? (
            <Video className="w-5 h-5 text-blue-600" />
          ) : (
            <VideoOff className="w-5 h-5 text-gray-400" />
          )}
          Live Classroom Feed
        </h3>
        {isLive && (
          <span className="text-xs text-gray-500">
            {faces.length} faces detected
          </span>
        )}
      </div>

      <div className="relative bg-gray-900 rounded-lg overflow-hidden aspect-video">
        {isLive ? (
          <>
            {/* <ImageWithFallback */}
              src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=1200&q=80"
              alt="Classroom feed"
              className="w-full h-full object-cover opacity-70"
            {/* /> */}
            {/* Face detection overlays */}
            {faces.map((face) => (
              <div
                key={face.id}
                className={`absolute border-2 ${getBoxColor(
                  face.emotion
                )} transition-all duration-300`}
                style={{
                  left: `${face.x}%`,
                  top: `${face.y}%`,
                  width: `${face.width}%`,
                  height: `${face.height}%`,
                }}
              >
                <div className="absolute -top-6 left-0 bg-black/70 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                  {face.emotion} ({Math.round(face.attention)}%)
                </div>
              </div>
            ))}
          </>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-gray-400">
              <VideoOff className="w-16 h-16 mx-auto mb-3" />
              <p>Camera feed offline</p>
              <p className="text-sm mt-1">Start recording to view live feed</p>
            </div>
          </div>
        )}
      </div>

      {isLive && (
        <div className="mt-3 flex items-center gap-4 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 border-2 border-green-500" />
            <span className="text-gray-600">Attentive</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 border-2 border-yellow-500" />
            <span className="text-gray-600">Neutral</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 border-2 border-red-500" />
            <span className="text-gray-600">Confused</span>
          </div>
        </div>
      )}
    </div>
  );
}
