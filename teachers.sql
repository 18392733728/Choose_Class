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

 Date: 04/01/2021 10:36:07
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for teachers
-- ----------------------------
DROP TABLE IF EXISTS `teachers`;
CREATE TABLE `teachers`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `num` int(11) NULL DEFAULT NULL COMMENT '教工号',
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `edu` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '学历',
  `sex` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '性别',
  `age` int(255) NULL DEFAULT NULL COMMENT '年龄',
  `addr` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '地址',
  `class1_id` int(255) NULL DEFAULT NULL,
  `class2_id` int(255) NULL DEFAULT NULL,
  `title` varchar(20000) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 10 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of teachers
-- ----------------------------
INSERT INTO `teachers` VALUES (1, 101, '雾崎', '99a56a6ff14463a6b713162791a13ff7', '博士', '男', 35, 'M78', 1, 2, 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2001444857,2903132902&fm=26&gp=0.jpg');
INSERT INTO `teachers` VALUES (2, 102, '刘能', '7629c2d3c2af7cb9d2ec1e3e35629f0d', '博士', '男', 47, '象牙山', 3, 4, 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3467496999,3300766707&fm=26&gp=0.jpg');
INSERT INTO `teachers` VALUES (3, 103, '金古桥', '6095fe5dd9f8f2255cc6da04c65e13c0', '博士', '男', 40, '佩丹星', 5, 6, 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=124230384,622580400&fm=26&gp=0.jpg');
INSERT INTO `teachers` VALUES (4, 104, '周杰伦', '1bbf1a5c89030bd8e6464c3a869b546e', '博士', '男', 41, '中国', 13, 17, 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2838085481,2197300373&fm=26&gp=0.jpg');
INSERT INTO `teachers` VALUES (5, 105, '伽古拉', '7846d9a7046e5ef7800a71b1a31d5efc', '硕士', '男', 30, 'O-50行星', 22, 11, 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4131466680,986413361&fm=26&gp=0.jpg');
INSERT INTO `teachers` VALUES (6, 106, '美剑沙姬 ', '685eaa4eb11965e1c2536f97c476e4a0', '硕士', '女', 1300, '行星桑加', 18, 14, 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2494413692,84805884&fm=26&gp=0.jpg');
INSERT INTO `teachers` VALUES (7, 107, '伏井出K', '4154b63b7b12323898aee1011f02acee', '博士', '男', 144, '斯特鲁姆星球', 12, 19, 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4153299949,2117981985&fm=11&gp=0.jpg');
INSERT INTO `teachers` VALUES (8, 108, '贝吉塔', '94ee2d4116bda2eeb2452ae2bedcd990', '博士', '男', 50, '贝吉塔星', 16, 9, 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3828330171,705771386&fm=26&gp=0.jpg');
INSERT INTO `teachers` VALUES (9, 109, '孙悟饭', '7196ea182bc67755af68b31c29e803d8', '博士', '男', 22, '地球', 7, 21, 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3363965959,4240075949&fm=26&gp=0.jpg');

SET FOREIGN_KEY_CHECKS = 1;
