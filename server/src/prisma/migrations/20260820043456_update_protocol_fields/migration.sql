/*
  Warnings:

  - You are about to drop the column `typeOfCheck` on the `Protocol` table. All the data in the column will be lost.
  - Added the required column `commission` to the `Protocol` table without a default value. This is not possible if the table is not empty.
  - Added the required column `place` to the `Protocol` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Protocol" DROP COLUMN "typeOfCheck",
ADD COLUMN     "commission" TEXT NOT NULL,
ADD COLUMN     "place" TEXT NOT NULL,
ALTER COLUMN "date" SET DEFAULT CURRENT_TIMESTAMP;
