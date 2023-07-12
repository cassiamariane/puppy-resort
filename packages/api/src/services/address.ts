import { BaseDatabase } from "../../prisma/BaseDatabase";
import { Address } from "@prisma/client";
export default class AddressService {

    // Busca todos
    static async findAll() {
      try {
        const adresses = await BaseDatabase.address.findMany({
          select: { id: true, code: true, street: true, number: true, neighborhood: true, city: true, state: true, complement: true, user: {
              select: {
                  name: true,
                  cpf: true
              }
            }
          }
        });
        return {
          data: adresses,
          status: 200,
          error: "",
        };
      } catch (error) {
        console.log(error);
        return {
          data: null,
          status: 500,
          error: "Houve um problema ao encontrar os endereços.",
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
  
        // Busca o endereço no banco
        const address = await BaseDatabase.address.findUnique({
          where: { id },
          select: { id: true, code: true, street: true, number: true, neighborhood: true, city: true, state: true, complement: true, user: {
                select: {
                    name: true,
                    id: true
                }
              }
            }
        });
        return {
          data: address,
          status: 200,
          error: "",
        };
      } catch (error) {
        console.log(error);
        return {
          data: null,
          status: 500,
          error: "Houve um problema ao encontrar o endereços.",
        };
      }
    }
  
    // Cadastro do endereço
    static async createAddress(address: Address) {
        try {
          
          // verifica se todos os dados foram passados
          if ( !address.code || !address.street || !address.number || !address.neighborhood || !address.city || !address.state || !address.complement || !address.userId) {
            return {
              data: null,
              status: 400,
              error: "Informações insuficientes.",
            };
          }
    
          // Cria o endereço no banco
          const addressCreated = await BaseDatabase.address.create({ data: address });
          if (addressCreated.id) {
            return {
                data: addressCreated,
                status: 200,
                error: "",
              };
          }
          return {
            data: null,
            status: 500,
            error: "Houve um problema ao cadastrar o endereço.",
          };
        } catch (error) {
          console.log(error);
          return {
            data: null,
            status: 500,
            error: "Houve um problema ao cadastrar o endereço.",
          };
        }
      }
  }
  


