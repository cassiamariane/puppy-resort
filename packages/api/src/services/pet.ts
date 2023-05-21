import { BaseDatabase } from "../../prisma/BaseDatabase";
import { Pet } from "@prisma/client";
export default class PetService {

  // Busca todos
  static async findAll() {
    try {
      const pets = await BaseDatabase.pet.findMany({
        select: { id: true, name: true, species: true, breed: true, gender: true, age: true, description: true, user: {
            select: {
                name: true,
                cpf: true
            }
          }
        }
      });
      return {
        data: pets,
        status: 200,
        error: "",
      };
    } catch (error) {
      console.log(error);
      return {
        data: null,
        status: 500,
        error: "Houve um problema ao encontrar os pets.",
      };
    }
  }

  // Busca pelo ID
  static async findById(id: number) {
    try {
      // Verifica se o id foi passado e se é numérico
      if (!id || typeof id != "number") {
        return {
          data: null,
          status: 400,
          error: "ID inválido ou inexistente.",
        };
      }

      // Busca o pet no banco
      const pet = await BaseDatabase.pet.findUnique({
        where: { id },
        select: { id: true, name: true, species: true, breed: true, gender: true, age: true, description: true, user: {
              select: {
                  name: true,
                  id: true
              }
            }
          }
      });
      return {
        data: pet,
        status: 200,
        error: "",
      };
    } catch (error) {
      console.log(error);
      return {
        data: null,
        status: 500,
        error: "Houve um problema ao encontrar o pet.",
      };
    }
  }

  // Cadastro de pet
  static async createPet(pet: Pet) {
    try {
      
      // verifica se todos os dados foram passados
      if ( !pet.name || !pet.species || !pet.breed || !pet.gender || !pet.age || !pet.description || !pet.userId) {
        return {
          data: null,
          status: 400,
          error: "Informações insuficientes.",
        };
      }

      // Cria o pet no banco
      const petCreated = await BaseDatabase.pet.create({ data: pet });
      if (petCreated.id) {
        return {
            data: petCreated,
            status: 200,
            error: "",
          };
      }
      return {
        data: null,
        status: 500,
        error: "Houve um problema ao cadastrar o pet.",
      };
    } catch (error) {
      console.log(error);
      return {
        data: null,
        status: 500,
        error: "Houve um problema ao cadastrar o pet.",
      };
    }
  }
}
