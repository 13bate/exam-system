/*
  Warnings:

  - You are about to drop the column `category` on the `ClientTest` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ClientTest" DROP COLUMN "category",
ALTER COLUMN "allowedMistakes" DROP NOT NULL,
ALTER COLUMN "allowedMistakes" SET DEFAULT 1;
