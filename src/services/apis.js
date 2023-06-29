import axios from "axios";

const uri = "https://chat-api.goom.ai";

export const uploadFileService = async (file) => {
  try {
    const formData = new FormData();
    formData.append("file", file);
    const res = await axios.post(`${uri}/upload`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    console.log(res.data);
    return res;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getSummaryService = async (file_id) => {
  try {
    const res = await axios.post(
      `${uri}/summary`,
      { file_id },
      {
        Headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(res.data);
    return res;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const chatService = async (question, file_id) => {
  try {
    const res = await axios.post(
      `${uri}/chat`,
      { file_id, question },
      {
        Headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(res.data);
    return res;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
