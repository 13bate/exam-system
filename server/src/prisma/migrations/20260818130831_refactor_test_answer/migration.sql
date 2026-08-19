/*
  Warnings:

  - You are about to drop the column `isCorrect` on the `TestAnswer` table. All the data in the column will be lost.
  - You are about to drop the column `selectedVariantIndex` on the `TestAnswer` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "TestAnswer" DROP COLUMN "isCorrect",
DROP COLUMN "selectedVariantIndex";
