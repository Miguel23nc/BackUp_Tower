import axios from "axios";

const documentoCloudinary = async (file) => {
  try {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "TOWERANDTOWER");

    const response = await axios.post(
      `https://api.cloudinary.com/v1_1/ddci9jvnh/raw/upload`,
      formData
    );
    const url = response.data.secure_url;
    return url;
  } catch (error) {
    throw new Error("Error al subir el documento");
  }
};

export default documentoCloudinary;
