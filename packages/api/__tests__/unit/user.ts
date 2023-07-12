import UserService from "../../src/services/user";

describe('Cadastrar usuário', ()=> {
    it('Should return all the users of the system', async ()=> {
        const users = await UserService.findAll()
        expect(users).toEqual(200)
    })
})