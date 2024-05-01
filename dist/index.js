"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// Insert a new user
function insertUser(username, password, firstName, lastName) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield prisma.user.create({
            data: {
                username,
                password,
                firstName,
                lastName,
            },
        });
        return result;
    });
}
function updateUser(username_1, _a) {
    return __awaiter(this, arguments, void 0, function* (username, { firstName, lastName }) {
        const result = yield prisma.user.update({
            where: {
                username,
            },
            data: {
                firstName,
                lastName,
            },
        });
        return result;
    });
}
// updateUser("test-username", {
//   firstName: "new first name",
//   lastName: "new last name",
// });
// Get details of a user
function getUserDetails(username) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield prisma.user.findFirst({
            where: {
                username,
            },
        });
        console.log("result", result);
    });
}
getUserDetails("test-username1");
