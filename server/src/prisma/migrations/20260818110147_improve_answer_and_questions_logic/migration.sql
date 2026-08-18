/*
  Warnings:

  - You are about to drop the column `testAttemptId` on the `Question` table. All the data in the column will be lost.
  - Added the required column `questionOptionId` to the `Question` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isCorrect` to the `TestAnswer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `selectedVariantIndex` to the `TestAnswer` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Question" DROP CONSTRAINT "Question_testAttemptId_fkey";

-- AlterTable
ALTER TABLE "Question" DROP COLUMN "testAttemptId",
ADD COLUMN     "questionOptionId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "TestAnswer" ADD COLUMN     "isCorrect" BOOLEAN NOT NULL,
ADD COLUMN     "selectedVariantIndex" INTEGER NOT NULL;
