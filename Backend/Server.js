import axios from "axios";
import mongoose from "mongoose";

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/your-database", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });


// Define Schema
const userSchema = new mongoose.Schema({
  name: String,
  lastname: String,
  email: String,
  phone: String,
  address: String,
  password: String,
  userWishlist: [

    {
      id: String,
      title: String,
      image: String,
       rating: Number,
      price: Number,
      brandName: String,
      amount: Number,
      selectedSize: String,
      isInWishList: Boolean
    },

  ]
});


// Create User model
const User = mongoose.model("User", userSchema);

// Make a GET request to localhost endpoint
axios
  .get("mongodb://localhost:27017/users")
  .then((response) => {
    const userData = response.data; // Assuming the response contains an array of user data

    // Save each user data to MongoDB
    userData.forEach(async (user) => {
      try {
        const newUser = new User(user);
        await newUser.save();
        console.log("User saved to MongoDB:", user);
      } catch (error) {
        console.error("Error saving user to MongoDB:", error);
      }
    });
  })
  .catch((error) => {
    console.error("Error fetching data from localhost:", error);
  });

// Middleware to parse JSON bodies app.use(express.json());
//  Use the cors middleware app.use(cors()); 
//  Registration Route app.post('/register', async (req, res) => { try { const { name, lastname, email, password, phone, address } = req.body; const newUser = new YourModel({ name, id: nanoid(), lastname, email, phone, address, password, userWishlist: [] }); await newUser.save(); res.status(201).json({ message: 'User registered successfully' }); } catch (error) { console.error('Error registering user:', error); res.status(500).json({ message: 'Internal Server Error' }); } }); 
//  Start Server app.listen(PORT, () => { console.log(`Server is running on port ${PORT}`); });
