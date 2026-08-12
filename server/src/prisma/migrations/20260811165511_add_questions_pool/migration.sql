/*
  Warnings:

  - Added the required column `questionsPoolId` to the `Question` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Question" ADD COLUMN     "questionsPoolId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "QuestionsPool" (
    "id" TEXT NOT NULL,

    CONSTRAINT "QuestionsPool_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Question" ADD CONSTRAINT "Question_questionsPoolId_fkey" FOREIGN KEY ("questionsPoolId") REFERENCES "QuestionsPool"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
