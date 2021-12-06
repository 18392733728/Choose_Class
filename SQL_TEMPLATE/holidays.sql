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

 Date: 04/01/2021 10:35:51
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for holidays
-- ----------------------------
DROP TABLE IF EXISTS `holidays`;
CREATE TABLE `holidays`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `student_num` int(11) NULL DEFAULT NULL,
  `teacher_num` int(11) NULL DEFAULT NULL,
  `rea` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '理由',
  `keyss` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '是否批准',
  `start_date` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `end_date` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 9 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of holidays
-- ----------------------------
INSERT INTO `holidays` VALUES (5, 10001, 108, '肚子疼', 'true', '2021-01-21T00:04', '2021-01-22T11:03');
INSERT INTO `holidays` VALUES (6, 10001, 108, '脑袋疼', 'true', '2021-01-21T08:00:00', '2021-01-21T08:00:00');
INSERT INTO `holidays` VALUES (7, 10007, 101, '脑子疼', 'false', '2021-01-11T08:00:00', '2021-01-12T08:00:00');
INSERT INTO `holidays` VALUES (8, 10013, 107, '恶心', 'true', '2021-01-24T08:00:00', '2021-01-25T08:00:00');

SET FOREIGN_KEY_CHECKS = 1;
