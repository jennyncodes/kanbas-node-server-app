// import * as dao from "./dao.js";
import * as assignmentDao from "../Assignments/dao.js";

export default function AssignmentRoutes(app) {

    app.put("/api/assignments/:assignmentId", async (req, res) => {
        const { assignmentId} = req.params;
        const assignmentUpdates = req.body;
        const status = await assignmentDao.updateAssignment(assignmentId, assignmentUpdates);
        res.send(status);
    });
    
    app.delete("/api/assignments/:assignmentId", async (req, res) => {
    const { assignmentId } = req.params;
    const status = await assignmentDao.deleteAssignment(assignmentId);
    res.send(status);
    });

    app.post("/api/courses/:cid/assignments" , async (req,res)=>{
        const {cid} = req.params;
        const assignment = req.body;
        const newAssignment = await assignmentDao.createAssignment(assignment);
        res.send(newAssignment);
    });

    app.get("/api/courses/:cid/assignments", async (req, res) => {
        const {cid} = req.params;
        const assignments = db.assignments.filter((a) => a.course === cid);
        const fetchAssignments = await assignmentDao.findAssignmentsForCourse(assignments);
        res.send(fetchAssignments);
    });

}
