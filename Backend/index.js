import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import adminAuthRoutes from './routes/adminAuthRoutes.js';
import cors from 'cors';
import dotenv from 'dotenv';
import achievementRoutes from './routes/achievementRoutes.js';
import noticeRoutes from './routes/noticeRoutes.js';
import galleryRoute from "./routes/galleryRoute.js";
import admissionRoutes from './routes/admissionRoutes.js';
import contactRoutes from './routes/contactRoutes.js';
import alumniRoutes from './routes/alumniRoutes.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// ✔ Correct CORS config (Only Once)
app.use(cors({
    origin: ["http://localhost:5174","https://school-project-9o8o-git-main-aryankumarbarnwals-projects.vercel.app/"],
    credentials: true
}));

// Middlewares
app.use(express.json({limit: "20mb"}));
app.use(express.urlencoded({limit: "20mb", extended: true }));
app.use(cookieParser());


// Routes
app.use('/api/admin', adminAuthRoutes);
app.use('/api/achievements', achievementRoutes);
app.use('/api/notices', noticeRoutes);
app.get('/', (req, res) => {
    res.send('MERN Backend Chal Raha Hai!');
});
app.use("/api/alumni", alumniRoutes);

app.use("/api/gallery",galleryRoute);
app.use('/api/admission', admissionRoutes);
app.use('/api/contact', contactRoutes);

// ✔ MongoDB Connection
mongoose.connect("mongodb://localhost:27017/Registration")
    .then(() => console.log("MongoDB Connected..."))
    .catch(err => console.log(err));

// Server Start
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
