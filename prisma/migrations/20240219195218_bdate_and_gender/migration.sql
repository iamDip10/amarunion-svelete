-- AlterTable
ALTER TABLE `users` ADD COLUMN `bdate` VARCHAR(191) NOT NULL DEFAULT '0000-00-00',
    ADD COLUMN `gender` VARCHAR(191) NOT NULL DEFAULT 'male';
