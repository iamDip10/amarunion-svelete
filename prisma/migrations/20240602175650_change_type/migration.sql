/*
  Warnings:

  - You are about to alter the column `money` on the `givevata` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- AlterTable
ALTER TABLE `givevata` MODIFY `money` INTEGER NULL;
