const { Router } = require("express");

const register = require("../controllers/Employee/registerEmployee");
const login = require("../controllers/Employee/login");
const logout = require("../controllers/Employee/logout");
const consulApi = require("../controllers/consultApi/apiRuc");
const validationToken = require("../controllers/middleware/auth");
const verifyToken = require("../controllers/auth/verifyToken");
const postPermissions = require("../controllers/Permissions/postPermissions");
const getPermissions = require("../controllers/Permissions/getPermissions");
const createModule = require("../controllers/Modules/createModule");
const createSubmodule = require("../controllers/SubModules/createSubModule");
const getSubModules = require("../controllers/SubModules/getsubModule");
const getModules = require("../controllers/Modules/getModules");
const createBusiness = require("../controllers/Business/postBusiness");
const getBusiness = require("../controllers/Business/getBusiness");
const getEmployee = require("../controllers/Employee/getEmployee");
const updateEmployeePartial = require("../controllers/Employee/updateEmployee");
const deleteEmployee = require("../controllers/Employee/deleteEmployee");
const createClient = require("../controllers/Client/createClient");
const getClients = require("../controllers/Client/getClients");

const router = Router();

router.post("/registerEmployee", register);
router.post("/login", login);
router.post("/logout", logout);
router.post("/postPermissions", postPermissions);
router.post("/createModule", createModule);
router.post("/createSubModule", createSubmodule);
router.post("/createBusiness", createBusiness);
router.post("/createClient", createClient)

router.patch("/patchEmployee", updateEmployeePartial);
router.delete("/deleteEmployee", deleteEmployee);

router.get("/getClients", getClients);
router.get("/getBusiness", getBusiness);
router.get("/getModules", getModules);
router.get("/getSubModules", getSubModules);
router.get("/getPermissions", getPermissions);
router.get("/auth/verify", verifyToken);
router.get("/employee", getEmployee);
router.get("/ruc", consulApi);

module.exports = router;
