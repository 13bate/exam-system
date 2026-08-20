/*
  Warnings:

  - You are about to drop the `ProtocolParticipant` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ProtocolParticipant" DROP CONSTRAINT "ProtocolParticipant_protocolId_fkey";

-- DropForeignKey
ALTER TABLE "ProtocolParticipant" DROP CONSTRAINT "ProtocolParticipant_userId_fkey";

-- DropTable
DROP TABLE "ProtocolParticipant";

-- CreateTable
CREATE TABLE "ProtocolRecord" (
    "id" TEXT NOT NULL,
    "protocolId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "theoryResult" BOOLEAN NOT NULL,
    "practiceResult" BOOLEAN NOT NULL,

    CONSTRAINT "ProtocolRecord_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "ProtocolRecord_protocolId_idx" ON "ProtocolRecord"("protocolId");

-- CreateIndex
CREATE INDEX "ProtocolRecord_userId_idx" ON "ProtocolRecord"("userId");

-- AddForeignKey
ALTER TABLE "ProtocolRecord" ADD CONSTRAINT "ProtocolRecord_protocolId_fkey" FOREIGN KEY ("protocolId") REFERENCES "Protocol"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProtocolRecord" ADD CONSTRAINT "ProtocolRecord_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
