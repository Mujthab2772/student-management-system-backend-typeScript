import express from "express";

import studentRoutes
from "./routes/studentRoute";

import teacherRoutes
from "./routes/teacherRoute";

import courseRoutes
from "./routes/courseRoutes";

import enrollmentRoutes
from "./routes/enrollmentRoute";

import markRoutes
from "./routes/markRoute";

const app = express();

app.use(express.json());

app.use(
    "/students",
    studentRoutes
);

app.use(
    "/teachers",
    teacherRoutes
);

app.use(
    "/courses",
    courseRoutes
);

app.use(
    "/enrollments",
    enrollmentRoutes
);

app.use(
    "/marks",
    markRoutes
);

const PORT = 3000;

app.listen(PORT, () => {

    console.log(
        `Server running on port ${PORT}`
    );
});