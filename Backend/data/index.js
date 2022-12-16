import mongoose from "mongoose";

const userIds = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
];

export const users = [
  {
    _id: userIds[0],
    Nombre: "Daniel",
    Apellido: "Sanchez",
    email: "daniel27@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    imagenes: "ichigo.jpg",
    friends: [],
    createdAt: 1115211422,
    updatedAt: 1115211422,
    __v: 0,
  },
  {
    _id: userIds[1],
    Nombre: "Steve",
    Apellido: "Ralph",
    email: "steve17@gmail.com",
    password: "$!FEAS@!O)_IDJda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    imagenes: "toshiro.jpg",
    friends: [],
    createdAt: 1595589072,
    updatedAt: 1595589072,
    __v: 0,
  },
  {
    _id: userIds[2],
    Nombre: "Juan",
    Apellido: "Castro",
    email: "juanc10@gmail.com",
    password: "da39a3ee5e6b4b0d3255bfef95601890afd80709",
    imagenes: "hollow.jpg",
    friends: [],
    createdAt: 1288090662,
    updatedAt: 1288090662,
    __v: 0,
  },
];


export const posts = [
  {
    _id: new mongoose.Types.ObjectId(),
    userID: userIds[1],
    Nombre: "Steve",
    Apellido: "Ralph",
    description: "Some really long random description",
    imagenes: "ukitake.png",
    userImagenes: "toshiro.jpg",
    likes: new Map([
      [userIds[0], true],
      [userIds[2], true],

    ]),
    comments: [
      "comentario 1",
      "comentario 2",
      "comentario 3",
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userID: userIds[0],
    Nombre: "Daniel",
    Apellido: "Sanchez",
    description:
      "Another really long random description. This one is longer than the previous one.",
    picturePath: "ichiGOD.jpg",
    userImagenes: "ichigo.jpg",
    likes: new Map([
      [userIds[1], true],
      [userIds[2], true],
    ]),
    comments: [
        "comentario 4",
        "comentario 5",
        "comentario 6",
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userID: userIds[2],
    Nombre: "Juan",
    Apellido: "Castro",
    description:
      "This is the last really long random description. This one is longer than the previous one.",
    picturePath: "grimmjow.jpg",
    userImagenes: "hollow.jpg",
    likes: new Map([
      [userIds[0], true],
      [userIds[1], true],
    ]),
    comments: [
        "comentario 7",
        "comentario 8",
        "comentario 9",
    ],
  },
];