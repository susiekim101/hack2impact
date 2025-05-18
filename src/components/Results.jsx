import React, { useEffect, useState } from "react";
import getQuizOutput from "../utils/getQuizOutput";
import { useLocation } from "react-router-dom";

const tempImages = [
  "https://plus.unsplash.com/premium_photo-1670360414483-64e6d9ba9038?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1608556984739-26328c578559?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1670076513880-f58e3c377903?q=80&w=1436&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const captionKeys = ["interiorDesign", "colorPalette", "furnitureDesign"];

const Results = () => {
  /*extracting json*/
  const location = useLocation();
  const quizData = location.state?.quizData;
  console.log(quizData);

  const [summary, setSummary] = useState({ title: "", description: "" });
  //const [images, setImages] = useState([]);
  const [captions, setCaptions] = useState({});
  const [toInclude, setToInclude] = useState([]);
  const [toAvoid, setToAvoid] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchOutput = async () => {
      try {
        const result = await getQuizOutput(quizData);

        // Get the string inside result.descriptionSummary
        let rawJsonString = result.descriptionSummary || "";

        // Strip out code block markers like ```json\n and ```
        rawJsonString = rawJsonString
          .replace(/^```json\n/, "")
          .replace(/```$/, "")
          .trim();

        // Parse it into an actual object
        const parsed = JSON.parse(rawJsonString);

        setSummary({
          title: parsed.titleParagraph || "",
          description: parsed.descriptionSummary || "",
        });
        // setImages(parsed.images || []);
        setCaptions(parsed.imageCaptions || {});
        setToInclude(parsed.toInclude || []);
        setToAvoid(parsed.toAvoid || []);
      } catch (error) {
        console.error("Failed to load quiz output:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOutput();
  }, []);

  if (loading) return <div>Loading assessment...</div>;

  return (
    <div>
      <div>
        <h2>Your Design Personality</h2>
        <p>{summary.title}</p>
        <p>{summary.description}</p>
      </div>

      {/*temporary hardcoded images*/}
      <div>
        <h3>Design Inspirations</h3>
        {tempImages.map((url, index) => {
          const key = captionKeys[index];
          return (
            <div key={index}>
              <img src={url} alt={`Design ${key}`} />
              <p>{captions[key] || "Loading caption..."}</p>
            </div>
          );
        })}
      </div>

      {/*reimplement with tokens*/}
      {/*}
      <div>
        {images.map((image, index) => {
          const keys = ["interiorDesign", "colorPalette", "furnitureDesign"];
          const key = keys[index] || `image${index + 1}`;
          return (
            <div key={index}>
              <img src={image} alt={`Generated ${key}`} />
              <p>{captions[key]}</p>
            </div>
          );
        })}
        */}

      <div>
        <h3>Recommended Elements</h3>
        <ul>
          {toInclude.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>

        <h3>Things to Avoid</h3>
        <ul>
          {toAvoid.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Results;
