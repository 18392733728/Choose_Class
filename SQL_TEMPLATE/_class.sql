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

 Date: 04/01/2021 10:35:45
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for _class
-- ----------------------------
DROP TABLE IF EXISTS `_class`;
CREATE TABLE `_class`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `classname` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `teacher` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `classname`(`classname`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 23 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of _class
-- ----------------------------
INSERT INTO `_class` VALUES (1, '大学语文', 101);
INSERT INTO `_class` VALUES (2, '大学英语', 101);
INSERT INTO `_class` VALUES (3, '大学体育', 102);
INSERT INTO `_class` VALUES (4, '高等数学', 102);
INSERT INTO `_class` VALUES (5, '大学物理', 103);
INSERT INTO `_class` VALUES (6, '离散数学', 103);
INSERT INTO `_class` VALUES (7, '线性代数', 109);
INSERT INTO `_class` VALUES (8, '职业规划', NULL);
INSERT INTO `_class` VALUES (9, '程序设计', 108);
INSERT INTO `_class` VALUES (10, '工程制图', NULL);
INSERT INTO `_class` VALUES (11, '数据库', 105);
INSERT INTO `_class` VALUES (12, '应用化学', 107);
INSERT INTO `_class` VALUES (13, '传统养生', 104);
INSERT INTO `_class` VALUES (14, '大数据基础', 106);
INSERT INTO `_class` VALUES (15, 'Vue', 0);
INSERT INTO `_class` VALUES (16, 'JWeb', 108);
INSERT INTO `_class` VALUES (17, 'JavaSE', 104);
INSERT INTO `_class` VALUES (18, 'LINUX', 106);
INSERT INTO `_class` VALUES (19, '电路基础', 107);
INSERT INTO `_class` VALUES (20, '电路实验', 0);
INSERT INTO `_class` VALUES (21, '物理实验', 109);
INSERT INTO `_class` VALUES (22, '自习', 105);

SET FOREIGN_KEY_CHECKS = 1;
