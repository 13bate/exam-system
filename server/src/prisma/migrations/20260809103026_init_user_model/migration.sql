-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "patronymic" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "nameInDativeCase" TEXT NOT NULL,
    "surnameInDativeCase" TEXT NOT NULL,
    "patronymicInDativeCase" TEXT NOT NULL,
    "passportSeries" TEXT NOT NULL,
    "passportNumber" TEXT NOT NULL,
    "departmentCode" TEXT NOT NULL,
    "passportDateOfIssue" TIMESTAMP(3) NOT NULL,
    "dateOfBirth" TIMESTAMP(3) NOT NULL,
    "passportDepartment" TEXT NOT NULL,
    "citizenship" TEXT NOT NULL,
    "placeOfBirth" TEXT NOT NULL,
    "municipalFormation" TEXT NOT NULL,
    "populatedArea" TEXT NOT NULL,
    "serviceRegion" TEXT NOT NULL,
    "serviceLicenseNumber" TEXT NOT NULL,
    "serviceDateOfIssue" TIMESTAMP(3) NOT NULL,
    "serviceExpirationDate" TIMESTAMP(3) NOT NULL,
    "serviceCategory" TEXT NOT NULL,
    "goNumber" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "federalSubject" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "locality" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "houseNumber" TEXT NOT NULL,
    "building" TEXT NOT NULL,
    "structure" TEXT NOT NULL,
    "apartment" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_passportNumber_key" ON "User"("passportNumber");
