import { Router } from "express";
import { studentRepository } from "../repositories/studentRepository";
import { studentService } from "../services/studentService";
import { studentController } from "../controllers/studentController";

const route = Router()

const StudentRepository = new studentRepository()
const StudentService = new studentService(StudentRepository)
const StudentController = new studentController(StudentService)

route.post("/", StudentController.createStudent)

route.get("/", StudentController.getStudents)

route.get("/:id", StudentController.getStudent)

export default route