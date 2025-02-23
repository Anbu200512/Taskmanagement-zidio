import express from "express"
import {createTask, deleteTask, editTask, getAllTask, getSingleTask} from "../controllers/task.controllers.js"


const router = express.Router()

router.get("/all-task",getAllTask)

router.get("/single-task/:taskId",getSingleTask)

router.post("/create-task",createTask)

router.patch("/edit-task/:taskId",editTask)

router.delete("/delete-one-task/:taskId",deleteTask)

export default router