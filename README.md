# Puppy Resort 🐾🌴

## Documento de Visão

### Integrantes do grupo:

Cássia Mariane e Daniel Vinícius.


### Histórico de Revisões:

| Data       | Versão | Descrição                                             | Autor(es)                        |
|:-----------|:------ |:----------------------------------------------------- |:-------------------------------- | 
| 01/05/2023 | 0.0.0  | Definição do escopo do projeto e plano de atividades. | Daniel Vinicius e Cássia Mariane |


### Objetivo do Documento

O objetivo deste documento é contextualizar e descrever o problema, informar como o mesmo está sendo abordado atualmente e propor uma solução própria, definindo o seu escopo e identificando as restrições que a limitam.

Relaciona ainda os envolvidos e usuários, assim como descreve os requisitos de negócio que devem ser atendidos. Dessa forma, este documento fornece insumos para o acordo com o cliente, a estimativa de esforço e o desenvolvimento da solução.


### Introdução

O projeto consiste em uma interface web para um hotel de animais domésticos. O sistema irá fornecer agendamento e avaliação de hospedagens, além de servir de vitrine para os quartos e serviços oferecidos pelo hotel e fornecer informações de contato da recepção. Do lado da recepção, o sistema irá prover uma simples interface que liste todas as hospedagens, finalizadas ou não, para que os recepcionistas estejam cientes dos hóspedes que irão chegar e os valores pagos, além de poderem finalizar a hospedagem através do sistema. O hotel oferece hospedagem para os pets, horário de recreação, alimentação saudável, piscina, serviço veterinário e taxi dog. A rede de hotéis está presente nas cidades do Rio de Janeiro, Curitiba, São Paulo, Brasília e Belo Horizonte.


### Visão Geral do Problema/Necessidades

Os clientes que irão viajar e/ou trabalhar precisam hospedar seus pets por algum período determinado. Surge a necessidade de agendar essa hospedagem de forma fácil e online.

Atualmente, o hotel agenda suas hospedagens por meio do Whatsapp e Instagram. O problema é a falta de organização na alocação dos quartos e, às vezes, a falta de confiabilidade do cliente.

Do lado da recepção, os atendentes, atualmente, precisam listar os detalhes das hospedagens em um arquivo Excel, bem como seus valores. O problema, novamente, é a forma de organização, pois o trabalho manual acaba gerando inconsistências de informações.


### Visão Geral da Solução Proposta

Será desenvolvida uma interface web para que o cliente possa informar-se dos serviços oferecidos, agendar a hospedagem, realizar o pagamento e, posteriormente, avaliar a hospedagem.

Faltando 1 (um) dia para o encerramento da hospedagem, o cliente terá a opção de renovar sua hospedagem, mediante novo pagamento.

Do lado da recepção, os atendentes poderão visualizar, sem precisar cadastrar, todas as hospedagens, finalizadas ou não, bem como seus valores, datas de check-in e check-out, avaliações, etc.

Os atendentes também poderão visualizar, em forma de cards, os quartos do hotel e suas hospedagens em aberto.


### O que o software não irá fazer

O software não irá oferecer chat de conversa em tempo real nem qualquer outra forma de FAQ, pois qualquer atendimento entre a equipe do hotel e o tutor do pet será feito ainda pelo Whatsapp de forma manual.


### Usuários do software

| Função/Papel            | Descrição                                                                                                                                     |
|:----------------------- |:--------------------------------------------------------------------------------------------------------------------------------------------- |
| Usuário cliente         | É o tutor do pet, que fará os agendamentos, pagamentos, avaliações e renovações.                                                              |
| Atendente/recepcionista | É o usuário que poderá visualizar os agendamentos na plataforma, para que fiquem cientes dos hóspedes que irão chegar e os valores recebidos. |


### Requisitos

#### Requisitos Funcionais

##### Vitrine do pet hotel
Na página principal do site serão exibidas imagens atrativas do pet hotel, um mapa das localizações, cards de serviços oferecidos e informações de contato da recepção.

##### Fazer cadastro e login na plataforma
O usuário (cliente ou recepcionista) poderá se cadastrar na plataforma, bem como cadastrar seu(s) pet(s) e seu endereço. No cadastro, deverão ser informados o nome, email, senha, CPF e data de nascimento do usuário. O login será feito com o e-mail e a senha.
Para o endereço serão informados a rua, número, bairro, cidade, estado, complemento e cep.
Para o(s) pet(s) serão informados o nome, espécie, raça, cor, gênero, descrição, idade e uma foto obrigatória. O registro de pelo menos um pet é obrigatório.

##### Agendar hospedagens
O cliente, devidamente autenticado, poderá realizar o agendamento do serviço, e seu pet será alocado em algum quarto disponível.  Se não houver quartos disponíveis, o cliente poderá entrar em uma lista de interesse e ser notificado por e-mail quando algum quarto estiver disponível.

##### Realizar pagamento
Após o agendamento da hospedagem, o cliente deverá realizar o pagamento na plataforma, podendo pagar com cartão de crédito ou PIX.
*Obs.: Se o cliente agendar um quarto e o pagamento não for realizado dentro de 10 minutos, o agendamento é cancelado e o quarto é liberado. Durante esse tempo, o quarto ficará indisponível para outros clientes, sendo necessário que entrem na lista de interesse.*

##### Avaliar hospedagem
O cliente que terminou a hospedagem de seu pet poderá avaliar sua hospedagem através de “estrelas/pegadas” e um comentário.

##### Visualizar hospedagens
O usuário recepcionista deverá visualizar as hospedagens atuais do hotel, tanto em forma de listagem de hospedagens (finalizadas ou não), quanto em forma de quartos (em aberto).

##### Finalizar hospedagem
Caso a hospedagem, por algum motivo, termine num prazo menor do que o registrado na plataforma, o usuário recepcionista poderá finalizar o serviço manualmente. Em casos normais, o sistema irá finalizar o serviço automaticamente ao fim do prazo estabelecido.


#### Requisitos Não-Funcionais

##### Segurança e controle de acesso
Cadastro e autenticação de usuários utilizando criptografia em suas senhas.

##### Qualidade
Realização de testes automatizados unitários e de integração antes de qualquer atualização do sistema.

##### Responsividade
O site deverá se adaptar a qualquer tamanho de tela em que esteja sendo executado.
