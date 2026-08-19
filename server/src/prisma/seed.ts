import { prisma } from '../config/prisma.ts'
import { questionsOptions } from '../prisma-data/question-options.ts';
import { questions } from '../prisma-data/question.ts'


const seed = async () => {
	await prisma.questionsPool.upsert({
		where: {
			id: 'main-pool',
		},
		update: {},
		create: {
			id: 'main-pool',
		},
	});

	for (const question of questions) {
		await prisma.question.upsert({
			where: {
				id: question.id,
			},
			update: {},
			create: {
				id: question.id,
				questionText: question.questionText,
				questionsPoolId: question.questionsPoolId
			}
		})
	};

	for (let option of questionsOptions) {
		await prisma.questionOption.upsert({
			where: {
				id: option.id,
			},
			update: {},
			create: {
				id: option.id,
				text: option.text,
				isCorrect: option.isCorrect,
				questionId: option.questionId,
				index: option.index
			}
		})
	}

}

seed()
