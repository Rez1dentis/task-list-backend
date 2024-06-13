"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("./controllers");
const router = (0, express_1.Router)();
router.get('/tasks/getTasks', controllers_1.getTasks);
// router.put('/tasks/reorder', reorderTasks);
router.post('/tasks/create', controllers_1.createTask);
router.put('/tasks/update/:id', controllers_1.updateTask);
router.delete('/tasks/delete/:id', controllers_1.deleteTask);
exports.default = router;
//# sourceMappingURL=taskRoutes.js.map