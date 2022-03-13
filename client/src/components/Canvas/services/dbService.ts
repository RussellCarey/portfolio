import axios from "axios";

export const getDrawingData = async () => {
  const req = await axios.request({
    method: "GET",
    url: "http://localhost:9743/api/drawing/getData",
  });

  return req;
};

export const uploadDrawing = async (drawingString: string) => {
  const req = await axios.request({
    method: "POST",
    url: "http://localhost:9743/api/drawing/uploadData",
    data: {
      drawing: drawingString,
    },
  });
  console.log(req);
  return req;
};
