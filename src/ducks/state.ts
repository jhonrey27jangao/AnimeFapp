export let initialState = {};

const initialStateLocal = {
  accounts: [
    {
      userId: "b2e6d6e6-1cd2-480a-b482-4d499acc5062",
      isLogged: false,
      emailOrNumber: "zeroTwo@gmail.com",
      password: "12345678",
      firstName: "Zero",
      middleName: "",
      lastName: "Two",
      description: "A simple Woman inside of a Man",
      address: "New York Cainta",
      profileImg:
        "https://i.pinimg.com/564x/95/99/30/9599300de76fd2f5cd62b9517ae42f86.jpg",
      followers: [
        {
          userId: "1",
        },
      ],
      following: [],
      savedPost: [],
    },
    {
      userId: "dbb49617-b347-4385-8082-5c4946a4ac8e",
      isLogged: false,
      emailOrNumber: "violet01@yahoo.com",
      password: "12345678",
      firstName: "Violet",
      middleName: "O.",
      lastName: "Evergarden",
      description: "Auto Memoir Doll",
      profileImg:
        "https://i.pinimg.com/564x/8b/89/f4/8b89f45594f38964b2e0ec4bcf4de3cf.jpg",
      followers: [
        {
          userId: "0",
        },
      ],
      following: [],
      savedPost: [],
    },
    {
      userId: "0d58b6ef-3881-4c89-94b8-a558e818ed17",
      isLogged: false,
      emailOrNumber: "senpai01@yahoo.com",
      password: "12345678",
      firstName: "Senpai",
      middleName: "O.",
      lastName: "Sorry Masen",
      description: "Chotto matte sandali lang",
      profileImg:
        "https://i.pinimg.com/564x/1a/27/95/1a2795ecabbe500e3292bdeeb2014e76.jpg",
      followers: [
        {
          userId: "0",
        },
      ],
      following: [],
      savedPost: [],
    },
    {
      userId: "0fefb03e-1eb6-451d-9e4d-9c0c8b0623ea",
      isLogged: false,
      emailOrNumber: "senpai02@yahoo.com",
      password: "12345678",
      firstName: "Sasuga",
      middleName: "O.",
      lastName: "Keichou",
      description: "Fuck off",
      profileImg:
        "https://i.pinimg.com/564x/6e/94/64/6e94646f277ee32ba700f8f67509f78b.jpg",
      followers: [
        {
          userId: "0",
        },
      ],
      following: [],
      savedPost: [],
    },
    {
      userId: "38e0145a-28cc-470b-84a9-ad6ad83114f7",
      isLogged: false,
      emailOrNumber: "mikasaackerman@yahoo.com",
      password: "12345678",
      firstName: "Mikasa",
      middleName: "O.",
      lastName: "Ackerman",
      description: "Fuck me eren",
      profileImg:
        "https://i.pinimg.com/564x/07/19/f2/0719f234ff5b68ed88972324962a2117.jpg",
      followers: [
        {
          userId: "0",
        },
      ],
      following: [],
      savedPost: [],
    },
    {
      userId: "6d8055cd-1f99-4b9c-be73-bae0a13d128a",
      isLogged: false,
      emailOrNumber: "hinatahyuga@yahoo.com",
      password: "12345678",
      firstName: "Hinata",
      middleName: "O.",
      lastName: "Hyuga",
      description: "Naruto-kun",
      profileImg:
        "https://i.pinimg.com/236x/7a/ab/3a/7aab3a7f13c13e7f0ae7397317ef082a.jpg",
      followers: [],
      following: [],
      savedPost: [],
    },
  ],
  posts: [
    {
      userId: "b2e6d6e6-1cd2-480a-b482-4d499acc5062",
      postId: "0",
      postName: "Nicco nico niii",
      postDescription:
        "get at https://www.pinterest.ca/pin/677651075163699481/",
      postImage:
        "https://i.pinimg.com/564x/ad/91/07/ad9107a3ccdc6b3ae8ea1286e4518dad.jpg",
      comments: [
        {
          commentId: "asadsadsad",
          userId: "dbb49617-b347-4385-8082-5c4946a4ac8e",
          comment: "Nice!",
        },
      ],
      faps: [
        {
          userId: "dbb49617-b347-4385-8082-5c4946a4ac8e",
        },
      ],
      reported: [],
    },
    {
      userId: "dbb49617-b347-4385-8082-5c4946a4ac8e",
      postId: "1",
      postName: "Haruno Sakura",
      postDescription: "Noob, Useless and spectator",
      postImage:
        "https://i.pinimg.com/564x/57/25/54/5725540489fc9e37447ceeebe464dbe8.jpg",
      comments: [
        {
          commentId: "s92ksc-sade-asd",
          userId: "6d8055cd-1f99-4b9c-be73-bae0a13d128a",
          comment: "Noob as fuck",
        },
        {
          commentId: "s92ksc-sade-asasdasdsdsd",
          userId: "dbb49617-b347-4385-8082-5c4946a4ac8e",
          comment: "Nice!",
        },
      ],
      faps: [
        {
          userId: "dbb49617-b347-4385-8082-5c4946a4ac8e",
        },
      ],
      reported: [],
    },
    {
      userId: "b2e6d6e6-1cd2-480a-b482-4d499acc5062",
      postId: "2",
      postName: "Taiga Aisaka",
      postDescription: "Palmtop Tiger",
      postImage:
        "https://i.pinimg.com/564x/61/c5/fc/61c5fc32a13e5a6e6ad18ea95a2d5535.jpg",
      comments: [
        {
          commentId: "s92kscssdadsadsade-assd",
          userId: "6d8055cd-1f99-4b9c-be73-bae0a13d128a",
          comment: "Noob as fuck",
        },
        {
          commentId: "s92ssssssssksc-sade-assd",
          userId: "dbb49617-b347-4385-8082-5c4946a4ac8e",
          comment: "Nice!",
        },
      ],
      faps: [
        {
          userId: "dbb49617-b347-4385-8082-5c4946a4ac8e",
        },
      ],
      reported: [],
    },
    {
      userId: "dbb49617-b347-4385-8082-5c4946a4ac8e",
      postId: "3",
      postName: "Mai Sakurajima",
      postDescription: "Bunny girl.",
      postImage:
        "https://i.pinimg.com/564x/e1/9c/e9/e19ce90d895ae2384f29a1bc356e7505.jpg",
      comments: [
        {
          commentId: "s92ksc-sadesdsadsad-assdsadsadasd",
          userId: "6d8055cd-1f99-4b9c-be73-bae0a13d128a",
          comment: "Noob as fuck",
        },
        {
          commentId: "s92ksc-sade-aaassdadasd-dfsdfssd",
          userId: "dbb49617-b347-4385-8082-5c4946a4ac8e",
          comment: "Nice!",
        },
      ],
      faps: [
        {
          userId: "dbb49617-b347-4385-8082-5c4946a4ac8e",
        },
      ],
      reported: [],
    },
    {
      userId: "b2e6d6e6-1cd2-480a-b482-4d499acc5062",
      postId: "4",
      postName: "Nao Tomori",
      postDescription: "Tried this Pin?Add a photo to show how it went",
      postImage:
        "https://i.pinimg.com/564x/2f/36/c3/2f36c3e2e9c42505e3101cb5945c52e9.jpg",
      comments: [
        {
          commentId: "123s",
          userId: "6d8055cd-1f99-4b9c-be73-bae0a13d128a",
          comment: "Noob as fuck",
        },
      ],
      faps: [
        {
          userId: "dbb49617-b347-4385-8082-5c4946a4ac8e",
        },
      ],
      reported: [],
    },
    {
      userId: "0d58b6ef-3881-4c89-94b8-a558e818ed17",
      postId: "5",
      postName: "Kamado Nezuko",
      postDescription: "Baby Girl Demon",
      postImage:
        "https://i.pinimg.com/564x/f5/01/8e/f5018e7e3474724766771e286a5a9968.jpg",
      comments: [
        {
          commentId: "sdasdas22zsd",
          userId: "6d8055cd-1f99-4b9c-be73-bae0a13d128a",
          comment: "Noob as fuck",
        },
      ],
      faps: [
        {
          userId: "dbb49617-b347-4385-8082-5c4946a4ac8e",
        },
      ],
      reported: [],
    },
    {
      userId: "0fefb03e-1eb6-451d-9e4d-9c0c8b0623ea",
      postId: "6",
      postName: "Jabami Yumeko",
      postDescription: "Addicted to gamble",
      postImage:
        "https://i.pinimg.com/564x/b1/e0/43/b1e0437309a36a5294709921dc0378f4.jpg",
      comments: [
        {
          commentId: "sjashb23424",
          userId: "6d8055cd-1f99-4b9c-be73-bae0a13d128a",
          comment: "Noob as fuck",
        },
      ],
      faps: [
        {
          userId: "dbb49617-b347-4385-8082-5c4946a4ac8e",
        },
      ],
      reported: [],
    },
    {
      userId: "0d58b6ef-3881-4c89-94b8-a558e818ed17",
      postId: "7",
      postName: "Sistaah",
      postDescription: "Latom Fappmates",
      postImage:
        "https://i.pinimg.com/564x/5e/44/74/5e44745c16091e8ac54b505a0f60855c.jpg",
      comments: [
        {
          commentId: "asdsa823masd",
          userId: "dbb49617-b347-4385-8082-5c4946a4ac8e",
          comment: "Nice!",
        },
      ],
      faps: [
        {
          userId: "dbb49617-b347-4385-8082-5c4946a4ac8e",
        },
      ],
      reported: [],
    },
    {
      userId: "0fefb03e-1eb6-451d-9e4d-9c0c8b0623ea",
      postId: "8",
      postName: "Rem",
      postDescription: "asdsda",
      postImage:
        "https://i.pinimg.com/564x/8c/7b/73/8c7b73a1e5d0b9ff620674137ab3f9bd.jpg",
      comments: [
        {
          commentId: "sadasd2321321",
          userId: "dbb49617-b347-4385-8082-5c4946a4ac8e",
          comment: "Nice!",
        },
      ],
      faps: [
        {
          userId: "dbb49617-b347-4385-8082-5c4946a4ac8e",
        },
      ],
      reported: [],
    },
  ],
  errors: {
    signUp: "",
  },
};

const initialStateStorage = localStorage.getItem("SocialMediaState");
if (initialStateStorage !== null) {
  initialState = initialState = JSON.parse(initialStateStorage);
} else {
  initialState = initialStateLocal;
}
