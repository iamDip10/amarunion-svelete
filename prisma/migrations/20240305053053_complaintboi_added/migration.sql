-- CreateTable
CREATE TABLE `complaintboi` (
    `complaintId` VARCHAR(191) NOT NULL,
    `user_id` VARCHAR(191) NOT NULL DEFAULT 'null',
    `pics` VARCHAR(191) NULL,
    `types` VARCHAR(191) NULL,
    `name` VARCHAR(191) NULL,
    `jela` VARCHAR(191) NULL,
    `address` VARCHAR(191) NULL,
    `number` VARCHAR(191) NULL,
    `extra` VARCHAR(191) NULL,

    PRIMARY KEY (`complaintId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `complaintboi` ADD CONSTRAINT `complaintboi_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`number`) ON DELETE CASCADE ON UPDATE CASCADE;
