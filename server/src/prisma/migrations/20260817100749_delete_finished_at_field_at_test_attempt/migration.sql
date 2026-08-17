/*
  Warnings:

  - You are about to drop the column `theoryTest` on the `ClientTest` table. All the data in the column will be lost.
  - You are about to drop the column `finishedAt` on the `TestAttempt` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ClientTest" DROP COLUMN "theoryTest";

-- AlterTable
ALTER TABLE "TestAttempt" DROP COLUMN "finishedAt",
ALTER COLUMN "startedAt" SET DEFAULT CURRENT_TIMESTAMP;
