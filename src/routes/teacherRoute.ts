import { Router } from "express";
import { teacherService } from "../services/teacherService";
import { teacherRepository } from "../repositories/teacherRepository";
import { teacherController } from "../controllers/teacherController";


const route = Router()

const teacherRepo = new teacherRepository()
const teacherServ = new teacherService(teacherRepo)
const teacherContro = new teacherController(teacherServ)

route.post("/", teacherContro.createTeacher)

route.get("/", teacherContro.getTeachers)

route.get("/:id", teacherContro.getTeacher)

export default route