/*
  Warnings:

  - Changed the type of `index` on the `QuestionOption` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "QuestionOption" DROP COLUMN "index",
ADD COLUMN     "index" INTEGER NOT NULL;
