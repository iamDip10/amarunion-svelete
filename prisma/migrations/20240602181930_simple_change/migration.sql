-- AlterTable
ALTER TABLE `givevata` ADD COLUMN `user_id` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `givevata` ADD CONSTRAINT `givevata_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`number`) ON DELETE CASCADE ON UPDATE CASCADE;
