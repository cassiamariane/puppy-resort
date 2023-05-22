import { BaseDatabase } from "../../prisma/BaseDatabase";
import { User } from "@prisma/client";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
export default class UserService {
  private static secret = process.env.TOKEN_SECRET ?? "foo";

  static async getMe(id: number) {
    try {
      // Verifica se o id foi passado e se é numérico
      if (!id || typeof id != "number") {
        return {
          data: null,
          status: 400,
          error: "ID inválido ou inexistente.",
        };
      }

      // Busca o usuário no banco
      const user = await BaseDatabase.user.findUnique({
        where: { id },
        select: { id: true, name: true, cpf: true, phone: true, email: true},
      });
      return {
        data: user,
        status: 200,
        error: "",
      };
    } catch (error) {
      console.log(error);
      return {
        data: null,
        status: 500,
        error: "Houve um problema ao encontrar o usuário.",
      };
    }
  }

  static async getMyPets(userId: number) {
    try {
      // Verifica se o id foi passado e se é numérico
      if (!userId || typeof userId != "number") {
        return {
          data: null,
          status: 400,
          error: "ID inválido ou inexistente.",
        };
      }

      // Busca o usuário no banco
      const user = await BaseDatabase.pet.findMany({
        where: { userId },
        select: { id: true, name: true, breed: true, species: true, description: true, age: true, gender: true},
      });
      return {
        data: user,
        status: 200,
        error: "",
      };
    } catch (error) {
      console.log(error);
      return {
        data: null,
        status: 500,
        error: "Houve um problema ao encontrar o usuário.",
      };
    }
  }

  // Busca todos
  static async findAll() {
    try {
      const users = await BaseDatabase.user.findMany({
        select: { id: true, name: true, cpf: true, phone: true, email: true, admin: true },
      });
      return {
        data: users,
        status: 200,
        error: "",
      };
    } catch (error) {
      console.log(error);
      return {
        data: null,
        status: 500,
        error: "Houve um problema ao encontrar os usuários.",
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

      // Busca o usuário no banco
      const user = await BaseDatabase.user.findUnique({
        where: { id },
        select: { id: true, name: true, cpf: true, phone: true, email: true, admin: true },
      });
      return {
        data: user,
        status: 200,
        error: "",
      };
    } catch (error) {
      console.log(error);
      return {
        data: null,
        status: 500,
        error: "Houve um problema ao encontrar o usuário.",
      };
    }
  }

  // Cadastro de usuário
  static async createUser(user: User) {
    try {
      // verifica se todos os dados foram passados
      if ( !user.email || !user.password || !user.cpf || !user.phone || !user.name ) {
        return {
          data: null,
          status: 400,
          error: "Informações insuficientes.",
        };
      }

      // Verifica se o usuário já existe
      const userExists = await BaseDatabase.user.findFirst({
        where: { OR: [{ email: user.email }, { cpf: user.cpf }] },
      });

      if (userExists) {
        return {data: null, status: 400, error: "Usuário já cadastrado.",
        };
      }

      // Faz o hash da senha
      const salt = await bcrypt.genSalt(Number(process.env.SALT) || 10);
      const hash = await bcrypt.hash(user.password, salt);
      user.password = hash;

      if (!user.admin) {
        user.admin = false;
      } else {
        user.admin = true;
      }

      // Cria o usuário no banco
      const userCreated = await BaseDatabase.user.create({ data: user });
      if (userCreated.id) {
        return this.generateToken( userCreated.id, user.email, user.name, user.admin);
      }
      return {
        data: null,
        status: 500,
        error: "Houve um problema ao cadastrar o usuário.",
      };
    } catch (error) {
      console.log(error);
      return {
        data: null,
        status: 500,
        error: "Houve um problema ao cadastrar o usuário.",
      };
    }
  }

  // Login do usuário
  static async login(login: any) {
    try {
      // Verifica se o identificador (email ou cpf) e a senha foram passados
      const { identifier, password } = login;
      if (!identifier || !password) {
        return {
          data: null,
          status: 400,
          error: "Informações insuficientes.",
        };
      }

      // Verifica se o usuário já existe
      const userExists = await BaseDatabase.user.findFirst({
        where: { OR: [{ email: identifier }, { cpf: identifier }] },
      });
      if (!userExists) {
        return {
          data: null,
          status: 400,
          error: "Usuário não existe.",
        };
      }

      // Verifica se a senha está correta
      const validPassword = await bcrypt.compare(password, userExists.password);
      if (!validPassword) {
        return {
          data: null,
          status: 401,
          error: "Senha incorreta.",
        };
      }

      // Salva as informações dele no token
      return this.generateToken( userExists.id, userExists.email, userExists.name, userExists.admin);
    } catch (error) {
      console.log(error);
      return {
        data: null,
        status: 500,
        error: "Houve um problema ao autenticar o usuário.",
      };
    }
  }

  private static generateToken( id: number, email: string, name: string, admin: boolean) {
    const token = jwt.sign( {id, email, name, admin,}, UserService.secret, { expiresIn: "7d" });
    if (!token) {
      return {
        data: null,
        status: 401,
        error: "Não autorizado",
      };
    }
    return {
      data: {
        token,
      },
      status: 200,
      error: "",
    };
  }
}
