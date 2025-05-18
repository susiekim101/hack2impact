import React, { useEffect, useState } from "react";
import getQuizOutput from "../utils/getQuizOutput";

const sampleQuizResult = {
  name: "Alice",
  sensoryTriggers: ["bright lights", "loud noises"],
  colorPreferences: ["soft blues", "earth tones"],
  lifestyleNeeds: ["calm workspace", "natural light"],
};

const ImageGallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchImages() {
      try {
        const result = await getQuizOutput(sampleQuizResult);
        setImages(result.images); // images is an array of base64 strings (or data URLs)
      } catch (error) {
        console.error("Error fetching images:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchImages();
  }, []);

  if (loading) return <div>Loading images...</div>;

  return (
    <div>
      {images.map((imageSrc, index) => (
        <img
          key={index}
          src={imageSrc} // Assuming these are base64 strings with the `data:image/...` prefix
          alt={`Design image ${index + 1}`}
          style={{ width: 200, margin: 10 }}
        />
      ))}
    </div>
  );
};

export default ImageGallery;
