/*
  Warnings:

  - You are about to drop the column `money` on the `vataboi` table. All the data in the column will be lost.
  - You are about to drop the column `month` on the `vataboi` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `vataboi` DROP COLUMN `money`,
    DROP COLUMN `month`;

-- CreateTable
CREATE TABLE `givevata` (
    `vid` INTEGER NOT NULL AUTO_INCREMENT,
    `month` VARCHAR(191) NULL,
    `money` VARCHAR(191) NULL,
    `vata_id` VARCHAR(191) NULL DEFAULT 'null',

    PRIMARY KEY (`vid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `givevata` ADD CONSTRAINT `givevata_vata_id_fkey` FOREIGN KEY (`vata_id`) REFERENCES `vataboi`(`vataid`) ON DELETE CASCADE ON UPDATE CASCADE;
