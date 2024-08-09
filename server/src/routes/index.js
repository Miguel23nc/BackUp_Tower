const { Router } = require("express");

const getUser = require("../controllers/users/getUser");
const register = require("../controllers/users/register");
const login = require("../controllers/users/login");
const logout = require("../controllers/users/logout");
const consulApi = require("../controllers/consultApi/apiRuc");
const profile = require("../controllers/users/profile.");
const validationToken = require("../controllers/middleware/auth");
const verifyToken = require("../controllers/auth/verifyToken");
const postPermissions = require("../controllers/Permissions/postPermissions");
const getPermissions = require("../controllers/Permissions/getPermissions");
const postRole = require("../controllers/Role/postRole");
const getRoles = require("../controllers/Role/getRoles");
const createModule = require("../controllers/Modules/createModule");
const createSubmodule = require("../controllers/SubModules/createSubModule");
const getSubModules = require("../controllers/SubModules/getsubModule");
const getModules = require("../controllers/Modules/getModules");
const createBusiness = require("../controllers/Business/postBusiness");
const getBusiness = require("../controllers/Business/getBusiness");

const router = Router()

router.post("/register", register)
router.post("/login", login)
router.post("/logout", logout)
router.post("/postRole", postRole)
router.post("/postPermissions", postPermissions)
router.post("/createModule", createModule)
router.post("/createSubModule", createSubmodule)
router.post("/createBusiness", createBusiness)

router.get("/getBusiness", getBusiness)
router.get("/getModules", getModules)
router.get("/getSubModules", getSubModules)
router.get("/getRoles", getRoles)
router.get("/getPermissions", getPermissions)
router.get("/profile", validationToken, profile)
router.get("/auth/verify", verifyToken)
router.get("/user", getUser)
router.get("/ruc", consulApi)

module.exports = router