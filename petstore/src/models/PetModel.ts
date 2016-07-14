/**
 * @swagger
 * definition:
 *   PetModel:
 *     type: object
 *     required:
 *       - id
 *       - type
 *       - color
 *     properties:
 *       id:
 *         type: integer
 *       type:
 *         type: string
 *       color:
 *         type: string
 */
export class PetModel {

  id: number;

  type: string = 'Panda';

  color: string = 'White';

  constructor(public name: string = 'Austin') {
  }

}
