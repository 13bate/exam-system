import type { Request, Response } from "express"



export const getAllTestAnswerController = async (req: Request, res: Response) => {
  const testAnsers = await findAllTestAnswer()

  res.status(200).json(testAnsers)
}


export const getTestAnswerByIdController = async (req: Request, res: Response) => {
  const { id } = req.params;


  const testAnswer = await findTestAnsweById(id)


  res.status(200).json(testAnswer)
}


export const createTestAsnwerController = async (req: Request, res: Response) => {
  const { data } = req.body;

  const testAnswer = await createTestAsnwer(data)

  res.status(201).json(testAnswer)
}
