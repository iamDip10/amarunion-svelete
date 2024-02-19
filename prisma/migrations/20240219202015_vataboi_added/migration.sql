-- CreateTable
CREATE TABLE `vataboi` (
    `vataid` VARCHAR(191) NOT NULL,
    `user_id` VARCHAR(191) NOT NULL DEFAULT 'null',
    `pics` VARCHAR(191) NULL,
    `autism_type` VARCHAR(191) NULL,
    `autism_limit` VARCHAR(191) NULL,
    `mis_number` VARCHAR(191) NULL,

    PRIMARY KEY (`vataid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `vataboi` ADD CONSTRAINT `vataboi_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`number`) ON DELETE CASCADE ON UPDATE CASCADE;
