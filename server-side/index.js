const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const port = process.env.PORT || 5000;
const app = express();

//Middleware:
const corsOptions = {
  origin: [
    "http://localhost:5173",
    "https://volunteer-management-sys-66dad.web.app",
  ],
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

const cookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
};

//verify My token :
const verifyToken = (req, res, next) => {
  const token = req.cookies?.token;
  if (!token) return res.status(401).send({ message: "unauthorized access" });
  if (token) {
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
      if (err) {
        console.log(err);
        return res.status(401).send({ message: "Unauthorized access" });
      }
      req.user = decoded;
      next();
    });
  }
};

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.s1tjtzs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    const volunteersCollection = client
      .db("VolunteerManagementSystem")
      .collection("volunteersList");
    const volunteersRequestCollection = client
      .db("VolunteerManagementSystem")
      .collection("requestVolunteersList");

    //creating Json WebToken:
    app.post("/jwt", async (req, res) => {
      const user = req.body;
      const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "7d",
      });
      res.cookie("token", token, cookieOptions).send({ success: true });
    });

    //clear token :
    // app.get("/logout", (req, res) => {
    //   res
    //     .clearCookie("token", {
    //       httpOnly: true,
    //       secure: process.env.NODE_ENV === "production",
    //       sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
    //       maxAge: 0,
    //     })
    //     .send({ success: true });
    // });

    app.get("/logout", (req, res) => {
      res.cookie("token", "", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
        maxAge: 0,
      });

      res.status(200).send({ success: true });
    });

    ///clear cookies
    app.post("/logout", async (req, res) => {
      const user = req.body;
      console.log("logging out", user);
      res
        .clearCookie("token", { ...cookieOptions, maxAge: 0 })
        .send({ success: true });
    });

    //get all volunteers Post(Home Page):
    app.get("/volunteers", async (req, res) => {
      const result = await volunteersCollection
        .find()
        .sort({ deadline: 1 })
        .limit(6)
        .toArray();
      res.send(result);
    });

    //get all volunteers for Need Volunteers Page:
    app.get("/need-volunteers", async (req, res) => {
      const search = req.query.search;
      const searchString = String(search);
      let query = {
        post_title: { $regex: searchString, $options: "i" },
      };
      let options = {};
      // const result = await volunteersCollection.find(query,options).toArray();
      const result = await volunteersCollection.find(query, options).toArray();
      res.send(result);
    });

    //Posting new volunteer Post:
    app.post("/add-volunteer-post", async (req, res) => {
      const volunteerData = req.body;
      const result = await volunteersCollection.insertOne(volunteerData);
      res.send(result);
    });

    //Get volunteer post specific email:
    app.get("/get-volunteer-post/:email", verifyToken, async (req, res) => {
      const tokenEmail = req.user.email;
      const email = req.params.email;
      if (tokenEmail !== email) {
        return res.status(403).send({ message: "Forbidden access" });
      }
      const query = { "organizationInformation.orgEmail": email };
      const result = await volunteersCollection.find(query).toArray();
      res.send(result);
    });

    //Update my volunteer post's volunteer count:

    app.put("/update-volunteer-count/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const updateNumber = {
        $inc: {
          noOfVolunteer: -1,
        },
      };
      const result = await volunteersCollection.updateOne(query, updateNumber);
      res.send(result);
    });

    //Update my volunteer post:
    app.put("/update-volunteer-post/:id", async (req, res) => {
      const id = req.params.id;
      const volunteerData = req.body;
      const query = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updateVolunteerData = {
        $set: {
          ...volunteerData,
        },
      };
      const result = await volunteersCollection.updateOne(
        query,
        updateVolunteerData,
        options
      );
      res.send(result);
    });

    //Delete my volunteer Post :
    app.delete("/my-volunteer-post/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await volunteersCollection.deleteOne(query);
      res.send(result);
    });

    //Request For volunteer:
    app.post("/request-volunteer", async (req, res) => {
      const requestData = req.body;
      const result = await volunteersRequestCollection.insertOne(requestData);
      res.send(result);
    });

    //Get request volunteer post specific email:
    app.get("/get-volunteer-request/:email", verifyToken, async (req, res) => {
      const tokenEmail = req.user.email;
      const email = req.params.email;
      if (tokenEmail !== email) {
        return res.status(403).send({ message: "Forbidden access" });
      }
      const query = { "volunteerInformation.volunteerEmail": email };
      const result = await volunteersRequestCollection.find(query).toArray();
      res.send(result);
    });

    //Remove my volunteer Request:
    app.delete("/my-volunteer-request/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await volunteersRequestCollection.deleteOne(query);
      res.send(result);
    });

    //Find specific Post for details page:
    app.get("/post/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await volunteersCollection.findOne(query);
      res.send(result);
    });

    // Send a ping to confirm a successful connection

    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("volunteer Management System is running perfectly !");
});

app.listen(port, () => {
  console.log(`Volunteer Management server is running from port ${port}`);
});
