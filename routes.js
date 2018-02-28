
var express = require('express');
var router = express.Router();
var tweeterController = require('./controllers/tweeter');

/**
 * @swagger
 * /ping:
 *   get:
 *     tags:
 *       - ping
 *     description: pings the service.
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: SUCCESS.
 *       500:
 *         description: FAILURE.
 */
router.get('/ping', tweeterController.ping);

/**
 * @swagger
 * /user/{lastName}:
 *   get:
 *     tags:
 *       - tweeter
 *     description: gets the specific user by lastname.
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: lastName
 *         description: user's lastName
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: SUCCESS.
 *       500:
 *         description: FAILURE.
 */
router.get('/user/:lastName', tweeterController.getUser);

/**
 * @swagger
 * /user:
 *   post:
 *     tags:
 *       - tweeter
 *     description: creates the user in tweeter database.
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: user
 *         description: User Object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/User'
 *     responses:
 *       200:
 *         description: SUCCESS.
 *       500:
 *         description: FAILURE.
 */
router.post('/user', tweeterController.createUser);


/**
 * @swagger
 * /message:
 *   post:
 *     tags:
 *       - tweeter
 *     description: postes the message for the loggied user in tweeter database.
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: message
 *         description: Message Object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Message'
 *     responses:
 *       200:
 *         description: SUCCESS.
 *       500:
 *         description: FAILURE.
 */
router.post('/message', tweeterController.postMessage);

/**
 * @swagger
 * /messages/{userId}:
 *   get:
 *     tags:
 *       - tweeter
 *     description: gets the messages for the specific user by userId.
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: userId
 *         description: user's ID
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: SUCCESS.
 *       500:
 *         description: FAILURE.
 */
router.get('/messages/:userId', tweeterController.getMessages);

module.exports = router;


/**
 * @swagger
 * definitions:
 *   User:
 *     properties:
 *       lastName:
 *         type: string
 *       firstName:
 *         type: string
 *       age:
 *         type: integer
 *       sex:
 *         type: string
 *       email:
 *         type: string
 *   Message:
 *     properties:
 *       userId:
 *         type: string
 *       content:
 *         type: string
 */