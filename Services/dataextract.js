import { createWorker } from "tesseract.js";
const recognizeText = async (image) => {
  const worker = await createWorker('eng');
  const result = await worker.recognize(image);
  worker.terminate;
  return result
};
export default recognizeText