class CreateAgentDto {
    constructor(name, cpf, age, email) {
      this.name = name;
      this.cpf = cpf;
      this.age = age;
      this.email = email;
    }
  
    static fromRequest(body) {
      return new CreateAgentDto(body.name, body.cpf, body.age, body.email);
    }
  }
  
  module.exports = CreateAgentDto;