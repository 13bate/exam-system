import { prisma } from "../../config/prisma.ts"
import type { Request, Response } from "express"


export const questionsController = {

  getAllQuestions: async (_req: Request, res: Response) => {
    try {
      const questions = await prisma.question.findMany();
      res.status(200).json(questions);
    } catch (error) {
      console.error("Error fetching questions:", error);
      res.status(500).json({ error: "Internal server error" })
    }
  },

  getQuestionById: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const question = await prisma.question.findUnique({
        where: { id: String(id) }
      });

      if (!question) {
        return res.status(404).json({ error: "Question not found" });
      }

      res.status(200).json(question);
    } catch (error) {
      console.error("Error fetching question:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },



  fillQuestions: async (req: Request, res: Response) => {
    try {
      const questions = await prisma.question.create({
        data: req.body.items
      })

      res.status(201).json(questions)
    }
    catch (error) {
      console.error(error);

      res.status(500).json({ error: "Internal server error" });
    }
  },

  deleteQuestions: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      await prisma.question.delete({
        where: { id: String(id) }
      })
      res.status(200).json({ result: `User ${id} has been deleted` })
    }
    catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server connection" })
    }
  },

  updateQuestions: async (req: Request, res: Response) => {
    try {
      const question = await prisma.question.updateMany({
        data: req.body
      })
      return res.status(201).json(question)
    }
    catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server connection" })
    }
  }
}
