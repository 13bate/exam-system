/*
  Warnings:

  - You are about to drop the column `goNumber` on the `User` table. All the data in the column will be lost.
  - Added the required column `goType` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "goNumber",
ADD COLUMN     "certificateNumber" TEXT,
ADD COLUMN     "goType" TEXT NOT NULL,
ADD COLUMN     "photo" TEXT,
ALTER COLUMN "patronymic" DROP NOT NULL,
ALTER COLUMN "citizenship" DROP NOT NULL,
ALTER COLUMN "placeOfBirth" DROP NOT NULL,
ALTER COLUMN "municipalFormation" DROP NOT NULL,
ALTER COLUMN "populatedArea" DROP NOT NULL,
ALTER COLUMN "serviceLicenseNumber" DROP NOT NULL,
ALTER COLUMN "serviceDateOfIssue" DROP NOT NULL,
ALTER COLUMN "serviceExpirationDate" DROP NOT NULL,
ALTER COLUMN "building" DROP NOT NULL,
ALTER COLUMN "structure" DROP NOT NULL,
ALTER COLUMN "apartment" DROP NOT NULL;

-- CreateTable
CREATE TABLE "ClientTest" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "theoryTest" BOOLEAN NOT NULL,
    "exercise1" BOOLEAN NOT NULL,
    "exercise2" BOOLEAN NOT NULL,
    "exercise3" BOOLEAN NOT NULL,
    "result" BOOLEAN NOT NULL,
    "typeOfCheck" TEXT NOT NULL,
    "allowedMistakes" INTEGER NOT NULL,

    CONSTRAINT "ClientTest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TestAttempt" (
    "id" TEXT NOT NULL,
    "clientTestId" TEXT NOT NULL,
    "startedAt" TIMESTAMP(3) NOT NULL,
    "finishedAt" TIMESTAMP(3),
    "mistakes" INTEGER NOT NULL,
    "passed" BOOLEAN NOT NULL,

    CONSTRAINT "TestAttempt_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TestAnswer" (
    "id" TEXT NOT NULL,
    "testAttemptId" TEXT NOT NULL,
    "questionId" TEXT NOT NULL,
    "selectedVariantIndex" INTEGER NOT NULL,
    "isCorrect" BOOLEAN NOT NULL,

    CONSTRAINT "TestAnswer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Question" (
    "id" TEXT NOT NULL,
    "questionText" TEXT NOT NULL,
    "variant1" TEXT NOT NULL,
    "variant2" TEXT NOT NULL,
    "variant3" TEXT NOT NULL,
    "correctVariantIndex" INTEGER NOT NULL,

    CONSTRAINT "Question_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Protocol" (
    "id" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "typeOfCheck" TEXT NOT NULL,

    CONSTRAINT "Protocol_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProtocolParticipant" (
    "id" TEXT NOT NULL,
    "protocolId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "theoryResult" BOOLEAN NOT NULL,
    "practiceResult" BOOLEAN NOT NULL,

    CONSTRAINT "ProtocolParticipant_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "ClientTest_userId_idx" ON "ClientTest"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "TestAttempt_clientTestId_key" ON "TestAttempt"("clientTestId");

-- CreateIndex
CREATE INDEX "TestAttempt_clientTestId_idx" ON "TestAttempt"("clientTestId");

-- CreateIndex
CREATE INDEX "TestAnswer_testAttemptId_idx" ON "TestAnswer"("testAttemptId");

-- CreateIndex
CREATE INDEX "TestAnswer_questionId_idx" ON "TestAnswer"("questionId");

-- CreateIndex
CREATE UNIQUE INDEX "TestAnswer_testAttemptId_questionId_key" ON "TestAnswer"("testAttemptId", "questionId");

-- CreateIndex
CREATE INDEX "ProtocolParticipant_protocolId_idx" ON "ProtocolParticipant"("protocolId");

-- CreateIndex
CREATE INDEX "ProtocolParticipant_userId_idx" ON "ProtocolParticipant"("userId");

-- AddForeignKey
ALTER TABLE "ClientTest" ADD CONSTRAINT "ClientTest_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TestAttempt" ADD CONSTRAINT "TestAttempt_clientTestId_fkey" FOREIGN KEY ("clientTestId") REFERENCES "ClientTest"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TestAnswer" ADD CONSTRAINT "TestAnswer_testAttemptId_fkey" FOREIGN KEY ("testAttemptId") REFERENCES "TestAttempt"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TestAnswer" ADD CONSTRAINT "TestAnswer_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Question"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProtocolParticipant" ADD CONSTRAINT "ProtocolParticipant_protocolId_fkey" FOREIGN KEY ("protocolId") REFERENCES "Protocol"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProtocolParticipant" ADD CONSTRAINT "ProtocolParticipant_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
