import mongoose from "mongoose";

export const dbConnection = async () => {
  try {
    mongoose.connect(process.env.MONGODB_ATLAS);

    console.log("Base de datos online ....");
  } catch (error) {
    console.log(error);
    throw new Error("Hubo un error en la Base de datos");
  }
};
