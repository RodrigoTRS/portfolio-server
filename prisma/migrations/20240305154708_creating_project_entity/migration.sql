-- CreateTable
CREATE TABLE "Project" (
    "id" TEXT NOT NULL,
    "cover_image_url" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "techonologies" TEXT[],
    "category" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "repository_url" TEXT NOT NULL,
    "project_url" TEXT NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);
