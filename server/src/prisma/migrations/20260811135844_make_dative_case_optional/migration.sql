-- AlterTable
ALTER TABLE "User" ALTER COLUMN "nameInDativeCase" DROP NOT NULL,
ALTER COLUMN "surnameInDativeCase" DROP NOT NULL,
ALTER COLUMN "patronymicInDativeCase" DROP NOT NULL;
