/*
  Warnings:

  - You are about to drop the column `finishedAt` on the `TestAttempt` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "TestAttempt" DROP COLUMN "finishedAt",
ALTER COLUMN "startedAt" SET DEFAULT CURRENT_TIMESTAMP;
