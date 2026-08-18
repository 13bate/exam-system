/*
  Warnings:

  - You are about to drop the column `correctVariantIndex` on the `Question` table. All the data in the column will be lost.
  - You are about to drop the column `variant1` on the `Question` table. All the data in the column will be lost.
  - You are about to drop the column `variant2` on the `Question` table. All the data in the column will be lost.
  - You are about to drop the column `variant3` on the `Question` table. All the data in the column will be lost.
  - You are about to drop the column `isCorrect` on the `TestAnswer` table. All the data in the column will be lost.
  - You are about to drop the column `selectedVariantIndex` on the `TestAnswer` table. All the data in the column will be lost.
  - Added the required column `questionOptionId` to the `TestAnswer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Question" DROP COLUMN "correctVariantIndex",
DROP COLUMN "variant1",
DROP COLUMN "variant2",
DROP COLUMN "variant3",
ADD COLUMN     "testAttemptId" TEXT;

-- AlterTable
ALTER TABLE "TestAnswer" DROP COLUMN "isCorrect",
DROP COLUMN "selectedVariantIndex",
ADD COLUMN     "questionOptionId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "TestAttempt" ADD COLUMN     "finishedAt" TIMESTAMP(3),
ALTER COLUMN "startedAt" DROP DEFAULT;

-- CreateTable
CREATE TABLE "QuestionOption" (
    "id" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "isCorrect" BOOLEAN NOT NULL,
    "questionId" TEXT NOT NULL,
    "index" TEXT NOT NULL,

    CONSTRAINT "QuestionOption_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "TestAnswer" ADD CONSTRAINT "TestAnswer_questionOptionId_fkey" FOREIGN KEY ("questionOptionId") REFERENCES "QuestionOption"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Question" ADD CONSTRAINT "Question_testAttemptId_fkey" FOREIGN KEY ("testAttemptId") REFERENCES "TestAttempt"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuestionOption" ADD CONSTRAINT "QuestionOption_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Question"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
