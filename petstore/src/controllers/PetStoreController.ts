import { Controller, Get, Param } from 'routing-controllers';
import { Inject } from 'typedi';
import { InsertOneWriteOpResult } from 'mongodb';
import { PetService, PetModel } from '../services/PetService';

@Controller('/pets')
export class PetStoreController {

  @Inject()
  petService: PetService;

  /**
   * @swagger
   * /pets:
   *   get:
   *     description: gets some pets
   *     operationId: getPet
   *     produces:
   *       - application/json
   *     responses:
   *       200:
   *         description: pet model
   *         schema:
   *           $ref: '#/definitions/PetModel'
   */
  @Get('/')
  async get(): Promise<PetModel> {
    return this.petService.get(7);
  }

  /**
   * @swagger
   * /pets/{id}:
   *   get:
   *     description: Get a pet by id
   *     operationId: getById
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: id
   *         in: path
   *         description: id of your pet
   *         required: true
   *         type: integer
   *         format: int32
   *     responses:
   *       200:
   *         description: pet model
   *         schema:
   *           $ref: '#/definitions/PetModel'
   */
  @Get('/:id')
  async getById(@Param('id') id: number): Promise<PetModel> {
    return this.petService.get(id);
  }

  @Get('/save')
  async saveByGet(): Promise<InsertOneWriteOpResult> {
    return this.petService.save(7);
  }

}
