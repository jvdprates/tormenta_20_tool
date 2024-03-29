import mongoose from "mongoose";
import { energyTypes } from "../utils/constants";

const GodSchema = new mongoose.Schema(
  {
    //Nome do Deus
    name: {
      type: String,
      required: true,
    },
    //Descrição do Deus
    description: String,
    //Porfolio do Deus
    portfolio: [String],
    //Obrigações e Restrições do Deus
    obligations: String,
    //Crenças e Objetivos do Deus
    creeds: String,
    //Armas preferidas do Deus
    favoriteWeapon: {
      type: String,
      default: "NONE",
    },
    //Símbolo sagrado do Deus
    holySymbol: String,
    //Tipo de energia do Deus
    energyType: {
      type: String,
      enum: energyTypes,
    },
    //Classes permitidas do Deus
    approvedClassIds: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "classes",
      },
    ],
    //Raças permitidas do Deus
    approvedRaceIds: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "races",
      },
    ],
    //Poderes concedidos do Deus
    grantedPowerIds: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "abilities",
      },
    ],
  },
  { timestamps: false, versionKey: false }
);

const GodModel = mongoose.model("gods", GodSchema);

export default GodModel;
