-- CreateTable
CREATE TABLE `users` (
    `name` VARCHAR(191) NOT NULL,
    `number` VARCHAR(191) NOT NULL,
    `pressent_address` VARCHAR(191) NOT NULL,
    `permanent_address` VARCHAR(191) NOT NULL,
    `nid` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `users_nid_key`(`nid`),
    PRIMARY KEY (`number`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
