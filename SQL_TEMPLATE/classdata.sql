/*
 Navicat Premium Data Transfer

 Source Server         : 192.168.137.1
 Source Server Type    : MySQL
 Source Server Version : 50536
 Source Host           : localhost:3306
 Source Schema         : happ2

 Target Server Type    : MySQL
 Target Server Version : 50536
 File Encoding         : 65001

 Date: 04/01/2021 10:35:30
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for classdata
-- ----------------------------
DROP TABLE IF EXISTS `classdata`;
CREATE TABLE `classdata`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `num` int(11) NULL DEFAULT NULL COMMENT '学号',
  `class1` int(11) NULL DEFAULT NULL COMMENT '课程1 id',
  `class2` int(11) NULL DEFAULT NULL COMMENT '课程2 id',
  `class3` int(11) NULL DEFAULT NULL COMMENT '课程3 id',
  `class4` int(11) NULL DEFAULT NULL COMMENT '课程4 id',
  `days` int(11) NULL DEFAULT NULL COMMENT '课程日期',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 65 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of classdata
-- ----------------------------
INSERT INTO `classdata` VALUES (25, 10001, 2, 8, 9, 11, 1);
INSERT INTO `classdata` VALUES (26, 10001, 2, 6, 10, 3, 2);
INSERT INTO `classdata` VALUES (27, 10001, 13, 4, 9, 11, 3);
INSERT INTO `classdata` VALUES (28, 10001, 18, 6, 12, 3, 5);
INSERT INTO `classdata` VALUES (29, 10001, 5, 15, 12, 6, 4);
INSERT INTO `classdata` VALUES (30, 10002, 5, 8, 9, 6, 5);
INSERT INTO `classdata` VALUES (31, 10002, 18, 15, 6, 5, 2);
INSERT INTO `classdata` VALUES (32, 10003, 18, 15, 9, 3, 1);
INSERT INTO `classdata` VALUES (33, 10003, 2, 8, 17, 6, 2);
INSERT INTO `classdata` VALUES (34, 10003, 4, 2, 12, 13, 3);
INSERT INTO `classdata` VALUES (35, 10003, 5, 4, 6, 11, 4);
INSERT INTO `classdata` VALUES (36, 10003, 18, 8, 12, 3, 5);
INSERT INTO `classdata` VALUES (37, 10005, 14, 15, 12, 3, 1);
INSERT INTO `classdata` VALUES (38, 10005, 2, 22, 17, 19, 2);
INSERT INTO `classdata` VALUES (39, 10005, 18, 6, 9, 13, 3);
INSERT INTO `classdata` VALUES (40, 10005, 13, 16, 10, 11, 4);
INSERT INTO `classdata` VALUES (41, 10005, 13, 2, 10, 5, 5);
INSERT INTO `classdata` VALUES (42, 10006, 14, 2, 10, 3, 1);
INSERT INTO `classdata` VALUES (43, 10006, 2, 6, 9, 19, 2);
INSERT INTO `classdata` VALUES (44, 10006, 18, 2, 6, 5, 3);
INSERT INTO `classdata` VALUES (45, 10006, 13, 15, 12, 11, 4);
INSERT INTO `classdata` VALUES (46, 10006, 4, 16, 17, 13, 5);
INSERT INTO `classdata` VALUES (47, 10007, 4, 16, 17, 13, 1);
INSERT INTO `classdata` VALUES (48, 10007, 13, 15, 12, 11, 2);
INSERT INTO `classdata` VALUES (49, 10007, 18, 2, 6, 5, 3);
INSERT INTO `classdata` VALUES (50, 10007, 14, 22, 9, 19, 4);
INSERT INTO `classdata` VALUES (51, 10007, 2, 6, 10, 3, 5);
INSERT INTO `classdata` VALUES (52, 10008, 14, 16, 10, 5, 1);
INSERT INTO `classdata` VALUES (53, 10008, 18, 22, 17, 3, 2);
INSERT INTO `classdata` VALUES (54, 10008, 2, 2, 12, 19, 3);
INSERT INTO `classdata` VALUES (55, 10008, 13, 22, 17, 3, 4);
INSERT INTO `classdata` VALUES (56, 10008, 2, 2, 6, 5, 5);
INSERT INTO `classdata` VALUES (57, 10009, 18, 6, 10, 5, 1);
INSERT INTO `classdata` VALUES (58, 10009, 14, 22, 9, 19, 2);
INSERT INTO `classdata` VALUES (59, 10009, 18, 15, 6, 5, 3);
INSERT INTO `classdata` VALUES (60, 10009, 13, 16, 12, 11, 4);
INSERT INTO `classdata` VALUES (61, 10009, 4, 22, 10, 13, 5);
INSERT INTO `classdata` VALUES (62, 10010, 14, 6, 12, 19, 1);
INSERT INTO `classdata` VALUES (63, 10010, 18, 15, 10, 13, 2);
INSERT INTO `classdata` VALUES (64, 10010, 4, 22, 6, 11, 3);

SET FOREIGN_KEY_CHECKS = 1;
